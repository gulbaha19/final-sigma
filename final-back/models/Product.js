import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    detailedDescription: {
      type: String,
      required: true,
    },
    additionalInfo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);
export default mongoose.model("Product", ProductSchema)