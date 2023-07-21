import mongoose from "mongoose";
const UsersSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);
export default mongoose.model("Users", UsersSchema);
