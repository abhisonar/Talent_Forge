const express = require("express");
const router = express.Router();
const {
  login,
  currentUser,
} = require("../controllers/user/authentication/login");
const {
  register,
} = require("../controllers/user/authentication/register");

router.post("/register", register);
router.post("/login", login);
router.post("/current-user", currentUser);
module.exports = router;
