const express = require('express');
const router = express.Router()
const listingController = require('../controller/listingController');
const protect = require('../middleware/auth');


router.route("/listing").post(protect,listingController);



module.exports = router;