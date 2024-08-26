import React from "react";
import PricingImage from "../../../public/Pricing_Image.png";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PricingPage = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-2xl  md:text-4xl my-8">
        Pricing Overview
      </h1>
      {/* <Image
        src={PricingImage}
        alt="pricing"
        className="object-contain w-80 mx-auto rounded-md my-10"
      /> */}
      <div className="w-full md:w-1/2 mx-auto p-2">
        <p className="font-light text-base md:text-xl text-center">
          At <span className="font-bold">CarHub</span>, we offer transparent and
          flexible pricing tailored to meet your travel needs. Our rental prices
          are determined by the duration of your rental and the type and size of
          the car you select. This ensures that you only pay for what you need,
          whether it's a quick trip across town or an extended journey.
        </p>

        <h2 className="text-center my-10 text-xl md:text-3xl">
          How We Calculate Your Rental Cost
        </h2>
        <ol className="list-decimal">
          <Accordion type="single" collapsible className="w-full">
            <li className="my-4">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-base md:text-xl">
                  Duration of Rental
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  <ul className="list-disc">
                    <li className="my-4">
                      <span className="font-bold">Hourly Rentals:</span> All our
                      rentals start with a base hourly rate, making it easy to
                      plan short trips or errands. The final cost depends on the
                      number of hours you rent the car, with an additional
                      charge if the vehicle's seating capacity exceeds 5.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </li>
            <li className="my-4">
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-base md:text-xl">
                  Car Type and Size
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  <ul className="list-disc">
                    <li className="my-4">
                      <span className="font-bold">Compact Cars:</span> Priced
                      based on an hourly rate, these cars are perfect for city
                      driving. The rate is fixed for cars with a seating
                      capacity of up to 5. Generally, they have lower rates,
                      reflecting their affordability and common usage.
                    </li>
                    <li className="my-4">
                      <span className="font-bold">Sedans:</span> With a bit more
                      room and comfort, sedans follow the same pricing structure
                      as compact cars. For every hour of use, a base rate is
                      charged, and if the sedan seats more than 5 people, an
                      extra ₹50 per hour is added. Rates are usually moderate,
                      balancing between compact cars and SUVs.
                    </li>
                    <li className="my-4">
                      <span className="font-bold">SUVs:</span> Built for larger
                      groups or off-road adventures, SUVs are charged by the
                      hour. Additionally, for SUVs with more than 5 seats, an
                      extra ₹50 per hour is added to the base hourly rate. They
                      typically have higher rates due to their size, capability,
                      and higher costs.
                    </li>
                    <li className="my-4">
                      <span className="font-bold">Luxury/High-End SUVs:</span>{" "}
                      These vehicles have premium features and are priced higher
                      reflecting their luxurious nature. Rates are higher
                      compared to standard SUVs.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </li>
          </Accordion>
        </ol>
      </div>
    </div>
  );
};

export default PricingPage;
