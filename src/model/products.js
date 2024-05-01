const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String
    },
    discountPercentage: {
        type: Number
    },
    rating: {
        type: Number
    },
    stock: {
        type: Number
    },
    brand: {
        type: String
    },
    price: { type: Number },
    category: { type: String },
    thumbnail: { type: String },
    images: { type: Array }
}, 
{ timestamps: true },
    {
        bufferCommands: false,
        autoCreate: false
    });


module.exports = mongoose.model('products', productSchema)