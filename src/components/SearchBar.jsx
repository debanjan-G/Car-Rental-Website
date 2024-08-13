'use client'
import React, { useState } from 'react'
import SearchIcon from './ui/SearchIcon';
import CompanyMenu from './CompanyMenu';
import axios from 'axios';
import { fetchCars } from '@/app/utils';

const SearchBar = ({ setCars }) => {

    const [searchedCarCompany, setSearchedCarCompany] = useState()

    const handleFormSubmit = async (e) => {
        try {
            e.preventDefault();
            console.log(company);


        } catch (err) {
            console.log("ERROR: ", err);
        }


    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div className='flex gap-2'>


                <CompanyMenu company={searchedCarCompany} setCompany={setSearchedCarCompany} />
                <button type='submit' className='hover:scale-105 transition duration-200'>  <SearchIcon />
                </button>


            </div>
        </form>
    )
}

export default SearchBar
