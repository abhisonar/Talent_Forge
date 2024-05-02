const express = require("express");
const {
  listCompanies,
} = require("../../controllers/candidate/personal-detail/experience-detail");
const router = express.Router();

router.get("/companies", listCompanies);

module.exports = router;
