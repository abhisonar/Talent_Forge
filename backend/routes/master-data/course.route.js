const express = require("express");
const {
  listCourses,
} = require("../../controllers/candidate/personal-detail/education-detail");
const router = express.Router();

router.get("/courses", listCourses);

module.exports = router;
