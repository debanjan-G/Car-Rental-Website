'use client'
import React, { useState } from 'react'
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import { companies } from '@/car_companies'

const CompanyMenu = ({ company, setCompany }) => {
    const [query, setQuery] = useState('');

    const filteredCompanies = query
        ? companies.filter((company) =>
            company.toLowerCase().includes(query.toLowerCase())
        )
        : companies;

    const handleOptionSelect = (selectedCompany) => {
        setQuery(selectedCompany);
        setCompany(selectedCompany);
    }

    return (
        <div className='opacity-100 w-1/2'>
            <Combobox value={query} onChange={handleOptionSelect}>
                <ComboboxInput
                    autoComplete='off'
                    className="p-2 w-full bg-slate-100 rounded-md"
                    placeholder='Company name'
                    aria-label="Company"
                    onChange={(e) => setQuery(e.target.value)}
                />
                <ComboboxOptions className="w-full border bg-white mt-1 rounded-md shadow-lg">
                    {filteredCompanies.length === 0 && query !== "" ? (
                        <ComboboxOption value="" disabled className="w-full p-2 text-gray-500">
                            No Company Found.
                        </ComboboxOption>
                    ) : (
                        filteredCompanies.map((company) => (
                            <ComboboxOption
                                key={company}
                                value={company}
                                className='
                                    w-full p-2  hover:bg-blue-600 hover:text-white transition duration-200'

                            >
                                {company}
                            </ComboboxOption>
                        ))
                    )}
                </ComboboxOptions>
            </Combobox>
        </div>
    );
}

export default CompanyMenu;
