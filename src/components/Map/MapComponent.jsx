'use client'
import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';


const MapComponent = () => {

    const [geocode, setGeocode] = useState({ lat: "22.5744", lng: "88.3629" })
    const [loading, setLoading] = useState(false)
    const [address, setAddress] = useState({ city: "", suburb: "", neighbourhood: "", postcode: "", state: "" })

    const MapEventComponent = () => {
        useMapEvent('click', (event) => {
            const { lat, lng } = event.latlng;
            setGeocode({ lat: lat, lng: lng });
        })

    }

    const customMarkerIcon = new Icon({
        iconUrl: "https://img.icons8.com/?size=100&id=13800&format=png&color=000000",
        iconSize: [38, 38] //standard size of the icon
    })

    const getAddress = async () => {
        try {
            setLoading(true)

            const response = await axios.get(`http://localhost:3000/api/get-location?lat=${geocode.lat}&lng=${geocode.lng}`)

            console.log(response);

            const { city, town, postcode, suburb, state } = response.data.response.address;

            if (!city) {
                setAddress({ city: town, postcode, suburb, state })
            } else {
                setAddress({ city, postcode, suburb, state })
            }




        } catch (error) {
            console.log("ERROR - ", error);

        }
        finally {
            setLoading(false)
        }
    }



    return (
        <div>
            <div className='font-light text-center my-2 bg-white rounded-sm p-2'>
                {loading ? <Spinner /> : <h1 >
                    {address.city === '' ? "Selected Address will appear here " :
                        ` ${address.suburb}, ${address.city}, ${address.state} - ${address.postcode}`
                    }
                </h1>}

            </div>

            <MapContainer center={[22.5744, 88.3629]} zoom={13} className='z-10 h-[45vh] w-[45vw]'>
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://tile.openstreetmap.org/{z}/{x}/{y}.png' />

                <Marker position={geocode} icon={customMarkerIcon}>
                    <Popup>
                        <h1 className='text-lg font-semibold'>Selected Location</h1>
                    </Popup>
                </Marker>

                <MapEventComponent />

            </MapContainer>

            <div className='flex justify-center'>
                <button onClick={getAddress} className='bg-slate-900 p-2 w-fit rounded-md text-white mt-2'>Get Address</button>
            </div>
        </div>
    )
}

export default MapComponent
