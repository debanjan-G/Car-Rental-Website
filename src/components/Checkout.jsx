'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image';
import SelectedCarComponent from './SelectedCarComponent';
import { useRouter } from 'next/navigation';
import DatePicker from './ui/DatePicker';
import RentConfirmed from './RentConfirmed';
import { Badge } from "@/components/ui/badge"
import Link from 'next/link';
import EmptyCheckoutImage from '../../public/No-Car-Selected-Image.png'
import dynamic from 'next/dynamic';
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
import { Button } from "@/components/ui/button"
import axios from 'axios';
import MyLoader from './ui/Loader/MyLoader';

// importing MAP component with SSR disabled
const MapComponent = dynamic(() => import('../components/Map/MapComponent'), { ssr: false });

const Checkout = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [selectedCar, setSelectedCar] = useState({});
    const [pickupTime, setPickupTime] = useState('');
    const [returnTime, setReturnTime] = useState('');
    const [rentDuration, setRentDuration] = useState(null);
    const [cost, setCost] = useState(0);
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [isCarSelected, setIsCarSelected] = useState(searchParams.size > 0);
    const [showCarDetails, setShowCarDetails] = useState(false);
    const carDetailsRef = useRef();
    const [showAddressForm, setShowAddressForm] = useState(false);
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page

        const fetchCar = async () => {
            try {
                setLoading(true)
                const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/';
                if (isCarSelected) {
                    const carName = searchParams.get('car');

                    const response = await axios.get(`${apiUrl}/api/cars/${carName}`)
                    console.log(response);

                    const fetchedCar = response.data.car;

                    if (fetchedCar) {
                        setSelectedCar(fetchedCar);
                        setCost(fetchedCar.hourlyRate);
                    }
                }
            } catch (error) {
                console.log("ERROR: ", error);
            }
            finally {
                setLoading(false)
            }
        }

        fetchCar();


    }, [isCarSelected, searchParams]);

    const handleSubmit = (e) => {
        window.scrollTo(0, 0);
        e.preventDefault();
        // show the address form
        setShowAddressForm(true);

        // Convert times to Date objects (using today's date for both)
        const today = new Date().toISOString().split('T')[0]; // Get today's date in 'YYYY-MM-DD' format
        const pickupDate = new Date(`${today}T${pickupTime}:00`);
        const returnDate = new Date(`${today}T${returnTime}:00`);

        if (returnDate < pickupDate) {
            returnDate.setDate(returnDate.getDate() + 1); // Add one day to the return date
        }

        // Calculate the difference in hours
        const differenceInHours = (returnDate - pickupDate) / (1000 * 60 * 60);
        const hoursCeil = Math.abs(Math.ceil(differenceInHours));

        setRentDuration(hoursCeil);
        setCost(prev => prev * hoursCeil);
    }

    const handleCarDetailsShow = () => {
        setShowCarDetails(true);
        carDetailsRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    const navigateToPayment = () => {
        router.push(`/payment-form?cost=${cost}`)
    }

    return (
        isCarSelected ? (
            <div>
                <h1 className='text-center text-4xl font-bold my-4'>CHECKOUT PAGE</h1>

                {isConfirmed && (
                    <div className='text-center p-10 w-full mx-auto'>
                        <RentConfirmed />
                        <button
                            className='py-2 px-4 my-4 bg-slate-500 hover:bg-slate-700 transition duration-200 text-white rounded-md mx-auto text-center'
                            onClick={handleCarDetailsShow}
                        >
                            Check Rent Details
                        </button>
                    </div>
                )}



                <div className='flex flex-wrap justify-evenly items-center gap-8 my-4'>
                    {loading
                        ? <MyLoader /> :
                        <SelectedCarComponent

                            name={selectedCar.name}
                            image={selectedCar.image}
                            seatingCapacity={selectedCar.seatingCapacity}
                            mileage={selectedCar.mileage}
                            modelType={selectedCar.modelType}
                            modelYear={selectedCar.modelYear}
                            hourlyRate={selectedCar.hourlyRate}
                            cost={cost}
                            rentDuration={rentDuration}
                        />
                    }


                    {showAddressForm ?

                        <div className='w-full mx-auto md:w-1/2 space-y-8 bg-slate-200 p-4 rounded-sm shadow-lg'>

                            <legend className="text-xl font-bold text-center">Address details</legend>

                            <div className='w-full flex justify-center'>
                                <MapComponent />
                            </div>

                            <AlertDialog className='z-20'>
                                <AlertDialogTrigger asChild>
                                    <Button className="w-full text-sm md:text-base bg-blue-700 p-2 rounded-md text-white font-medium hover:bg-indigo-600 duration-300 transition" variant="outline">Confirm Address
                                    </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            Please review your address details carefully. Confirming will save this address and finalize your changes.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        {/* <AlertDialogAction> */}
                                        <button className="text-sm md:text-base bg-blue-700 py-2 px-3 rounded-md text-white hover:bg-indigo-600 duration-300 transition" onClick={navigateToPayment}>Continue</button>
                                        {/* <Lin k href={`/payment-form?cost=${cost}`}>
                                                Continue
                                            </Link> */}
                                        {/* </AlertDialogAction> */}
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>


                        </div>

                        :

                        (loading ?

                            <h1 className=' w-full mx-auto text-xl md:text-3xl font-light text-center'>Car Details loading...</h1>
                            :

                            <form className='w-full mx-10 md:w-1/3' onSubmit={handleSubmit}>
                                <fieldset className="space-y-8 bg-slate-200 p-4 rounded-sm shadow-lg">
                                    <legend className="text-xl font-bold text-center">Rent details</legend>

                                    <div>
                                        <label className="block">Pickup Date</label>
                                        <DatePicker />
                                    </div>

                                    <div>
                                        <label className="block">Pickup Time</label>
                                        <input
                                            type='time'
                                            className="mt-1 block rounded-md p-2 shadow-md w-full"
                                            required
                                            onChange={(e) => setPickupTime(e.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <label className="block">Return Time</label>
                                        <input
                                            type='time'
                                            className="mt-1 block rounded-md p-2 shadow-md w-full"
                                            required
                                            onChange={(e) => setReturnTime(e.target.value)}
                                        />
                                    </div>

                                    {rentDuration ? (
                                        <div className='w-full'>


                                            <Link href={`payment-form?cost=${cost}`} className='my-0 bg-blue-500 no-underline text-white px-4 py-2 rounded-sm w-full'>Proceed to Payment</Link>
                                        </div>
                                    ) : (
                                        <button type='submit' className="w-full text-sm md:text-base bg-blue-700 p-2 rounded-md text-white font-medium hover:bg-indigo-600 duration-300 transition">Continue</button>

                                    )}
                                </fieldset>
                            </form>)
                    }

                </div>

                {
                    showCarDetails && (
                        <div ref={carDetailsRef} className='flex items-center justify-evenly bg-blue-200 p-10 w-fit mx-auto rounded-lg shadow-lg'>
                            <SelectedCarComponent
                                name={selectedCar.name}
                                image={selectedCar.image}
                                seatingCapacity={selectedCar.seatingCapacity}
                                mileage={selectedCar.mileage}
                                modelType={selectedCar.modelType}
                                modelYear={selectedCar.modelYear}
                            />
                            <Badge className='p-4 text-lg'>Rent Duration - {rentDuration} Hours</Badge>
                            <Badge className='p-4 text-lg'>Rent Cost - ₹{cost}</Badge>
                        </div>
                    )
                }
            </div >
        ) : (
            <div className='p-4 text-center'>
                <Image src={EmptyCheckoutImage} alt='empty-checkout' className='object-contain size-80 mx-auto' priority />
                <h1 className='font-bold text-xl md:text-3xl mb-4'>Oops! Please select a car first</h1>
                <p className='font-light text-base md:text-lg mb-4'>It looks like you haven&apos;t selected a car yet. Please choose a car first to proceed with the checkout.
                </p>
                <Link href='/' className='my-4 p-3 no-underline text-sm md:text-lg bg-blue-500 hover:bg-blue-700 duration-200 transition text-white rounded-md'>Browse Cars</Link>
            </div>
        )
    )
}

export default Checkout;
