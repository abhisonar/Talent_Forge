const express = require("express");
const {
  listGradingSystem,
} = require("../../controllers/candidate/personal-detail/education-detail");
const router = express.Router();

router.get("/gradingSystem", listGradingSystem);

module.exports = router;
