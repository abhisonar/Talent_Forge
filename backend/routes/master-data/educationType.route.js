const express = require("express");
const {
  listEducationType,
} = require("../../controllers/candidate/personal-detail/education-detail");
const router = express.Router();

router.get("/educationType", listEducationType);

module.exports = router;
