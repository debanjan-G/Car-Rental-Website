import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between p-4'>
            <h1 className='text-xl md:text-2xl font-semibold'>  🚗  CarHub</h1>
            <button className='text-lg md:text-xl font-extralight bg-blue-700 rounded-lg text-white p-3'>Sign in</button>
        </div>
    )
}

export default Navbar
