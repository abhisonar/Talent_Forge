const mongoose = require('mongoose');

const enumSchema = new mongoose.Schema({
  code: { type: 'string', require: true },
  codeType: { type: 'string', require: true },
  diplayText: { type: 'string', require: true },
});

module.exports = mongoose.model('EnumCollection', enumSchema);
