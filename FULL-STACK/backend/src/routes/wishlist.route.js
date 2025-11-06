const express = require('express')
const { authMiddleware } = require('../../middleware/auth.middleware')
const { addToWishlist, viewAllWishlist, deleteAllWishlist, deleteWishlistById, updateWishlist } = require('../controller/wishlist.controller')
let router = express.Router()

router.post("/add/:id", authMiddleware, addToWishlist)
router.put("/update/:id", authMiddleware, updateWishlist)
router.get("/all", authMiddleware, viewAllWishlist)
router.delete("/delete", authMiddleware, deleteAllWishlist)
router.delete("/delete/:id", authMiddleware, deleteWishlistById)

module.exports = router