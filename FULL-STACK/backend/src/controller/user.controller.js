const User = require('../models/user.model');
let jsonwebtoken = require('jsonwebtoken');


module.exports.loginUser = async (req, res) => {
    try {
        let { email, password } = req.body
        if (!email || !password) {
            return res.status(400).send({ message: "All Fields are Required!", success: false })
        }

        if (!(password.length >= 8)) {
            return res.status(400).send({ message: "Password Must be atleast 8.", success: false })
        }

        let isExist = await User.findOne({ email, password })
        if (!isExist) {
            return res.status(400).send({ message: "User does'nt Exists!", success: false })
        }

        delete isExist._doc.password
        // Generate JWT Token
        let token = jsonwebtoken.sign({ id: isExist._id, email: isExist.email }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });
        return res.status(201).send({ message: "User Login Successfull!", success: true, user: isExist, token })

    } catch (error) {
        return res.status(500).send({ message: "Internal Server Error", success: false })
    }
}

module.exports.registerUser = async (req, res) => {
    try {
        let { username, email, password } = req.body
        if (!username || !email || !password) {
            return res.status(400).send({ message: "All Fields are Required!", success: false })
        }

        let isExist = await User.findOne({ email })
        if (isExist) {
            return res.status(400).send({ message: "User already Exists!", success: false })
        }

        if (!(password.length >= 8)) {
            return res.status(400).send({ message: "Password Must be atleast 8.", success: false })
        }

        let newUser = await User.insertOne({
            username, email, password
        })
        delete newUser._doc.password
        return res.status(201).send({ message: "User Registration Successfull!", success: true, user: newUser })

    } catch (error) {
        console.log(error);

        return res.status(500).send({ message: "Internal Server Error", success: false })
    }
}

module.exports.userProfile = async (req, res) => {
    let user = req.user;
    try {
        let userData = await User.findById(user.id).select("-password");
        return res.status(200).send({ message: "User Profile Fetched Successfully", success: true, user: userData });
    } catch (error) {
        return res.status(500).send({ message: "Internal Server Error", success: false })
    }
}