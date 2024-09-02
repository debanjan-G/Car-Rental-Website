'use client'
import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvent, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';


const MapComponent = () => {

    const [geocode, setGeocode] = useState({ lat: "22.5744", lng: "88.3629" })
    const [loading, setLoading] = useState(false)
    const [displayName, setDisplayName] = useState("")


    const UpdateMapCenter = () => {
        const map = useMap()

        useEffect(() => {
            map.setView([geocode.lat, geocode.lng])
        }, [map])
    }



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
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/';

            setLoading(true)

            const response = await axios.get(`${apiUrl}/api/get-location?lat=${geocode.lat}&lng=${geocode.lng}`)

            console.log(response);

            setDisplayName(response.data.response.display_name)

        } catch (error) {
            console.log("ERROR - ", error);
        }

        finally {
            setLoading(false)
        }
    }

    const getUserLocation = () => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            try {
                const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/';
                setLoading(true)
                // getting user coordinates from geolocation api (in-built in browsers)
                const { latitude, longitude } = position.coords;
                console.log(latitude, longitude);

                //saving user coordinates as state
                setGeocode({ lat: latitude, lng: longitude })
                // making API request to get address from coordinates
                const response = await axios.get(`${apiUrl}/api/get-location?lat=${latitude}&lng=${longitude}`)

                setDisplayName(response.data.response.display_name)


            } catch (error) {
                console.log(error);
            }
            finally {
                setLoading(false)
            }
        })

    }



    return (
        <div className='p-4'>
            <div className='text-sm md:text-base font-light text-center my-2 bg-white rounded-sm p-2 min-w-fit'>
                {loading ? <Spinner /> : <h1 >
                    {displayName === '' ? "Selected Address will appear here " :
                        ` ${displayName}`
                    }
                </h1>}

            </div>

            <MapContainer center={[geocode.lat, geocode.lng]} zoom={13} className='z-10 h-[75vh] w-[75vw] md:h-[45vh] md:w-[45vw]'>
                <TileLayer className='w-full' attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://tile.openstreetmap.org/{z}/{x}/{y}.png' />

                <UpdateMapCenter />

                <Marker position={geocode} icon={customMarkerIcon}>
                    <Popup>
                        <h1 className='text-lg font-semibold'>Selected Location</h1>
                    </Popup>
                </Marker>

                <MapEventComponent />

            </MapContainer>

            <div className='flex justify-center gap-4'>
                <button type='btn' onClick={getAddress} className='bg-slate-900 p-2 min-w-fit rounded-md text-white mt-2 text-sm md:text-base'>Get Address</button>

                <button type='btn' onClick={getUserLocation} className='text-slate-900 p-2 min-w-fit rounded-md bg-white mt-2 text-sm md:text-base'>Detect My Location</button>
            </div>
        </div>
    )
}

export default MapComponent
