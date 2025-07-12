const express = require("express");
const bodyParser = require("body-parser");
const Razorpay = require("razorpay");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(bodyParser.json());

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID, // Your Razorpay Key ID
  key_secret: process.env.RAZORPAY_KEY_SECRET // Your Razorpay Key Secret
});

app.post("/create-order", async (req, res) => {
  const options = {
    amount: req.body.amount, // amount in paise
    currency: "INR",
    receipt: "receipt#1"
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
