import React from 'react'
import RentConfirmedImage from "../../public/RentConfirmedImage.png"
import Image from 'next/image'
import Link from 'next/link'

const RentConfirmed = () => {
    return (
        <div className='w-1/3 flex flex-col items-center justify-center gap-4'>
            <div className='p-4 bg-green-400'>
                <Image src={RentConfirmedImage} alt='rent-confirmed-image' className='object-contain w-64 h-6w-64' />
            </div>
            <div>
                <h1 className='text-center'>Thank You! 🎉</h1>
                <p className='font-light text-center text-lg'>Your car rental has been successfully confirmed!
                    You’re all set and your vehicle will be ready for pick-up as per your booking details.</p>
            </div>
            <Link href='/' className='no-underline p-2 bg-blue-500 hover:bg-blue-700 transition duration-200 text-white rounded-md w-1/3 mx-auto text-center'>Home</Link>
        </div>
    )
}

export default RentConfirmed
