

// Importing the user model
const generateToken = require("../config/generateToken");
const User = require("../model/user")


const signupController = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {

            res.status(301).json({ "success": false, "msg": "Email already exists in databse"})

        }
        else {

            let newUser = new User({ name, email, password });
            newUser = await newUser.save();
            console.log(newUser)
            const token = generateToken(newUser._id);
            res.status(201).json({ "success": true, "msg": "login successfull", "token": token })
        }


    } catch (error) {
        console.log(error)
        res.status(500).json({ "success": false, "msg": "Server error" });
    }

}

module.exports = signupController;