import mongoose from "mongoose";
const ClientSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    message: {
      type: String,
    },
    basket: {
      type: String,
    },
    allTotal: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);
export default mongoose.model("Client", ClientSchema);
