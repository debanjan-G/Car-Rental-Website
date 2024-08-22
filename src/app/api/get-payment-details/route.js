import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(req) {
  try {
    const headers = req.headers;
    console.log("HEADERS = ", headers);

    const accessToken = headers.get("accessToken");
    const searchParams = req.nextUrl.searchParams;

    const paymentID = searchParams.get("paymentID");

    console.log("payment id -", paymentID);
    console.log("access token -", accessToken);

    const response = await axios.get(
      `https://api.instamojo.com/v2/payments/${paymentID}/`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    console.log("RESPONSE = ", response);
    return NextResponse.json({ success: true, res: response.data });
  } catch (error) {
    // console.log(error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
