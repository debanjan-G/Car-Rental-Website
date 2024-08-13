'use client'

import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import { fetchCars } from '@/app/utils';
import CarCard from './ui/CarCard';

const Catalogue = () => {

    const [cars, setCars] = useState([]);
    const [company, setCompany] = useState('');

    useEffect(() => {
        const getCars = async () => {
            const response = await fetchCars();
            console.log(response);

            setCars(response);
        }

        getCars();

    }, [])

    return (
        <div className='my-10 p-4'>
            <h1 className='font-semibold'>Car Catalogue</h1>
            <p className='font-light'>Explore cars you might like</p>

            <SearchBar setCars={setCars} company={company} setCompany={setCompany} />

            <div className='w-full flex flex-wrap justify-center'>

                {cars.length > 0 ?
                    (
                        cars.map((car, index) =>
                            <CarCard fuelType={car.fuel_type} key={index} company={car.make} model={car.model} carClass={car.class} year={car.year} cityMileage={car.city_mpg} />)
                    )
                    :
                    <div className='flex h-full items-center justify-center'>
                        <p className='w-1/2 mx-auto mt-8 text-center
                    text-2xl font-semibold'>Sorry, we don't have any cars from {company} available right now. Please check back later or explore our other options!</p>
                    </div>

                }


            </div>

        </div>
    )
}

export default Catalogue
