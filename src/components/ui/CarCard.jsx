import React from 'react'
import Image from 'next/image'
import GeneralCarImage from '../../../public/mercedes_PNG80135.jpg'

const CarCard = ({ company, model, carClass, fuelType }) => {
    return (
        <div className='bg-blue-200 text-black p-4 m-4 flex flex-col items-center '>
            <h1 className='text-xl'>{company} {model}</h1>
            <Image src={GeneralCarImage} alt='' className='w-fit h-40 object-contain' />
            <p>{carClass}</p>
            <p>{fuelType}</p>
        </div>
    )
}

export default CarCard
