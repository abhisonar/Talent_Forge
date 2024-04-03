const express = require("express");
const {
  listEducations,
  addEducationDetail,
} = require("../../controllers/candidate/personal-detail/education-detail");
const router = express.Router();

router.get("/education-detail", listEducations);
router.post("/education-detail", addEducationDetail);

module.exports = router;
