'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Tab, TabGroup, TabList } from '@headlessui/react'

const Navbar = () => {
    const pathname = usePathname()

    console.log(pathname);


    return (
        <header className='flex justify-between items-center px-6 md:px-16 py-4'>

            <Link href="/" className='no-underline text-black font-extrabold text-xl md:text-2xl'>
                <h1 className='font-extrabold text-sm md:text-2xl m-0'> 🚗  CarHub</h1>
            </Link>

            <TabGroup>
                <TabList className="flex gap-1 md:gap-4">
                    <Link href='/checkout' className='no-underline rounded-full'>
                        <Tab
                            className={`md:w-32 rounded-full py-1 px-1 md:px-3 text-xs md:text-base font-semibold focus:outline-none 
                        ${pathname === '/checkout' ? 'bg-blue-500 text-white' : 'data-[hover]:bg-white/5'} 
                        transition duration-200`}
                        >
                            Checkout
                        </Tab>
                    </Link>

                    <Link href='/pricing' className='no-underline  rounded-full'>
                        <Tab
                            className={`md:w-32 rounded-full py-1 px-1 md:px-3 text-xs md:text-base font-semibold focus:outline-none 
                        ${pathname === '/pricing' ? 'bg-blue-500 text-white' : 'data-[hover]:bg-white/5'} 
                        transition duration-200`}
                        >
                            Pricing
                        </Tab>
                    </Link>

                    <Link href='/faqs' className='no-underline rounded-full'>
                        <Tab
                            className={`md:w-32 rounded-full py-1 px-1 md:px-3 text-xs md:text-base font-semibold focus:outline-none 
                        ${pathname === '/faqs' ? 'bg-blue-500 text-white' : 'data-[hover]:bg-white/5'} 
                        transition duration-200`}
                        >
                            FAQs
                        </Tab>
                    </Link>
                </TabList>
            </TabGroup>

        </header>
    )
}

export default Navbar
