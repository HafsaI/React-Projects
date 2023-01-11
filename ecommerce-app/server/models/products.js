// can call database schema
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    available: {
        type: Boolean,
        required:true,

    },
    imageUrl: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,

    }

});


const ProductModel = mongoose.model('products', ProductSchema); // name of collection, schema

module.exports = ProductModel;