import Cars from "@/models/CarModel";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

// Implement connection pooling
let cachedConnection = null;

async function connectToDatabase() {
  if (cachedConnection) {
    return cachedConnection;
  }

  cachedConnection = await mongoose.connect(
    process.env.MONGODB_CONNECTION_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      socketTimeoutMS: 30000,
      connectTimeoutMS: 30000,
    }
  );

  return cachedConnection;
}

export async function GET(req, { params }) {
  await connectToDatabase();

  try {
    const { carName } = params;
    console.log("CAR NAME = ", carName);

    // Use lean() for faster query execution
    const car = await Cars.findOne({ name: carName }).lean().hint({ name: 1 });
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
