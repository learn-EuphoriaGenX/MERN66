const Wishlist = require('../models/wishlist.model');

module.exports.addToWishlist = async (req, res) => {
    try {
        let { id } = req.params;
        let wishlistItem = await Wishlist.findOne({
            'product.id': id,
            userId: req.user.id
        });
        if (wishlistItem) {
            wishlistItem.product.quantity += 1;
            await wishlistItem.save();
            return res.status(200).send({ message: "Wishlist Item Quantity Updated!", success: true, item: wishlistItem });
        }
        let newItem = await Wishlist.create({
            userId: req.user.id,
            product: {
                id: id,
                quantity: 1
            },
        })
        return res.status(200).send({ message: "Item added to Wishlist!", success: true, item: newItem });
    } catch (error) {
        return res.status(500).send({ message: "Internal Server Error", success: false })
    }
}
module.exports.updateWishlist = async (req, res) => {
    try {
        let { id } = req.params;
        let wishlist = await Wishlist.updateOne({
            id: id,
            $set: req.body
        })

        return res.status(200).send({ message: "Item Updated Successfully!", success: true, item: wishlist });
    } catch (error) {
        return res.status(500).send({ message: "Internal Server Error", success: false })
    }
}

module.exports.viewAllWishlist = async (req, res) => {
    try {
        let wishlists = await Wishlist.find({
            userId: req.user.id
        })

        return res.status(200).send({ message: "Users Wishlist Fetched!", success: true, items: wishlists });
    } catch (error) {
        return res.status(500).send({ message: "Internal Server Error", success: false })
    }
}

module.exports.deleteAllWishlist = async (req, res) => {
    try {
        await Wishlist.deleteMany({ userId: req.user.id })

        return res.status(200).send({ message: "Wishlists Deleted successfully!", success: true });
    } catch (error) {
        return res.status(500).send({ message: "Internal Server Error", success: false })
    }
}
module.exports.deleteWishlistById = async (req, res) => {
    try {
        let { id } = req.params;
        await Wishlist.deleteOne({ _id: id })
        return res.status(200).send({ message: "Wishlist Deleted successfully!", success: true });
    } catch (error) {
        return res.status(500).send({ message: "Internal Server Error", success: false })
    }
}