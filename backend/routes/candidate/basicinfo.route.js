const express = require("express");
const {
  updateBasicInfo,
  getBasicInfo,
} = require("../../controllers/candidate/personal-detail/basic-info");
const router = express.Router();

router.get("/basic-info", getBasicInfo);
router.post("/basic-info", updateBasicInfo);

module.exports = router;
