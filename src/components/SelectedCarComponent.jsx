import React from 'react'
import { Badge } from './ui/badge'
import Image from 'next/image'
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { LuFuel } from "react-icons/lu";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

const SelectedCarComponent = ({ name, image, seatingCapacity, mileage, modelType, cost, rentDuration, hourlyRate }) => {
    return (

        <div className='w-full md:w-1/3 flex flex-col items-center justify-center p-4'>

            {rentDuration &&
                <Alert className='mb-4 bg-slate-200'>
                    <AlertTitle className='text-xl '>Total Cost = <span className='font-bold'>₹{cost}</span></AlertTitle>
                    <AlertDescription className='text-xl'>
                        Rent Duration = <span className='font-bold'>{rentDuration} hours</span>
                    </AlertDescription>
                </Alert>
            }

            <h1 className='text-3xl font-bold '>{name}</h1>
            <Image src={image} width={400} height={400} className='object-contain my-4' alt='selected-car' priority />

            <hr className='bg-red-500' />

            <div className='flex flex-wrap gap-4 w-full justify-around items-center'>
                <Badge className='text-center w-52 px-4 py-2 bg-slate-700 hover:bg-blue-700 flex gap-2'>
                    <MdOutlineAirlineSeatReclineNormal className='size-6' /> Seating Capacity - {seatingCapacity}
                </Badge>
                <Badge className='text-center  w-52 px-4 py-2 bg-slate-700 hover:bg-blue-700 flex gap-2'>
                    <LuFuel className='size-6' /> Mileage - {mileage}
                </Badge>
                <Badge className='text-center  w-52 px-4 py-2 bg-slate-700 hover:bg-blue-700 flex gap-2'>
                    <FaCar className='size-6' /> Class - {modelType}
                </Badge>
                <Badge className='text-center  w-52 px-4 py-2 bg-slate-700 hover:bg-blue-700 flex gap-2'>
                    <RiMoneyRupeeCircleLine className='size-6' /> Rate - ₹{hourlyRate}/hr
                </Badge>
            </div>
        </div>

    )
}

export default SelectedCarComponent
