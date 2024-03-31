const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  university: { type: String, required: true },
  degree: { type: String, required: true },
  from: { type: Date, required: true },
  to: { type: Date, required: true },
  cgpaOrPercentage: { type: Number, required: true, min: 0, max: 100 },
});

module.exports = mongoose.model("Education-Deatils", educationSchema);
