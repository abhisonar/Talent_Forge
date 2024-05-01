const express = require('express');
const { getEnums, getEnumByType } = require('../../controllers/other/enum.controller');

const router = express.Router();

router.get('/enums', getEnums);
router.get('/enums/:enumType', getEnumByType);

module.exports = router;
