const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const educationSchema = new mongoose.Schema({
  user_id: {
    type: ObjectId,
    ref: 'User',
    required: true,
  },
  educationType: {
    type: ObjectId,
    ref: 'Enum',
    required: true,
  },
  institute: { type: String, required: true },
  course: { type: String, required: true },
  since: { type: Date, required: true },
  until: { type: Date, required: true },
  gradingSystem: {
    type: String,
    ref: 'Enum',
    required: true,
  },
  marks: { type: Number, required: true, min: 0, max: 10 },
});

module.exports = mongoose.model('CandidateEducationCollection', educationSchema);
