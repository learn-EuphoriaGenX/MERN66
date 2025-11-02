const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required.']
    },
    email: {
        type: String,
        required: [true, 'Email is required.'],
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid email.']
    },
    mobile: {
        type: String,
        unique: [true, 'Mobile number already exists!'],
        validate: {
            validator: function (v) {
                return /^\d{10}$/.test(v);
            },
            message: 'Mobile number must be exactly 10 digits.'
        },
        sparse: true // allows unique constraint on nullable field
    },
    password: {
        type: String,
        required: [true, 'Password is required.'],
        minlength: [8, 'Password must be at least 8 characters.'],
        maxlength: [12, 'Password must not exceed 12 characters.']
    },
    address: String
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
