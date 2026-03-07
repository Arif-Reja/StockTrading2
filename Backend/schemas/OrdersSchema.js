const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", OrdersSchema);