const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    message: String,
    checked: Boolean,
})

exports.model = mongoose.model('memo', schema)