const mongoose = require('mongoose');

const instituteCollectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
});

module.exports = mongoose.model('InstituteCollection', instituteCollectionSchema);
