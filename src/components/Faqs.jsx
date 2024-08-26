import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Faqs = () => {
    return (
        <div className='flex h-[80vh] p-4 flex-col justify-center items-center'>
            <h1 className='text-2xl text-center  md:text-4xl font-bold my-4'>Frequently Asked Questions</h1>
            <Accordion type="single" collapsible className="w-full md:w-1/2 text">
                <AccordionItem value="item-1">
                    <AccordionTrigger className='text-base md:text-xl'>How do I book a car?</AccordionTrigger>
                    <AccordionContent className='text-base'>
                        Browse our catalog, select the car you want, and proceed to checkout to complete your booking.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger className='text-base md:text-xl'>What are the rental rates?</AccordionTrigger>
                    <AccordionContent className='text-base'>
                        Rental rates vary based on the car model and rental duration. Visit our Pricing page for detailed information.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className='text-base md:text-xl'>What documents do I need to rent a car?</AccordionTrigger>
                    <AccordionContent className='text-base'>
                        You’ll need a valid driver’s license and a government-issued ID.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger className='text-base md:text-xl'>Are there mileage limits on rentals?</AccordionTrigger>
                    <AccordionContent className='text-base'>
                        Most rentals include a mileage limit. Additional miles may incur extra charges.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default Faqs
