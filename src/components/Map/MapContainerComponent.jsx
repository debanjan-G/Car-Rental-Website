'use client'
import React, { useState } from 'react'
import { MapContainer, Marker, TileLayer, Popup, useMapEvent } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';




const MapContainerComponent = () => {

    const [geoCode, setGeoCode] = useState({ lat: "22.5744", lng: "88.3629" });
    const [selectedLocation, setSelectedLocation] = useState({
        suburb: "", city: "", state: "", postcode: ""
    })
    const [postalCode, setPostalCode] = useState("")
    const [loading, setLoading] = useState(false)


    const GetLocationComponent = () => {
        useMapEvent('click', (event) => {
            const { lat, lng } = event.latlng;
            setGeoCode({ lat: lat, lng: lng });
            console.log(lat, lng);
        })
    }

    const getLocationDetails = async () => {
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/';
            setLoading(true)
            if (geoCode.lat === '' || geoCode.lng === '')
                console.log("Please select a location.");

            else {
                const response = await axios.get(`${apiUrl}/api/get-location?lat=${geoCode.lat}&lng=${geoCode.lng}`)

                console.log(response);

                const { city, postcode, suburb, state } = response.data.response.address;
                setSelectedLocation({ city, postcode, suburb, state })
            }

        } catch (error) {
            console.log("ERROR: ", error);
        }
        finally {
            setLoading(false)
        }
    }

    const getGeoCode = async (e) => {
        try {
            e.preventDefault()
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/';

            if (postalCode === '')
                console.log("Please enter a Postal Code.");

            else {
                console.log("POSTAL CODE = ", postalCode);

                const response = await axios.get(`${apiUrl}/api/get-geocode?postcode=${postalCode}`)
                console.log(response);


                const { lat, lon } = response.data.response[0];
                console.log(lat, lon);

                setGeoCode({ lat, lng: lon })
            }

        } catch (error) {
            console.log("ERROR: ", error);
        }

    }

    const customMarkerIcon = new Icon({
        iconUrl: "https://img.icons8.com/?size=100&id=13800&format=png&color=000000",
        iconSize: [38, 38] //standard size of the icon
    })

    return (
        <>
            {/* // Currently the map is centered at Kolkata */}
            <div className='text-center'>
                <form onSubmit={getGeoCode}>
                    <input value={postalCode}
                        onChange={(e) => { setPostalCode(e.target.value) }} className='bg-slate-200 p-3 rounded-md' type="text" name="" id="" placeholder='Postal Code' />
                    <button className='bg-slate-900 p-3 rounded-md text-white'>search</button>
                </form>
                <h1 className='text-2xl font-bold flex flex-col items-center'>Selected Location</h1>
                {loading && <Spinner />}
                {selectedLocation.city !== '' &&
                    <p className='text-lg font-light'>{selectedLocation.suburb}{selectedLocation.city} - {selectedLocation.postcode} {selectedLocation.state} </p>
                }

            </div>


            <MapContainer center={[geoCode.lat, geoCode.lng]} zoom={13} className='h-[75vh] w-[75vw] mx-auto' >

                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'

                />

                {geoCode.length !== 0 && <Marker position={geoCode} icon={customMarkerIcon}>
                    <Popup>
                        <h1 className='text-lg font-semibold'>Selected Location</h1>
                    </Popup>
                </Marker>}

                <GetLocationComponent />


            </MapContainer>
            <div className='flex justify-center my-4'>
                <button onClick={getLocationDetails} className='w-fit mx-auto bg-slate-900 py-2 px-4 rounded-md text-white'>Get Location Details</button>
            </div>
        </>
    )
}

export default MapContainerComponent
