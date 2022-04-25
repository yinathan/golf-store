const mongoose = require("mongoose")

const ballSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  img: String,
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const Ball = mongoose.model("Ball", ballSchema);
module.exports = Ball;