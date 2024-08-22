import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(req) {
  try {
    // console.log("QUERY = ", req.query);

    const headers = req.headers;

    const accessToken = headers.get("authorization").split(" ")[1]; //getting the access token
    const searchParams = req.nextUrl.searchParams;
    console.log("SEARCH PARAMS = ", searchParams);

    const paymentID = searchParams.get("paymentID");

    console.log("payment id -", paymentID);
    console.log("access token -", accessToken);

    const response = await axios.get(
      `https://test.instamojo.com/v2/payments/${paymentID}/`,
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
