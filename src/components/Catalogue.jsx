'use client'

import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import { fetchCars } from '@/app/utils';
import CarCard from './ui/CarCard';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"
import CARS from '@/data/cars';




const Catalogue = () => {

    const [cars, setCars] = useState([]);
    const [company, setCompany] = useState('');

    useEffect(() => {
        // fetch all cars from API
        setCars(CARS);

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
                            <CarCard key={car.id} name={car.name} carClass={car.modelType} year={car.modelYear} cityMileage={car.mileage} seats={car.seatingCapacity} image={car.image} />)
                    )
                    :
                    <div className='flex h-full items-center justify-center'>
                        <Alert className='w-1/2 bg-red-100 mt-8'>

                            <AlertTitle className='text-2xl font-bold'>
                                <Terminal className="h-4 w-4 inline m-2" />
                                Heads up!
                            </AlertTitle>
                            <AlertDescription className='text-lg'>
                                Sorry, we don't have any cars matching your search available for rent right now. Please check back later or explore other options!
                            </AlertDescription>
                        </Alert>
                    </div>

                }


            </div>

        </div>
    )
}

export default Catalogue
