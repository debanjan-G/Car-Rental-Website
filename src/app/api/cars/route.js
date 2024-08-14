import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    return NextResponse.json({ msg: "Getting all cars" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "Something went wrong!" });
  }
}
