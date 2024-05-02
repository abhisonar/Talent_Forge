const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const experienceSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  designationId: {
    type: ObjectId,
    ref: "DesignationCollection",
    default: null,
  },
  designationTitle: {
    type: String,
    required: true,
    maxLength: 100,
  },
  companyName: {
    type: String,
    required: true,
    maxLength: 100,
  },

  companyId: { type: ObjectId, ref: "CompanyCollection", default: null },
  isCurrentlyWorking: { type: Boolean, required: true, default: false },
  since: { type: Date, required: true },
  until: {
    type: Date,
    required: function () {
      return !this.isCurrentlyWorking;
    },
  },
  location: { type: Date, required: true },
  description: { type: String, maxLength: 500 },
});

module.exports = mongoose.model(
  "CandidateExperienceCollection",
  experienceSchema
);
