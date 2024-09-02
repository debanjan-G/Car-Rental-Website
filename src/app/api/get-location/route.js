import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(req) {
  try {
    // userAgent =
    //   "UrbannDrive/1.0 (https://urbanndrive.netlify.app; contact@urbanndrive.netlify.app)";
    const searchParams = req.nextUrl.searchParams;

    console.log(searchParams);

    // console.log("SEARCH PARAMS = ", searchParams);

    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");

    const response = await axios.get(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`,
      {
        headers: {
          // "User-Agent": userAgent,
          Referrer: "https://urbanndrive.netlify.app",
        },
      }
    );

    console.log(response);

    console.log(response.data.display_name);

    return NextResponse.json({ success: true, response: response.data });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, msg: error.message },
      { status: 500 }
    );
  }
}
