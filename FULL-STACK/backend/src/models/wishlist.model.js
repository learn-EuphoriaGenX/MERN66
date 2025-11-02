const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
    products: [{
        id: { type: Number, required: true },
        quantity: { type: Number, required: true, min: [1, 'Quantity must be at least 1.'] }
    }],
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'User ID is required.']
    },
    totalPrice: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model('Wishlist', wishlistSchema);
