'use client'
import React, { useState } from 'react'
import SearchIcon from './ui/SearchIcon';
import CompanyMenu from './CompanyMenu';
import axios from 'axios';
// import { fetchCars } from '@/app/utils';
// import CARS from '@/data/cars';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'

const SearchBar = ({ setCars, setSelectedSortOption, selectedSortOption }) => {

    const [searchedCarCompany, setSearchedCarCompany] = useState()

    const options = [
        { id: 1, name: 'Sort by Price: Low to High' },
        { id: 2, name: 'Sort by Price: High to Low' },
        { id: 3, name: 'Sort by Mileage' },
        { id: 4, name: 'Sort by Seating Capacity' },
    ]

    const handleFormSubmit = async (e) => {
        try {
            e.preventDefault();
            console.log(searchedCarCompany);
            //fetching cars

            const response = await axios.get('http://localhost:3000/api/cars')
            console.log(response.data);


            // update the state (show only those cars as searched by the customer)
            const updatedCars = response.data.cars.filter((company) => company.name.includes(searchedCarCompany))

            console.log("UPDATED CARS = ", updatedCars);


            setCars(updatedCars);

        } catch (err) {
            console.log("ERROR: ", err);
        }


    }

    return (
        <form onSubmit={handleFormSubmit} className='w-full'>
            <div className='flex gap-2 justify-center'>

                <Listbox value={selectedSortOption} onChange={setSelectedSortOption}>
                    <ListboxButton className='bg-blue-500 text-white font-light p-2 rounded-md w-1/6 h-fit' >{selectedSortOption.name}</ListboxButton>
                    <ListboxOptions anchor="bottom">
                        {options.map((option) => (
                            <ListboxOption key={option.id} value={option} className="bg-white focus:bg-blue-200 p-2 hover:cursor-pointer hover:bg-red-200">
                                {option.name}
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </Listbox>

                <CompanyMenu setCompany={setSearchedCarCompany} />
                <button type='submit' className='hover:scale-105 transition duration-200'>
                    <SearchIcon />
                </button>


            </div>
        </form>
    )
}

export default SearchBar
