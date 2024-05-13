const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const experienceSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  designation: {
    type: ObjectId,
    ref: "DesignationCollection",
    default: null,
    required: true
  },
  designationTitle: {
    type: String,
    maxLength: 100,
  },
  companyName: {
    type: String,
    maxLength: 100,
  },
  company: { type: ObjectId, ref: "CompanyCollection", default: null, required: true },
  isCurrentlyWorking: { type: Boolean, required: true, default: false },
  since: { type: Date, required: true },
  until: {
    type: Date,
    required: function () {
      return !this.isCurrentlyWorking;
    },
  },
  location: { type: String },
  description: { type: String, maxLength: 500 },
});

module.exports = mongoose.model(
  "CandidateExperienceCollection",
  experienceSchema
);
