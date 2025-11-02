const jwt = require('jsonwebtoken');
module.exports.authMiddleware = (req, res, next) => {
    try {
        let token = req.headers.authorization;
        if (!token) {
            return res.status(401).send({ message: "Unauthorized Access: No Token Provided", success: false });
        }

        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(401).send({ message: "Unauthorized Access: Invalid Token", success: false });
            } else {
                req.user = decoded;
                next();
            }
        });
    } catch (error) {
         return res.status(500).send({ message: "Internal Server Error", success: false })
    }
}