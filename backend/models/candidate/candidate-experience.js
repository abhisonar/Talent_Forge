const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  designation: { type: String, required: true },
  company: { type: String, required: true },
  from: { type: Date, required: true },
  to: { type: Date, required: true },
  location: String,
  description: String,
});

module.exports = mongoose.model("Experience", experienceSchema);


