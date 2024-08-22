import React from "react";
import Link from "next/link";
import { CiCreditCard2 } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMoneyBill } from "react-icons/fa";
import { MdOutlineSmartphone } from "react-icons/md";
import { MdOutlinePermIdentity } from "react-icons/md";

const PaymentDetails = ({
    customerName,
    email,
    phone,
    completionTime,
    amount,
    paymentBy,
}) => {


    const formattedTime = new Date(completionTime).toLocaleTimeString([], {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });
    const formattedDate = new Date(completionTime).toLocaleDateString()
    console.log(formattedDate);
    console.log(formattedTime);


    return (
        <div className="bg-white text-black shadow-lg flex flex-col justify-center items-center w-fit mx-auto p-10">
            <h1 className="text-green-500 font-bold">Payment Details</h1>
            <hr />
            <div className="flex flex-col my-4 text-xl">
                <p><span className="font-semibold"><FaMoneyBill className="inline" /> Amount Paid:</span> ₹{amount}</p>

                <p><span className="font-semibold"><MdOutlinePermIdentity className="inline" /> Customer Name:</span> {customerName}</p>

                <p><span className="font-semibold"><MdEmail className="inline" /> Email:</span> {email}</p>

                <p><span className="font-semibold"><MdOutlineSmartphone className="inline" /> Phone Number:</span> {phone}</p>

                <p><span className="font-semibold"><FaRegClock className="inline" /> Payment Time:</span> On {formattedDate} at {formattedTime}</p>

                <p><span className="font-semibold"><CiCreditCard2 className="inline" /> Payment Mode :</span> {paymentBy}</p>
            </div>
            <Link
                href="/"
                className="outline no-underline hover:bg-green-700 bg-green-500 py-2 px-4 mt-4 rounded-md text-white text-xl"
            >
                Home
            </Link>
        </div>
    );
};

export default PaymentDetails;
