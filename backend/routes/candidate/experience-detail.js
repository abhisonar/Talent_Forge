const express = require("express");
const {
  listExperiences,
  addExperienceDetail,
  updateExperienceDetail,
  deleteExperienceDetail,
} = require("../../controllers/candidate/personal-detail/experience-detail");
const router = express.Router();

router.get("/experience-detail", listExperiences);
router.post("/experience-detail", addExperienceDetail);
router.put("/experience-detail/:experienceDetailId", updateExperienceDetail);
router.delete("/experience-detail/:experienceDetailId", deleteExperienceDetail);

module.exports = router;
