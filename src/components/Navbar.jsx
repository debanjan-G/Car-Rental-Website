import React from 'react'
import Button from './ui/Button'

const Navbar = () => {
    return (
        <div className='flex justify-between p-4'>
            <h1 className='text-xl md:text-2xl font-semibold'>  🚗  CarHub</h1>
            <Button>Sign in</Button>
        </div>
    )
}

export default Navbar
