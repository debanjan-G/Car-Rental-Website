import React from 'react'
import SearchBar from './SearchBar'

const Catalogue = () => {
    return (
        <div className='my-10 p-5'>
            <h1 className='font-semibold'>Car Catalogue</h1>
            <p className='font-light'>Explore cars you might like</p>

            <SearchBar />

        </div>
    )
}

export default Catalogue
