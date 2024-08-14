import React from 'react'
import Image from 'next/image'
import GeneralCarImage from '../../../public/mercedes_PNG80135.jpg'
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import carMileageImg from "../../../public/icons8-car-mileage-50.png"

const CarCard = ({ name, carClass, cityMileage, year, seats, image }) => {
    return (
        <div className='bg-gray-200 rounded-md text-black m-4 flex flex-col items-center  sm:basis-1/2 md:basis-1/3 lg:basis-1/4 hover:scale-105 transition duration-200 '>

            <div className='w-full h-50'>
                <Image src={image} alt={name + " image"} width={300} height={300} className='w-fit h-fit object-cover ' />
            </div>

            <div className='p-4'>
                <h1 className='text-2xl text-center'>{name}</h1>
                <p className='text-slate-700 font-light text-center text-xl'>{carClass}</p>
                <div className='flex items-center justify-evenly gap-4'>

                    <p> <FaRegCalendarAlt className='inline' />  {year}</p>
                    <p><MdOutlineAirlineSeatReclineNormal className='inline' /> {seats}</p>
                    <p>
                        <Image src={carMileageImg} alt='car-mileage' className='size-10 inline object-cover' />
                        {cityMileage}
                    </p>


                </div>
                <div className='text-center'>
                    <button className='bg-blue-300 p-2 rounded-full w-36  hover:bg-blue-500 hover:text-white duration-200 transition'>Rent Car</button>
                </div>

            </div>

        </div>
    )
}

export default CarCard
