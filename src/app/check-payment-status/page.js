"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import PaymentSuccessImage from "../../../public/tick_image.png";
import Link from "next/link";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import PaymentDetails from "@/components/PaymentDetails";

const PaymentStatusPage = () => {
  const query = useSearchParams();

  const [showPaymentDetails, setShowPaymentDetails] = useState(false);

  // states to store the payment details
  const [customerName, setCustomerName] = useState("");
  const [customerMail, setCustomerMail] = useState("");
  const [customerNumber, setCustomerNumber] = useState("");
  const [paymentVia, setPaymentVia] = useState("");
  const [amount, setAmount] = useState("");
  const [completedAt, setCompletedAt] = useState("");

  const accessToken = query.get("token");
  const paymentID = query.get("payment_id");

  // console.log("token = ", accessToken);
  // console.log("payment id = ", paymentID);

  const getPaymentDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/get-payment-details?paymentID=${paymentID}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`, // Correct header format
          },
        }
      );

      console.log(response);

      //saving payment details as states
      setCustomerName(response.data.res.name);
      setCustomerMail(response.data.res.email);
      setCustomerNumber(response.data.res.phone);
      setAmount(response.data.res.amount);
      setPaymentVia(response.data.res.instrument_type);
      setCompletedAt(response.data.res.completed_at);
    } catch (error) {
      console.log(error);
    } finally {
      setShowPaymentDetails(true);
    }
  };

  return (
    <div className=" h-fit p-10 flex items-center bg-slate-300 ">
      {showPaymentDetails ? (
        <PaymentDetails
          customerName={customerName}
          email={customerMail}
          phone={customerNumber}
          completionTime={completedAt}
          amount={amount}
          paymentBy={paymentVia}
        />
      ) : (
        <div className="bg-white shadow-lg flex flex-col justify-center items-center min-w-fit mx-auto p-10">
          <Image
            src={PaymentSuccessImage}
            alt="payment-successful"
            className="object-contain w-40"
            priority
          />
          <h1 className="text-green-500 text-xl md:text-3xl font-bold">
            Woohoo! You Did It!
          </h1>
          <p className="font-light text-base md:text-xl my-2 text-center">
            Payment confirmed — you're all set!
          </p>
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
      )}
    </div>
  );
};

export default PaymentStatusPage;
