import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(req) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const postcode = searchParams.get("postcode");
    console.log("SEARCH PARAMS = ", searchParams);

    const response = await axios.get(
      ` https://nominatim.openstreetmap.org/search?postalcode=${postcode}&format=json&limit=1`
    );

    console.log(response);

    return NextResponse.json({ success: true, response: response.data });
  } catch (error) {
    // console.log(error);
    return NextResponse.json(
      { success: false, msg: "Something Went Wrong!" },
      { status: 500 }
    );
  }
}
