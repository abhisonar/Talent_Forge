const mongoose = require("mongoose");

const companyCollectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
});

module.exports = mongoose.model(
  "CompanyCollection",
  companyCollectionSchema
);
