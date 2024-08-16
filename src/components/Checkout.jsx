'use client'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import CARS from '@/data/cars';
import Image from 'next/image';
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { LuFuel } from "react-icons/lu";
import { Field, Fieldset, Input, Label, Legend } from '@headlessui/react'
import DatePicker from './ui/DatePicker';
import RentConfirmed from './RentConfirmed';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Link from 'next/link';
import EmptyCheckoutImage from "../../public/what-you-were-looking-was-not-found-search-not-found-concept-illustration-flat-design-eps10-modern-style-graphic-element-for-landing-page-empty-state-ui-infographic-etc-vector.jpg"

const Checkout = () => {
    const searchParams = useSearchParams();

    const [selectedCar, setSelectedCar] = useState({});
    const [pickupTime, setPickupTime] = useState('');
    const [returnTime, setReturnTime] = useState('');
    const [rentDuration, setRentDuration] = useState(null);
    const [baseRate, setBaseRate] = useState(0);

    const [isConfirmed, setIsConfirmed] = useState(false);
    const [isCarSelected, setIsCarSelected] = useState(searchParams.size > 0);

    useEffect(() => {
        if (isCarSelected) {
            const carName = searchParams.get('car');
            const fetchedCar = CARS.find(car => car.name === carName);

            if (fetchedCar) {
                setSelectedCar(fetchedCar);

                // Calculate base rate according to selected car
                let rate = 0;
                switch (fetchedCar.modelType) {
                    case "Compact Car":
                        rate = 200;
                        break;
                    case "Sedan":
                        rate = 350;
                        break;
                    case "SUV":
                        rate = 500;
                        if (Number(fetchedCar.seatingCapacity) > 5) {
                            rate += 100; // Additional charge for SUVs with more than 5 seats
                        }
                        break;
                    default:
                        rate = 300;
                        break;
                }
                setBaseRate(rate);
            }
        }
    }, [isCarSelected, searchParams]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("PICKUP TIME: ", pickupTime);
        console.log("RETURN TIME: ", returnTime);

        // Convert times to Date objects (using today's date for both)
        const today = new Date().toISOString().split('T')[0]; // Get today's date in 'YYYY-MM-DD' format
        const pickupDate = new Date(`${today}T${pickupTime}:00`);
        const returnDate = new Date(`${today}T${returnTime}:00`);

        // Calculate the difference in hours
        const differenceInHours = (returnDate - pickupDate) / (1000 * 60 * 60);
        const hoursCeil = Math.ceil(differenceInHours);

        setRentDuration(hoursCeil);
    }

    return (
        isCarSelected ? (
            <div>
                <h1 className='text-center text-4xl font-bold my-4'>CHECKOUT PAGE</h1>
                <div className='flex justify-evenly items-center gap-8 my-4'>
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='text-2xl'>{selectedCar.name}</h1>
                        <Image src={selectedCar.image} width={400} height={400} className='object-contain' alt='selected-car' />

                        <hr className='bg-red-500' />

                        <div className='flex flex-col gap-4 flex-wrap items-center'>
                            <p className='flex gap-2'><MdOutlineAirlineSeatReclineNormal className='size-6' /> Seating Capacity - {selectedCar.seatingCapacity}</p>
                            <p className='flex gap-2'><LuFuel className='size-6' /> Mileage - {selectedCar.mileage}</p>
                            <p className='flex gap-2'><FaCar className='size-6' /> Class - {selectedCar.modelType}</p>
                            <p className='flex gap-2'><FaRegCalendarAlt className='size-6' /> Manufacture Year - {selectedCar.modelYear}</p>
                        </div>
                    </div>

                    {isConfirmed ? <RentConfirmed /> : (
                        <form className='w-1/3' onSubmit={handleSubmit}>
                            <Fieldset className="space-y-8 bg-slate-200 p-4 rounded-sm shadow-lg">
                                <Legend className="text-xl font-bold text-center">Rent details</Legend>

                                <Field>
                                    <Label className="block">Pickup Date</Label>
                                    <DatePicker />
                                </Field>

                                <Field>
                                    <Label className="block">Pickup Time</Label>
                                    <Input type='time' className="mt-1 block rounded-md p-2 shadow-md w-full" required onChange={(e) => setPickupTime(e.target.value)} />
                                </Field>

                                <Field>
                                    <Label className="block">Return Time</Label>
                                    <Input type='time' className="mt-1 block rounded-md p-2 shadow-md w-full" required onChange={(e) => setReturnTime(e.target.value)} />
                                </Field>

                                <Field>
                                    <Label className="block">Pickup Location</Label>
                                    <Input className="mt-1 block rounded-md p-2 shadow-md w-full" placeholder='eg: 123 Main St, Downtown Central' required />
                                </Field>

                                {rentDuration ? (
                                    <div>
                                        <p>Rent Duration = {rentDuration} hours</p>
                                        <p>Total Cost = ₹{baseRate * rentDuration}</p>

                                        <AlertDialog>
                                            <AlertDialogTrigger className='w-full text-sm md:text-base bg-blue-700 p-2 rounded-md text-white font-medium hover:bg-indigo-600 duration-300 transition'>Confirm Rent</AlertDialogTrigger>
                                            <AlertDialogContent>
                                                <AlertDialogHeader>
                                                    <AlertDialogTitle>You're almost ready to hit the road!</AlertDialogTitle>
                                                    <AlertDialogDescription>
                                                        By confirming, you agree to the rental terms and conditions. Your selected car will be reserved for you, and the rental process will begin. Please review your details carefully before proceeding.
                                                    </AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter className='flex items-center'>
                                                    <AlertDialogCancel className='my-0 bg-red-500 text-white hover:bg-red-400'>Cancel</AlertDialogCancel>
                                                    <AlertDialogAction className='my-0 bg-blue-500' onClick={() => setIsConfirmed(true)}>Confirm Rent</AlertDialogAction>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                    </div>
                                ) : (
                                    <button type='submit' className="w-full text-sm md:text-base bg-blue-700 p-2 rounded-md text-white font-medium hover:bg-indigo-600 duration-300 transition">Calculate Total Cost</button>
                                )}
                            </Fieldset>
                        </form>
                    )}
                </div>
            </div>
        ) : (
            <div className='p-4 text-center'>

                <Image src={EmptyCheckoutImage} alt='empty-checkout' className='object-contain size-80 mx-auto ' />
                <h1 className='font-bold'>Oops! Please select a car first</h1>
                <p className='font-light text-lg mb-4 '>It looks like you haven't selected a car yet. Please choose a car first to proceed with the checkout.</p>
                <Link href='/' className='my-4 p-3 no-underline text-lg bg-blue-500 hover:bg-blue-700 duration-200 transition text-white rounded-md'>Browse Cars</Link>
            </div>

        )
    )
}

export default Checkout;
