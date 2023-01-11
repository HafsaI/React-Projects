// can call database schema
const mongoose = require('mongoose');

const FaqSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required:false,

    },
    answered: {
        type: Boolean,
        required:false,

    }

});


const FaqModel = mongoose.model('faqs', FaqSchema); // name of collection, schema

module.exports = FaqModel;