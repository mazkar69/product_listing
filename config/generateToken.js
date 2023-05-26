var jwt = require('jsonwebtoken');


const generateToken = function(_id){
    const secret = process.env.JWT_SECRET;
    return jwt.sign({_id}, secret, {
        expiresIn: '30D'
        });

}


module.exports = generateToken;