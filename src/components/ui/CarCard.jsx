import React from 'react'
import Image from 'next/image'
import GeneralCarImage from '../../../public/mercedes_PNG80135.jpg'
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsFillFuelPumpFill } from "react-icons/bs";
import carMileageImg from "../../../public/icons8-car-mileage-50.png"
import Button from './Button';

const CarCard = ({ company, model, carClass, cityMileage, year, fuelType }) => {
    return (
        <div className='bg-gray-200 rounded-md text-black m-4 flex flex-col items-center  sm:basis-1/2 md:basis-1/3 lg:basis-1/4'>
            <div className='w-full'>
                <Image src={GeneralCarImage} alt='' className='w-full h-full object-cover ' />
            </div>

            <div className='p-4'>
                <h1 className='text-2xl text-center'>{company} {model}</h1>
                <p className='text-slate-700 font-light text-center text-xl'>{carClass}</p>
                <div className='flex items-center justify-evenly gap-4'>

                    <p> <FaRegCalendarAlt className='inline' />  {year}</p>
                    <p><BsFillFuelPumpFill className='inline' /> {fuelType}</p>
                    <p>
                        <Image src={carMileageImg} alt='car-mileage' className='size-10 inline object-cover' />
                        {cityMileage}
                    </p>


                </div>
                <div className='w-full mx-auto'>
                    <button className='bg-blue-300 p-2 rounded-full w-full hover:bg-blue-500 hover:text-white duration-200 transition'>Rent Car</button>
                </div>

            </div>

        </div>
    )
}

export default CarCard
