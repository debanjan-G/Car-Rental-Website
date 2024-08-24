'use client'
import React, { useState } from 'react'
import { MapContainer, Marker, TileLayer, Popup, useMapEvent } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';




const MapContainerComponent = () => {

    const [geoCode, setGeoCode] = useState([]);


    const GetLocationComponent = () => {
        useMapEvent('click', (event) => {
            const { lat, lng } = event.latlng;
            setGeoCode([lat, lng]);
            console.log(lat, lng);

        })


    }

    const customMarkerIcon = new Icon({
        iconUrl: "https://img.icons8.com/?size=100&id=13800&format=png&color=000000",
        iconSize: [38, 38] //standard size of the icon
    })

    return (
        // Currently the map is centered at Kolkata
        <MapContainer center={[22.5744, 88.3629]} zoom={13} className='h-[75vh] w-[75vw] mx-auto' >

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
    )
}

export default MapContainerComponent
