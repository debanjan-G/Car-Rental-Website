'use client'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import CARS from '@/data/cars';
import Image from 'next/image';
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { LuFuel } from "react-icons/lu";
import { Field, Fieldset, Input, Label, Legend, Textarea } from '@headlessui/react'
import CalenderForm from "./ui/DatePicker"
import DatePicker from './ui/DatePicker';

const Checkout = () => {

    const searchParams = useSearchParams();

    const [selectedCar, setSelectedCar] = useState({});
    const [pickupTime, setPickupTime] = useState();
    const [returnTime, setReturnTIme] = useState();
    const [rentDuration, setRentDuration] = useState();
    const [baseRate, setBaseRate] = useState(0);


    useEffect(() => {

        //fetching details of the selected car
        const fetchedCar = CARS.find(car => car.name === searchParams.get('car'));
        setSelectedCar(CARS.find(car => car.name === searchParams.get('car')));


        // calculating base rate according to selected car
        switch (fetchedCar.modelType) {
            case "Compact Car":
                setBaseRate(200);
                break;

            case "Sedan":
                setBaseRate(350)
                break;

            case "SUV":
                setBaseRate(500)
                // if SUV has more than 5 seats, we charge more
                if (Number(fetchedCar.seatingCapacity) > 5)
                    setBaseRate(prev => (prev + 100))
                break;

            default:
                setBaseRate(300);
        }



    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("PICKUP TIME: ", pickupTime);
        console.log("RETURN TIME: ", returnTime);

        // Convert the times to Date objects (using today's date for both)
        const today = new Date().toISOString().split('T')[0]; // Get today's date in 'YYYY-MM-DD' format
        const pickupDate = new Date(`${today}T${pickupTime}:00`);
        const returnDate = new Date(`${today}T${returnTime}:00`);

        // Calculate the difference in milliseconds
        const differenceInMilliseconds = returnDate - pickupDate;

        // Convert the difference to hours
        const differenceInHours = differenceInMilliseconds / (1000 * 60 * 60);

        // Get the ceiling value
        const hoursCeil = Math.ceil(differenceInHours);
        setRentDuration(hoursCeil)
    }




    return (
        <div>
            <h1 className='text-center text-4xl font-bold'>CHECKOUT PAGE</h1>
            <div className='flex justify-evenly items-center gap-8 h-screen my-8'>


                <div className='flex flex-col items-center justify-center '>
                    <h1 className='text-2xl'>{selectedCar.name}</h1>

                    <Image src={selectedCar.image} width={400} height={400} className='object-contain' alt='selected-car' />

                    <hr className='bg-red-500' />

                    <div className='flex flex-col gap-4 flex-wrap items-center'>
                        <p className='flex gap-2'> <MdOutlineAirlineSeatReclineNormal className='size-6' /> Seating Capacity - {selectedCar.seatingCapacity}</p>

                        <p className='flex gap-2'>
                            <LuFuel className='size-6' /> Mileage - {selectedCar.mileage}
                        </p>

                        <p className='flex gap-2'> <FaCar className='size-6' /> Class - {selectedCar.modelType}
                        </p>

                        <p className='flex gap-2'><FaRegCalendarAlt className='size-6' /> Manufacture Year - {selectedCar.modelYear}
                        </p>
                    </div>
                </div>

                <form className='w-1/3' onSubmit={handleSubmit}>
                    <Fieldset className="space-y-8 bg-slate-200 p-4 rounded-sm shadow-lg ">
                        <Legend className="text-xl font-bold text-center">Rent details</Legend>

                        <Field>
                            <Label className="block">Pickup Date</Label>
                            <DatePicker/>
                        </Field>


                        <Field>
                            <Label className="block">Pickup Time</Label>
                            <Input type='time' className="mt-1 block rounded-md p-2 shadow-md w-full" name="address" required onChange={(e) => setPickupTime(e.target.value)} />
                        </Field>

                        <Field>
                            <Label className="block">Return Time</Label>
                            <Input type='time' className="mt-1 block rounded-md p-2 shadow-md w-full" name="address" required onChange={(e) => setReturnTIme(e.target.value)} />
                        </Field>

                        <Field>
                            <Label className="block">Pickup Location</Label>
                            <Input className="mt-1 block rounded-md p-2 shadow-md w-full" name="pickup-location" placeholder='eg: 123 Main St, Downtown Central' required />                        </Field>

                        <Field>
                            <Label className="block">Delivery notes (optional)</Label>
                            <Textarea className="resize-none mt-1 block rounded-md p-2 shadow-md w-full" rows={6} name="notes" />
                        </Field>

                        {rentDuration ?
                            <div>
                                <p>Rent Duration = {rentDuration} hours</p>
                                <p>Total Cost = ₹{baseRate * rentDuration}</p>
                                <button type='submit' className="w-full text-sm md:text-base bg-blue-700 p-2 rounded-md text-white font-medium hover:bg-indigo-600 duration-300 transition">Confirm Rent</button>
                            </div> :
                            <button type='submit' className="w-full text-sm md:text-base bg-blue-700 p-2 rounded-md text-white font-medium hover:bg-indigo-600 duration-300 transition">Calculate Total Cost</button>}



                    </Fieldset>
                </form>

            </div>
        </div>
    )
}

export default Checkout
