const express = require("express");
const router = express.Router();
const { OrdersModel } = require("../models/OrderModel");

router.post("/", async (req, res) => {
  try {
    const newOrder = new OrdersModel(req.body);
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(500).json({ message: "Error creating order" });
  }
});

router.get("/", async (req, res) => {
  try {
    const orders = await OrdersModel.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Error fetching orders" });
  }
});

module.exports = router;