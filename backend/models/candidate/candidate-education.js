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
    ref: 'EducationTypeCollection',
    required: true,
  },
  institute: {
    type: ObjectId,
    ref: 'InstituteCollection',
    required: true,
  },
  course: {
    type: ObjectId,
    ref: 'CourseCollection',
    required: true,
  },
  since: { type: Date, required: true },
  until: { type: Date, required: true },
  gradingSystem: {
    type: ObjectId,
    ref: 'EnumCollection',
    required: true,
  },
  marks: { type: Number, required: true, min: 0, max: 10 },
});

module.exports = mongoose.model('CandidateEducationCollection', educationSchema);
