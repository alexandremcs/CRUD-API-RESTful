const mongoose = require('mongoose')

const Car = mongoose.model('Car', {
    brand: String,
    name: String,
    year: Number,
    price: Number,
    sold: Boolean,
})

module.exports = Car