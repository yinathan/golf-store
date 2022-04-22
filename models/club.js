const mongoose = require("mongoose")

const clubSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true},
    description: { type: String, required: true},        
    img: String,
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
})

const Club = mongoose.model("Club", clubSchema)
module.exports = Club

