'use client'
import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';



const MapContainerComponent = () => {
    return (
        // Currently the map is centered at Kolkata
        <MapContainer center={[22.5744, 88.3629]} zoom={13} className='h-[75vh] w-[75vw] mx-auto' >

            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'

            />

        </MapContainer>
    )
}

export default MapContainerComponent
