const express = require('express')
const { loginUser, registerUser, userProfile } = require('../controller/user.controller')
const { authMiddleware } = require('../../middleware/auth.middleware')
let router = express.Router()

router.post("/login", loginUser)
router.post("/register", registerUser)
router.get("/profile", authMiddleware, userProfile)
module.exports = router