import Cars from "@/models/CarModel";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { carName } = params;
    console.log("CAR NAME = ", carName);

    const car = await Cars.findOne({ name: carName });
    console.log("CAR DOCUMENT = ", car);

    if (!car) {
      return NextResponse.json({ success: false, msg: "Car Not Found!" });
    }

    // return NextResponse.json({ success: true, msg: "Hey there!" });
    return NextResponse.json({ success: true, car });
  } catch (error) {
    // console.log("ERROR -> ", error);
    console.error(error.message);
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
