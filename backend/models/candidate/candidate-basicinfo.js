const mongoose = require("mongoose");

const basicInfoSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  firstName: { type: String, required: true },
  middleName: String,
  lastName: { type: String, required: true },
  bio: String,
});

module.exports = mongoose.model("BasicInfo", basicInfoSchema);
