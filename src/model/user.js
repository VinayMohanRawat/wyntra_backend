const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        trim: true
    },
    email: {
        type: String
    },
    isEmailVerified: {
        type: Boolean
    },
    mobile: {
        type: String
    },
    isMobileVerified: {
        type: Boolean
    },
    loginAction: {
        type: String
    },
    token: {
        type: String
    }
}, { timestamps: true });


module.exports = mongoose.model('user', userSchema);