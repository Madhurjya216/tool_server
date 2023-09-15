const mongoose = require("mongoose");

const categoryScheme = new mongoose.Schema({
    id: {
        type: 'Number',
        required: true
    },
    name: {
        type: 'String',
        required: true
    },
    image: {
        type: 'String',
        require: true
    },
    category: {
        type: 'String',
        requiree: true
    }
})

const categoryModel = new mongoose.model('Leg', categoryScheme);

module.exports = categoryModel;