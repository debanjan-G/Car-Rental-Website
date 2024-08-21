'use client'

import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import CarCard from './ui/CarCard';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"
// import CARS from '@/data/cars';
import axios from 'axios';
import MyLoader from './ui/Loader/MyLoader';




const Catalogue = () => {

    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(false)
    const [fetchToggler, setFetchToggler] = useState(false)
    //everytime fetchToggler changes, all cars will be fetched

    useEffect(() => {
        const fetchAllCars = async () => {
            try {
                setLoading(true)
                const response = await axios.get('http://localhost:3000/api/cars')
                console.log(response);
                setCars(response.data.cars);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false)
            }
        }

        fetchAllCars()

    }, [fetchToggler])




    return (
        <div className='my-10 p-4'>
            <h1 className='font-semibold'>Car Catalogue</h1>
            <p className='font-light'>Explore cars you might like</p>

            <SearchBar setCars={setCars} />
            <button onClick={() => setFetchToggler(prev => !prev)} className='bg-slate-950 text-white rounded-md py-2 px-4 my-4'>Show all</button>


            {loading ? <MyLoader /> :

                <div className='w-full flex flex-wrap justify-center'>

                    {(cars.length > 0) ?
                        (
                            cars.map((car) =>
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


                </div>}

        </div>
    )
}

export default Catalogue
