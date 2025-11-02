const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'User ID is required.']
    },
    wishlist: {
        type: mongoose.Types.ObjectId,
        ref: 'Wishlist',
        required: [true, 'Wishlist reference is required.']
    },
    paymentMethod: {
        type: String,
        enum: ['COD', 'RAZORPAY'],
        required: [true, 'Payment method is required.']
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'cancelled'],
        default: 'pending'
    },
    orderReceipt: {
        type: String,
        required: [true, 'Order receipt is required.']
    },
    totalPrice: {
        type: Number,
        min: [0, 'Total price cannot be negative.']
    }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
