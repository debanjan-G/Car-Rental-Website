import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(req) {
  try {
    const searchParams = req.nextUrl.searchParams;
    // console.log("SEARCH PARAMS = ", searchParams);

    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");

    const response = await axios.get(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
    );

    // console.log(response);

    return NextResponse.json({ success: true, response: response.data });
  } catch (error) {
    // console.log(error);
    return NextResponse.json(
      { success: false, msg: "Something Went Wrong!" },
      { status: 500 }
    );
  }
}
