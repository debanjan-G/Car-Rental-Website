import React from 'react'
import { Badge } from './ui/badge'
import Image from 'next/image'
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { LuFuel } from "react-icons/lu";
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

const SelectedCar = ({ name, image, seatingCapacity, mileage, modelType, modelYear, cost, rentDuration }) => {
    return (

        <div className='w-full md:w-1/3 flex flex-col items-center justify-center'>

            {rentDuration &&
                <Alert className='mb-4 bg-slate-200'>
                    <AlertTitle className='text-xl '>Total Cost = <span className='font-bold'>₹{cost}</span></AlertTitle>
                    <AlertDescription className='text-xl'>
                        Rent Duration = <span className='font-bold'>{rentDuration} hours</span>
                    </AlertDescription>
                </Alert>
            }

            <h1 className='text-2xl'>{name}</h1>
            <Image src={image} width={400} height={400} className='object-contain' alt='selected-car' />

            <hr className='bg-red-500' />

            <div className='flex flex-wrap gap-4 w-full justify-around items-center'>
                <Badge className='w-fit md:w-52 px-4 py-2 bg-slate-600 flex gap-2'><MdOutlineAirlineSeatReclineNormal className='size-6' /> Seating Capacity - {seatingCapacity}</Badge>
                <Badge className='w-fit md:w-52 px-4 py-2 bg-slate-600 flex gap-2'><LuFuel className='size-6' /> Mileage - {mileage}</Badge>
                <Badge className='w-fit md:w-52 px-4 py-2 bg-slate-600 flex gap-2'><FaCar className='size-6' /> Class - {modelType}</Badge>
                <Badge className='w-fit md:w-52 px-4 py-2 bg-slate-600 flex gap-2'><FaRegCalendarAlt className='size-6' /> Manufacture Year - {modelYear}</Badge>
            </div>
        </div>

    )
}

export default SelectedCar
