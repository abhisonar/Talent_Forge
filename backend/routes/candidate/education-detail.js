const express = require("express");
const {
  listEducations,
  addEducationDetail,
  updateEducationDetail,
  deleteEducationDetail,
} = require("../../controllers/candidate/personal-detail/education-detail");
const router = express.Router();

router.get("/education-detail", listEducations);
router.post("/education-detail", addEducationDetail);
router.put("/education-detail", updateEducationDetail);
router.delete("/education-detail", deleteEducationDetail);

module.exports = router;
