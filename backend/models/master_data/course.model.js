const mongoose = require("mongoose");

const courseCollectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
});

module.exports = mongoose.model("CourseCollection", courseCollectionSchema);
