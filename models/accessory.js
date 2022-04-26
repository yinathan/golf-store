const mongoose = require("mongoose");

const accessorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  img: String,
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const Accessory = mongoose.model("Accessory", accessorySchema);
module.exports = Accessory;
