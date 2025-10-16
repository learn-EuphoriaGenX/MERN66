module.exports.loginUser = (req, res) => {
    return res.send({ message: "Welcome To Login", success: true })
}

module.exports.registerUser = (req, res) => {
    return res.send({ message: "Welcome To Register", success: true })
}

module.exports.userProfile = (req, res) => {
    return res.send({ message: "Welcome To Profile", success: true })
}