'use client'
import React, { useState } from 'react'
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import { companies } from '@/car_companies'

const CompanyMenu = ({ company, setCompany }) => {

    const [query, setQuery] = useState('');

    const filteredCompanies = query ?
        companies.filter((company) => company.toLowerCase().includes(query.toLowerCase())) : companies;

    console.log(filteredCompanies);



    return (
        <div className='opacity-100 w-1/2'>
            <Combobox onClose={() => setQuery('')}>
                <ComboboxInput
                    className="p-2 w-full bg-slate-100 rounded-md"
                    placeholder='Company name'
                    aria-label="Assignee"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)} />

                <ComboboxOptions anchor="bottom" className="w-1/2 border empty:invisible bg-white">
                    {filteredCompanies.map((company) =>
                        <ComboboxOption className="w-full p-2 hover:bg-blue-600 hover:text-white hover:font-semibold duration-200 transition" key={company} >
                            {company}
                        </ComboboxOption>
                    )}
                </ComboboxOptions>
            </Combobox>
        </div>
    );


}

export default CompanyMenu
