const mongoose = require("mongoose");

const educationTypeCollectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
});

module.exports = mongoose.model(
  "EducationTypeCollection",
  educationTypeCollectionSchema
);
