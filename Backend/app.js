const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/tradingDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const newOrderRoute = require("./routes/neworder");

app.use("/orders", newOrderRoute);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});