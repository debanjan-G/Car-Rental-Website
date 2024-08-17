import mongoose from "mongoose";
import CARS from "@/data/cars";
import Cars from "@/models/CarModel";

export async function populateDB() {
  try {
    await Cars.insertMany(CARS);
  } catch (error) {
    console.log(error);
  }
}
