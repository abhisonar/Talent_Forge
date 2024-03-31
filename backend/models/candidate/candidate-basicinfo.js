const mongoose = require("mongoose");

const basicInfoSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  first_name: { type: String, required: true },
  middleName: String,
  last_name: { type: String, required: true },
  bio: String,
});

module.exports = mongoose.model("BasicInfo", basicInfoSchema);
