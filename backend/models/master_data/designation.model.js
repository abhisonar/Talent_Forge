const mongoose = require("mongoose");

const designationCollectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
});

module.exports = mongoose.model(
  "DesignationCollection",
  designationCollectionSchema
);
