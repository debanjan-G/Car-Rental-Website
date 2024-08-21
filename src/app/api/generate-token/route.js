import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(req) {
  try {


    const body = new URLSearchParams({
      grant_type: "client_credentials",
      client_secret: process.env.PAYMENT_CLIENT_SECRET,
      client_id: process.env.PAYMENT_CLIENT_ID,
    });

    const response = await axios.post(
      "https://test.instamojo.com/oauth2/token/",
      body,
      {
        headers: {
          accept: "application/json",
          "content-type": "application/x-www-form-urlencoded",
        },
      }
    );

    return NextResponse.json({ success: true, res: response.data });
  } catch (error) {
    // console.log("ERROR: ", error);

    return NextResponse.json(
      {
        success: false,
        msg: "Something Went Wrong",
        error,
      },
      { status: 500 }
    );
  }
}
