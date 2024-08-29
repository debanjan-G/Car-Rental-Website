import Cars from "@/models/CarModel";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { carName } = params;
    console.log("CAR NAME = ", carName);

    const explainResult = await Cars.collection
      .find({ name: carName })
      .explain("executionStats");
    console.log("EXPLAIN RESULT = ", explainResult);

    const car = await Cars.findOne({ name: carName }).hint({ name: 1 });
    console.log("CAR DOCUMENT = ", car);

    if (!car) {
      return NextResponse.json({ success: false, msg: "Car Not Found!" });
    }

    return NextResponse.json({ success: true, car });
  } catch (error) {
    console.log("ERROR -> ", error);
    return NextResponse.json(
      { success: false, msg: "Something Went Wrong. Check server console" },
      { status: 500 }
    );
  }
}
