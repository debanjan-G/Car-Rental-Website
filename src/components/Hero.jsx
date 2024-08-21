'use client'
import React, { useRef } from 'react'
import HeroImage from "../../public/iqbal-muakhid-VuCJjPZUZaY-unsplash.jpg"
import Image from 'next/image'
import { Button } from './ui/Button'
import Catalogue from './Catalogue'


const Hero = () => {

    const scrollTargetRef = useRef();

    const scrollToSearch = () => {
        scrollTargetRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div>
            <div className="h-[85vh] flex flex-col justify-center items-center md:flex-row gap-2 md:justify-center m-10 ">

                <div className="w-full md:w-1/3 p-4 flex flex-col gap-4 items-center justify-center ">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-left md:text-left">Drive Your Way – Rent the Perfect Car Today!</h1>
                    <p className="text-lg text-left md:text-left md:text-xl font-extralight">Affordable rates, flexible rentals, and a wide selection of vehicles to fit your needs. Reserve your car in minutes and hit the road with confidence.</p>
                    {/* <Button onClickHandler={scrollToSearch}>Browse Cars</Button> */}
                    <Button onClick={scrollToSearch} className='p-4 text-lg bg-blue-500 hover:bg-blue-700 duration-200 transition'>Browse Cars</Button>
                </div>

                <div className="flex justify-center md:items-center md:justify-start md:size-[40%]">
                    <Image src={HeroImage} alt='hero-image' className="object-contain w-full rounded-md" priority />
                </div>


            </div>
            <div ref={scrollTargetRef}>
                <Catalogue />
            </div>

        </div>


    )
}

export default Hero
