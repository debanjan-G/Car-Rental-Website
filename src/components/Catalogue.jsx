'use client'

import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import { fetchCars } from '@/app/utils';
import CarCard from './ui/CarCard';

const Catalogue = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        const getCars = async () => {
            const response = await fetchCars();
            console.log(response);

            setCars(response);
        }

        getCars();

    }, [])

    return (
        <div className='my-10 p-5 w-full'>
            <h1 className='font-semibold'>Car Catalogue</h1>
            <p className='font-light'>Explore cars you might like</p>

            <SearchBar />
            <div className='flex justify-center gap-4 w-full'>
                {cars.map((car, index) => <CarCard fuelType={car.fuel_type} key={index} company={car.make} model={car.model} carClass={car.class} />)}
            </div>

        </div>
    )
}

export default Catalogue
