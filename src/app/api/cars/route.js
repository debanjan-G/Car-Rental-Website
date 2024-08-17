import { connectDB } from "@/db/connectDB";
import { populateDB } from "@/db/populateDB";
import Cars from "@/models/CarModel";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    connectDB();
    // Fetch all cars from the DB
    let cars = await Cars.find({});

    // If no cars are found, populate the DB
    if (cars.length === 0) {
      await populateDB(); // Await the population process
      cars = await Cars.find({}); // Fetch cars again after population
    }

    return NextResponse.json({ success: true, carCount: cars.length, cars });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "Something went wrong!" }, { status: 500 });
  }
}
