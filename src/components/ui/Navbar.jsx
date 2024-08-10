import React from 'react'
import Button from './Button'
import Link from 'next/link'


const Navbar = () => {
    return (
        <header className='flex justify-between px-6 md:px-16 py-4'>
            <Link href="/" className='no-underline text-black font-extrabold text-xl md:text-2xl'>  🚗  CarHub</Link>
            <Link href='/' className='no-underline  p-2 rounded-full'>Sign in</Link>
        </header >
    )
}

export default Navbar
