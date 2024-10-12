import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {  // Fixed typo from 'desscription'
    type: String,
    required: true,
  },
  image: {
    type: String,  // Fixed typo from 'tye'
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
  createdAt: {
    type:Date,
    default: Date.now,
  },
});

export const Courses = mongoose.model("Courses", schema);
