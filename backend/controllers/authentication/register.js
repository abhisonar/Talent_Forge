const { generateToken } = require("../../utils/generatetoken");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/user/user");
const BasicInfo = require("../../models/candidate/candidate-basicinfo");
const Enum = require("../../models/other/enum.modal");

exports.register = async (req, res) => {
  try {
    const { role, email, first_name, last_name, password } = req.body;
    console.log(role);

    const encryptedPassword = await bcrypt.hash(password, 12);

    // Check if the email already exists
    const check = await User.findOne({ email });
    if (check) {
      return res.status(400).json({
        message:
          "This email address is already in use. Please try a different email address.",
      });
    }
    const roleEnum = await Enum.findOne({ code: role });
    console.log(roleEnum);
    // Create a new user with hashed password
    const user = await new User({
      role: roleEnum?._id,
      email,
      password: encryptedPassword,
    }).save();

    const basicInfo = await new BasicInfo({
      user_id: user.id,
      firstName: first_name,
      lastName: last_name,
    }).save();

    // Generate JWT token for user authentication
    const token = generateToken({ id: user._id.toString() }, "7d");

    // Respond with success message and token
    res.json({
      id: user._id,
      success: true,
      message:
        "Registration completed successfully! Please check your email for verification.",
    });
  } catch (error) {
    // Handle errors
    res.status(500).json({ message: error.message });
  }
};
