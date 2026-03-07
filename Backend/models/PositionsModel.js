const mongoose = require("mongoose");
const { model } = require("mongoose");

const { PositionsSchemas } = require("../schemas/PositionsSchemas");

const PositionsModel =  mongoose.model("Position", PositionsSchemas);

module.exports = { PositionsModel };