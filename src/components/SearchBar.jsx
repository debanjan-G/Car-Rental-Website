'use client'
import React, { useState } from 'react'
import SearchIcon from './ui/SearchIcon';
import CompanyMenu from './CompanyMenu';

const SearchBar = () => {

    const [company, setCompany] = useState('');


    const handleFormSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div className='flex gap-2'>
                {/* <input type="text" placeholder=' Enter company name...' className='p-2 bg-slate-100 rounded-md w-1/3' />
                <input type="text" placeholder=' Enter model name...' className='p-2 bg-slate-100 rounded-md w-1/3' /> */}

                <CompanyMenu company={company} setCompany={setCompany} />
                <SearchIcon />
            </div>
        </form>
    )
}

export default SearchBar
