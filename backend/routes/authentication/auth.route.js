const express = require('express');
const router = express.Router();
const { login, currentUser } = require('../../controllers/authentication/login');
const { register } = require('../../controllers/authentication/register');

router.post('/register', register);
router.post('/login', login);
router.post('/current-user', currentUser);
module.exports = router;
