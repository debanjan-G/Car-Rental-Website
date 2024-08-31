import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
  try {
    const reqBody = await req.json();
    console.log("REQ BODY = ", reqBody);

    const { name, email, number, amount } = reqBody.formData;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/";
    const body = new URLSearchParams({
      allow_repeated_payments: false,
      send_email: false,
      amount,
      purpose: "Car Rent Payment",
      buyer_name: name,
      email,
      phone: number,
      redirect_url: `${apiUrl}/check-payment-status?token=${reqBody.accessToken}`,
    });

    const response = await axios.post(
      "https://test.instamojo.com/v2/payment_requests/",
      body,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${reqBody.accessToken}`,
          "content-type": "application/x-www-form-urlencoded",
        },
      }
    );

    console.log("RESPONSE = ", response);

    return NextResponse.json({
      success: true,
      paymentID: response.data.id,
      redirectURL: response.data.longurl,
    });
  } catch (error) {
    // console.log(error);
    return NextResponse.json(
      { success: false, msg: "Something Went Wrong" },
      { status: 500 }
    );
  }
}

/*
 DUMMY CARD DETAILS 

Mastercard -

Card Number: 5214 4789 0000 5330

Expiry: 01/2025

CVV: 123

OTP: 111111

VISA -

Card Number: 4065 6200 0000 1239

Expiry: 01/2025 CVV: 123 OTP: 111111

Debit Card:

Card Number: 4242 4242 4242 4242

Expiry: 01/25

CVV: 111
*/
