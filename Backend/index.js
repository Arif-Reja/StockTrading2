require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { HoldingModel } = require("./models/HoldingModel"); 
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel"); 
const PORT = process.env.PORT || 3001;
const uri = process.env.MONGO_URL;

const app = express();

app.use(express.json());
app.use(cors());

app.post("/holdings", async (req, res) => {
    try {
        const tempHoldings = req.body.length > 0 ? req.body : [
            { name: "BHARTIARTL", qty: 2, avg: 538.05, price: 541.15, net: "+0.58%", day: "+2.99%" },
            { name: "HDFCBANK", qty: 2, avg: 1383.4, price: 1522.35, net: "+10.04%", day: "+0.11%" },
            { name: "HINDUNILVR", qty: 1, avg: 2335.85, price: 2417.4, net: "+3.49%", day: "+0.21%" },
            { name: "INFY", qty: 1, avg: 1350.5, price: 1555.45, net: "+15.18%", day: "-1.60%" }
        ];
        await HoldingModel.insertMany(tempHoldings);
        res.status(201).json({ message: "Holdings added successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to add holdings", details: err.message });
    }
});

app.get("/allHoldings", async (req, res) => {
    try {
        const allHoldings = await HoldingModel.find({});
        res.json(allHoldings);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch holdings", details: err.message });
    }
});

// ---------------- POSITIONS ----------------
app.post("/positions", async (req, res) => {
    try {
        const tempPositions = req.body.length > 0 ? req.body : [
            { product: "MIS", name: "TCS", qty: 5, avg: 3200, price: 3180, net: "-100", day: "-0.6%", isLoss: true },
            { product: "CNC", name: "INFY", qty: 10, avg: 1500, price: 1525, net: "+250", day: "+1.6%", isLoss: false }
        ];
        await PositionsModel.insertMany(tempPositions);
        res.status(201).json({ message: "Positions added successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to add positions", details: err.message });
    }
});

app.get("/allPositions", async (req, res) => {
    try {
        const allPositions = await PositionsModel.find({});
        res.json(allPositions);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch positions", details: err.message });
    }
});

// ---------------- ORDERS ----------------
app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    // 1️⃣ Save order
    const newOrder = new OrdersModel({
      name,
      qty,
      price,
      mode,
    });

    await newOrder.save();

    // 2️⃣ Update Holdings ONLY if BUY
    if (mode === "BUY") {

      const existingHolding = await HoldingModel.findOne({ name });

      if (existingHolding) {
        // If stock already exists → increase quantity
        existingHolding.qty += qty;
        existingHolding.avg = price; // simplified avg logic
        await existingHolding.save();

      } else {
        // If new stock → create holding
        const newHolding = new HoldingModel({
          name,
          qty,
          avg: price,
          price,
          net: "0%",
          day: "0%",
        });

        await newHolding.save();
      }
    }

    res.status(201).json({ message: "Order executed & holdings updated" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Order failed" });
  }
});
app.get("/orders", async (req, res) => {
  try {
    const orders = await OrdersModel.find({}).sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});
app.get("/allOrders", async (req, res) => {
    try {
        const orders = await OrdersModel.find({});
        res.json(orders);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch orders", details: err.message });
    }
});
app.post("/cancelOrder", async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      ...req.body,
      mode: "CANCEL"
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error cancelling order" });
  }
});
// ================= SELL STOCK =================
app.post("/sellStock", async (req, res) => {
  try {
    const name = req.body.name;
    const qty = Number(req.body.qty);
    const price = Number(req.body.price);

    console.log("SELL REQUEST:", req.body);

    const existingHolding = await HoldingModel.findOne({ name });

    if (!existingHolding) {
      return res.status(400).json({ error: "Stock not in holdings" });
    }

    if (existingHolding.qty < qty) {
      return res.status(400).json({ error: "Not enough quantity to sell" });
    }

    // Reduce quantity
    existingHolding.qty -= qty;

    if (existingHolding.qty === 0) {
      await HoldingModel.deleteOne({ name });
    } else {
      await existingHolding.save();
    }

    // Save SELL order
    await OrdersModel.create({
      name,
      qty,
      price,
      mode: "SELL",
    });

    res.status(201).json({ message: "Stock sold successfully" });

  } catch (error) {
    console.error("SELL ERROR:", error);
    res.status(500).json({ error: "Sell failed" });
  }
});
// ---------------- DB CONNECT ----------------
mongoose.set("strictQuery", false);
mongoose.connect(uri)
    .then(() => {
        console.log("DB connected successfully");
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => {
        console.error("DB connection failed:", err.message);
    });
