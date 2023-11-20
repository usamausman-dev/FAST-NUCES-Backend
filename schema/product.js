const { Schema, model } = require('mongoose')

const prdSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    images: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },


})

const product = model('products', prdSchema)
module.exports = product