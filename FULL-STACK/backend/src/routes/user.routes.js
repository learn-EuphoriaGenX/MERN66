const express = require('express')
const { loginUser, registerUser, userProfile } = require('../controller/user.controller')
let router = express.Router()

router.get("/login", loginUser)
router.get("/register", registerUser)
router.get("/profile", userProfile)
module.exports = router