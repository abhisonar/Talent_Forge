const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  designation: { type: String, required: true },
  company: { type: String, required: true },
  since: { type: Date, required: true },
  until: { type: Date, required: true },
  location: { type: Date, required: true },
  description: { type: String },
});

module.exports = mongoose.model('CandidateExperienceCollection', experienceSchema);
