const express = require('express');
const { listInstitutes } = require('../../controllers/candidate/personal-detail/education-detail');
const router = express.Router();

router.get('/institutes', listInstitutes);

module.exports = router;




