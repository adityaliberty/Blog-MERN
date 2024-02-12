import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: "string",
      required: true,
      unique: true,
    },
    email: {
      type: "string",
      required: true,
      unique: true,
    },
    password: {
      type: "string",
      required: true,
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
