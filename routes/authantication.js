//This file contain login and signup routes

const express = require("express");
const loginController = require("../controller/loginController");
const signupController = require("../controller/signupController");
const router = express.Router()



router.route('/login').post(loginController);
router.route('/signup').post(signupController);

module.exports = router;