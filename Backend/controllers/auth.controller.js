import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
export const signUp = async (req, res) => {
  const { userName, password, email } = req.body;
  try {
    if (
      !userName ||
      !password ||
      !email ||
      userName === "" ||
      password === "" ||
      email === ""
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const checkUser = await User.findOne({ email });
    if (checkUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exist" });
    }
    const hashedPassword = bcryptjs.hashSync(password, 12);
    const newUser = new User({
      userName,
      password: hashedPassword,
      email,
    });
    await newUser.save();
    return res.json({ success: true, message: "User added sucessfully" });
  } catch (error) {
    console.log(error);
  }
};
