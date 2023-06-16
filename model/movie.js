const mongoose = require('mongoose')
const dataSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    year: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('data', dataSchema)