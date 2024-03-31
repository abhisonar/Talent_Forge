const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: {
    type: String,
    enum: ["Employer", "Candidate"],
    required: true,
    default: "Candidate",
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deleted: { type: Boolean, default: false },
  verified: {
    type: Boolean,
    default: false,
  },
  // profile: {
  //   candidatebasicinfo_id: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "BasicInfo",
  //     required: true,
  //   },
  // },
});

module.exports = mongoose.model("User", userSchema);
