import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "No Car Name Given"],
    unique: true,
    trim: true,
    index: true, // Correct way to add an index
  },
  hourlyRate: {
    type: Number,
    required: [true, "No hourly rate provided"],
  },
  image: {
    type: String,
    required: [true, "No Car Image Given"],
    trim: true,
  },
  seatingCapacity: { type: Number, required: true },
  mileage: { type: String, required: true },
  modelYear: { type: Number, required: true },
  modelType: { type: String, required: true },
});

const Cars = mongoose.models.car || new mongoose.model("car", CarSchema);

export default Cars;
