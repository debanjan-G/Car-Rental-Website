import mongoose from "mongoose";

export async function connectDB() {
  try {
    const uri = process.env.MONGODB_CONNECTION_URI;
    console.log("Connection URI = ", process.env.MONGODB_CONNECTION_URI);

    if (!uri) {
      throw new Error("Invalid MongoDB connection URI!");
    }

    await mongoose.connect(uri);
    console.log("Connection to DB successfully established.");
  } catch (error) {
    console.log("ERROR: ", error);
  }
}
