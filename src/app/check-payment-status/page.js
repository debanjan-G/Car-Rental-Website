"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import PaymentSuccessImage from "../../../public/tick_image.png";
import Link from "next/link";
import axios from "axios";
import { useSearchParams } from "next/navigation";

const PaymentStatusPage = () => {
  const query = useSearchParams();
  const accessToken = query.get("token");

  const getPaymentDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/get-payment-details?paymentID=${localStorage.getItem(
          "paymentID"
        )}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`, // Correct header format
          },
        }
      );

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex items-center bg-slate-300 ">
      <div className="bg-white shadow-lg flex flex-col justify-center items-center w-fit mx-auto p-10">
        <Image
          src={PaymentSuccessImage}
          alt="payment-successful"
          className="object-contain w-40"
          priority
        />
        <h1 className="text-green-500 text-3xl font-bold">
          Woohoo! You Did It!
        </h1>
        <p className="font-light text-xl">Payment confirmed—you're all set!</p>
        <Link
          href="/"
          className="outline no-underline hover:bg-slate-100 outline-green-500 py-2 px-4 mt-4 rounded-md text-green-500"
        >
          Done
        </Link>
        <button
          onClick={getPaymentDetails}
          className="e bg-green-500 hover:bg-green-600 py-2 px-4 my-4 rounded-md text-white"
        >
          Get Payment Details
        </button>
      </div>
    </div>
  );
};

export default PaymentStatusPage;
