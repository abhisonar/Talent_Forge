const mongoose = require("mongoose");

const preferencesSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  areasOfInterest: [{ type: String }],
  currentlyLookingFor: { type: String },
  workMode: { type: String },
  preferredCityForOffice: { type: String },
});

module.exports = mongoose.model("CandidatePreferenceCollection", preferencesSchema);


