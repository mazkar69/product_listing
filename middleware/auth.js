const jwt = require("jsonwebtoken");
const User = require('../model/user')
require('dotenv').config();
// const asyncHandler = require("express-async-handler");

const protect = (async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            token = req.headers.authorization.split(" ")[1];
            console.log(token)

            //decodes token id
            const key = process.env.JWT_SECRET;
            var decoded = jwt.verify(token, key);
            console.log(decoded.foo) // 

            req.user = await User.findById(decoded.id).select("-password");

            next();
        } catch (error) {
            res.status(401).json({ "success": false, "msg": "Unauthorized user" });
        }
    }

    if (!token) {
        res.status(401).json({ "success": false, "msg": "Unauthorized user" });
    }
});

module.exports = protect;