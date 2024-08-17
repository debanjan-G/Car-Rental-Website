import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "No Car Name Given"],
    unique: true,
    trim: true,
  },
  image: {
    type: String,
    required: [true, "No Car Image Given"],
    unique: true,
    trim: true,
  },
  seatingCapacity: { type: Number, required: true },
  mileage: { type: String, required: true },
  modelYear: { type: Number, required: true },
  modelType: { type: Number, required: true },
});

const Cars = mongoose.models.car || mongoose.model("car", CarSchema);

export default Cars;
