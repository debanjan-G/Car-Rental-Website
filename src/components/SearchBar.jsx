'use client'
import React, { useEffect, useState } from 'react'
import SearchIcon from './ui/SearchIcon';
import CompanyMenu from './CompanyMenu';
import axios from 'axios';


const SearchBar = ({ setSearchedCarCompany, searchedCarCompany, setCars, setSelectedSortOption, setFetchToggler, setCurrentPage }) => {



    useEffect(() => { setCurrentPage(1) }, [searchedCarCompany])


    const handleFormSubmit = async (e) => {
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/';
            e.preventDefault();

            //resetting the sort btn
            setSelectedSortOption({ id: 0, name: 'Sort Cars' })

            //fetching cars
            const response = await axios.get(`${apiUrl}/api/cars`)
            console.log(response.data);


            // update the state (show only those cars as searched by the customer)
            const updatedCars = response.data.cars.filter((company) => company.name.includes(searchedCarCompany))

            console.log("UPDATED CARS = ", updatedCars);


            setCars(updatedCars);

        } catch (err) {
            console.log("ERROR: ", err);
        }


    }

    const handleShowAllCars = () => {
        setFetchToggler(prev => !prev)
    }

    return (
        <>
            <form onSubmit={handleFormSubmit} className='w-full'>
                <div className='flex gap-2 justify-center'>



                    <CompanyMenu setCompany={setSearchedCarCompany} />
                    <button type='submit' className='hover:scale-105 transition duration-200'>
                        <SearchIcon />
                    </button>


                </div>
            </form>

            {searchedCarCompany !== "" &&
                <button onClick={handleShowAllCars} className='min-w-1/2 bg-slate-950 text-white rounded-md py-2 px-4 my-4'>Show all available cars</button>
            }
        </>
    )
}

export default SearchBar
