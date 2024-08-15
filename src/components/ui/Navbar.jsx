import React from 'react'
import Link from 'next/link'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'


const Navbar = () => {
    return (
        <header className='flex justify-between px-6 md:px-16 py-4'>
            <Link href="/" className='no-underline text-black font-extrabold text-xl md:text-2xl'>  🚗  CarHub</Link>
            <TabGroup>
                <TabList>
                    <Link href='/checkout' className='no-underline  p-2 rounded-full'>
                        <Tab className='data-[selected]:bg-blue-500 rounded-md p-2 border-none data-[selected]:text-white text-base md:text-xl mx-2  md:w-24 lg:w-32'>
                            Checkout
                        </Tab>
                    </Link>

                    <Link href='/pricing' className='no-underline  p-2 rounded-full'>
                        <Tab className='data-[selected]:bg-blue-500 rounded-md p-2 border-none data-[selected]:text-white text-base md:text-xl mx-2  md:w-24 lg:w-32'>
                            Pricing
                        </Tab>
                    </Link>

                    <Link href='/faqs' className='no-underline  p-2 rounded-full'>
                        <Tab className='data-[selected]:bg-blue-500 rounded-md p-2 border-none data-[selected]:text-white text-base md:text-xl mx-2  md:w-24 lg:w-32'>
                            FAQs
                        </Tab>
                    </Link>

                </TabList>
            </TabGroup>

        </header >
    )
}

export default Navbar
