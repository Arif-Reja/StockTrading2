const mongoose = require("mongoose");

const HoldingsSchemas = new mongoose.Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
});

module.exports = mongoose.model("holding", HoldingsSchemas);