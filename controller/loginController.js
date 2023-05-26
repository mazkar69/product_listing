

// Importing the user model
const generateToken = require("../config/generateToken");
const User = require("../model/user")


const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            if (user.password === password) {
                const token = generateToken(user._id);
                res.status(200).json({"success":true,"msg":"login successfull","token":token})
            }
            else{
                res.status(200).json({"success":false,"msg":"Invalid password",})

            }
        }
        else{
            res.status(300).json({"success":false,"msg":"User does't exist, signup first."})

        }



    } catch (error) {
        console.log(error)
        res.status(500).json({ "success": false, "msg": "Server error" });
    }

}

module.exports = loginController;