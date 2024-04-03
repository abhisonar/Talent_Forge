const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  education: {
    type: String,
    ref: "Enum",
    field : 'code',
    required: true,
  },
  institute: { type: String, required: true },
  course: { type: String, required: true },
  since: { type: Date, required: true },
  until: { type: Date, required: true },
  gradingSystem: {
    type: String,
    ref: "Enum",
    required: true,
  },
  marks: { type: Number, required: true, min: 0, max: 10 },
});

module.exports = mongoose.model("EducationDetail", educationSchema);
