import User from "../../models/user.js";
import bcryptjs from "bcryptjs";

export const signUp = async (req, res) => {
  const { userName, password, email } = req.body;
  try {
    // Input validation
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

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcryptjs.hash(password, 12);

    // Create a new user instance
    const newUser = new User({
      userName,
      password: hashedPassword,
      email,
    });

    // Save the new user
    await newUser.save();

    return res.json({ success: true, message: "User added successfully" });
  } catch (error) {
    console.error("Error in signUp:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
