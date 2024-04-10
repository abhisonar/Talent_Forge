const User = require("../../models/user/user");
const bcrypt = require("bcrypt");
const { generateToken } = require("../../utils/generatetoken");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  try {
    const { login_email, login_password } = req.body;

    // Find user by email
    const user = await User.findOne({ email: login_email }).populate("role");
    if (!user) {
      // If user not found, return error
      return res.status(400).json({
        message: "The email you entered is not connected to an account",
      });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(login_password, user.password);
    if (!passwordMatch) {
      // If passwords don't match, return error
      return res.status(400).json({
        message: "Invalid credentials. Please try again.",
      });
    }

    // Generate JWT token for user authentication
    const token = generateToken(
      { id: user?._id?.toString(), role: user?.role?.code?.toString() },
      "7d"
    );
    return res.status(200).json({
      token,
      message: "Login success!",
      success: true,
    });
  } catch (error) {
    // Handle errors
    return res.status(500).json({ message: error.message });
  }
};

exports.currentUser = async (req, res) => {
  const { usertoken } = req.body;
  try {
    // Verify user token
    const user = jwt.verify(usertoken, process.env.TOKEN_SECRET);
    const check = await User.findById(user.id);
    if (!check) {
      // If user not found, return error
      return res.status(400).json({
        notExist: true,
      });
    }
    return res.status(200).json({
      id: check._id,
      useremail: check.email,
      username: check.username,
      verified: check.verified,
      success: true,
    });
  } catch (error) {
    // Handle errors
    return res.status(500).json({ message: error.message });
  }
};
