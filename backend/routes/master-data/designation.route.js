const express = require("express");
const {
  listDesignations,
} = require("../../controllers/candidate/personal-detail/experience-detail");
const router = express.Router();

router.get("/designations", listDesignations);

module.exports = router;
