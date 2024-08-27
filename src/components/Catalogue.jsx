'use client'

import React, { useEffect, useRef, useState } from 'react'
import SearchBar from './SearchBar'
import CarCard from './ui/CarCard';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"
// import CARS from '@/data/cars';
import axios from 'axios';
import MyLoader from './ui/Loader/MyLoader';
import PageButton from './ui/PageButton';
import SortCars from './SortCars';


const Catalogue = () => {

    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(false)
    const [fetchToggler, setFetchToggler] = useState(false)
    const [pages, setPages] = useState([])
    //everytime fetchToggler changes, all cars will be fetched

    //pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [carsPerPage, setCarsPerPage] = useState(6);
    const catalogueRef = useRef()
    const [selectedSortOption, setSelectedSortOption] = useState({ id: 0, name: 'Sort Cars' });



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


    //dynamically calculating the number of pages needed to display the cars, with 6 cars per page
    useEffect(() => {
        let pageNo = 1;
        const newPages = []; // Create a new array to store the pages

        for (let i = 1; i <= cars.length; i += 6) {
            newPages.push(pageNo);
            pageNo++;
        }

        setPages(newPages); // Set the new array to state after the loop finishes
    }, [cars.length])


    const lastCarIndex = currentPage * carsPerPage;
    const firstCarIndex = lastCarIndex - carsPerPage;




    return (
        <div className='my-10 p-4' ref={catalogueRef}>
            <div className='flex flex-col items-center mb-10'>
                <h1 className='font-semibold text-4xl'>Car Catalogue</h1>
                <p className='font-light'>Explore cars you might like</p>


            </div>


            <SearchBar setCars={setCars} setSelectedSortOption={setSelectedSortOption}/>

            <SortCars setCars={setCars} cars={cars} selectedSortOption={selectedSortOption} setSelectedSortOption={setSelectedSortOption} />


            {loading ? <MyLoader /> :

                <div className='w-full flex flex-wrap justify-center'>

                    {(cars.length > 0) ?
                        (
                            cars.slice(firstCarIndex, lastCarIndex).map((car) =>
                                <CarCard key={car._id} name={car.name} carClass={car.modelType} year={car.modelYear} cityMileage={car.mileage} seats={car.seatingCapacity} image={car.image} hourlyRate={car.hourlyRate} />)
                        )
                        :
                        <div className='flex flex-col h-full items-center justify-center'>
                            <Alert className='w-full md:w-1/2 bg-red-100 mt-8'>

                                <AlertTitle className='text-2xl font-bold'>
                                    <Terminal className="h-4 w-4 inline m-2" />
                                    Heads up!
                                </AlertTitle>
                                <AlertDescription className='text-lg'>
                                    Sorry, we don't have any cars matching your search available for rent right now. Please check back later or explore other options!
                                </AlertDescription>
                            </Alert>
                            <button onClick={() => setFetchToggler(prev => !prev)} className='w-1/2 bg-slate-950 text-white rounded-md py-2 px-4 my-4'>Show all available cars</button>
                        </div>

                    }


                </div>}
            <div className='flex justify-center gap-2 mt-10'>
                {pages.map((page) => <PageButton catalogueRef={catalogueRef} setCurrentPage={setCurrentPage} currentPage={currentPage} key={page} pageNo={page} />)}
            </div>

        </div>
    )
}

export default Catalogue
