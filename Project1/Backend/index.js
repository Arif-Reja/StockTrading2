const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");
const UserModel = require("./models/UserModel");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
mongoose
  .connect("mongodb://127.0.0.1:27017/zerodha_users")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const otpStore = {};
app.post("/send-otp", async (req, res) => {
  try {
    const { mobile } = req.body;

    if (!mobile) {
      return res.status(400).json({ error: "Mobile number required" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000);

    otpStore[mobile] = otp;

    res.json({
      message: "OTP generated",
      otp: otp
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Failed to generate OTP"
    });
  }
});

app.post("/verify-otp", async (req, res) => {
  try {
    const { mobile, otp } = req.body;

    if (!mobile || !otp) {
      return res.status(400).json({
        error: "Mobile number and OTP are required",
      });
    }
    const storedOtp = otpStore[mobile];

    if (!storedOtp) {
      return res.status(400).json({
        error: "OTP expired or not requested",
      });
    }
    if (storedOtp != otp) {
      return res.status(400).json({
        error: "Invalid OTP",
      });
    }

    let user = await UserModel.findOne({ mobile });

    if (!user) {
      user = new UserModel({ mobile });
      await user.save();
    }


    delete otpStore[mobile];

    res.status(200).json({
      message: "OTP verified successfully",
      success: true,
      user: user,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "OTP verification failed",
    });
  }
});
app.listen(3002, () => {
  console.log("Server running on port 3002");
});