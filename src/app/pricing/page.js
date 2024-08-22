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
      <h1 className="text-center font-bold">Pricing Overview</h1>
      <Image
        src={PricingImage}
        alt="pricing"
        className="object-contain w-80 mx-auto rounded-md my-10"
      />
      <div className="w-full md:w-1/2 mx-auto">
        <p className="font-light text-xl text-center">
          At <span className="font-bold my-10">CarHub</span>, we offer
          transparent and flexible pricing tailored to meet your travel needs.
          Our rental prices are determined by the duration of your rental and
          the type and size of the car you select. This ensures that you only
          pay for what you need, whether it's a quick trip across town or an
          extended journey.
        </p>

        <h2 className="text-center my-10 text-xl md:text-3xl">
          How We Calculate Your Rental Cost
        </h2>
        <ol className="list-decimal">
          <Accordion type="single" collapsible className="w-full">
            <li>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-base md:text-xl">
                  Duration of Rental
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  <ul className="list-disc">
                    <li>
                      <span className="font-bold">Hourly Rentals:</span> Ideal
                      for short trips or running errands around the city.
                      Starting at just ₹[X] per hour, our hourly rates are
                      perfect for those quick getaways.{" "}
                    </li>
                    <li>
                      <span className="font-bold">Daily Rentals:</span> Planning
                      a full-day adventure or a weekend getaway? Our daily rates
                      provide great value, with discounts applied for multi-day
                      rentals.{" "}
                    </li>
                    <li>
                      <span className="font-bold">Weekly Rentals:</span> For
                      longer trips or if you simply need a car for an extended
                      period, our weekly rates offer significant savings.{" "}
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </li>
            <li>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-base md:text-xl">
                  Car Type and Size
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  <ul className="list-disc">
                    <li>
                      <span className="font-bold">Compact Cars:</span>{" "}
                      Affordable and fuel-efficient, perfect for city driving
                      and solo travelers. Rates start at ₹[X] per hour.{" "}
                    </li>
                    <li>
                      <span className="font-bold">Sedans:</span> A step up in
                      comfort, ideal for small families or business trips. Rates
                      start at ₹[X] per hour.
                    </li>
                    <li>
                      <span className="font-bold">SUVs:</span> Spacious and
                      powerful, suitable for group travels or off-road
                      adventures. Rates start at ₹[X] per hour, with an
                      additional charge for SUVs with seating capacities of over
                      5 people.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </li>
          </Accordion>
        </ol>
      </div>
      <p className="my-8  text-base md:text-xl outline p-4 rounded-md w-full md:w-1/2 mx-auto">
        Ready to hit the road? Use our booking tool to find the perfect car for
        your needs and see the exact pricing for your trip.
      </p>
    </div>
  );
};

export default PricingPage;
