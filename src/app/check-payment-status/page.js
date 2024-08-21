import React from "react";
import Image from "next/image";
import PaymentSuccessImage from "../../../public/tick_image.png";
import Link from "next/link";

const PaymentStatusPage = () => {
  return (
    <div className="h-screen flex items-center bg-slate-300 ">
      <div className="bg-white shadow-lg flex flex-col justify-center items-center w-fit mx-auto p-10">
        <Image
          src={PaymentSuccessImage}
          alt="payment-successful"
          className="object-contain w-40"
        />
        <h1 className="text-green-500 text-3xl font-bold">
          Woohoo! You Did It!
        </h1>
        <p className="font-light text-xl">Payment confirmed—you're all set!</p>
        <Link
          href="/"
          className="outline no-underline outline-green-500 py-2 px-4 my-4 rounded-md text-green-500"
        >
          Done
        </Link>
      </div>
    </div>
  );
};

export default PaymentStatusPage;
