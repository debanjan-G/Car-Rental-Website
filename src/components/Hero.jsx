import React from 'react'
import HeroImage from "../../public/sven-d-a4S6KUuLeoM-unsplash.jpg"
import Image from 'next/image'
import Button from './ui/Button'

const Hero = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center md:flex-row gap-2 md:justify-center m-10 md:m-0 overflow-hidden">

            <div className="w-full md:w-1/3 p-4 flex flex-col gap-4 items-center justify-center ">
                <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left">Drive Your Way – Rent the Perfect Car Today!</h1>
                <p className="text-lg text-center md:text-left md:text-2xl font-extralight">Affordable rates, flexible rentals, and a wide selection of vehicles to fit your needs. Reserve your car in minutes and hit the road with confidence.</p>
                <Button>Browse Cars</Button>
            </div>

            <div className="flex justify-center md:items-center md:justify-start md:size-1/3">
                <Image src={HeroImage} alt='hero-image' className=" w-fit h-fit" priority />
            </div>

        </div>
    )
}

export default Hero
