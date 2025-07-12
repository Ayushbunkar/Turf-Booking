// src/components/PaymentButton.jsx
import React from 'react';

const PaymentButton = () => {
  const handlePayment = async () => {
    const response = await fetch("/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ amount: 50000 }) // Amount in paise (50000 paise = ₹500)
    });

    const orderData = await response.json();

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Your Razorpay Key ID
      amount: orderData.amount,
      currency: orderData.currency,
      name: "Your Company Name",
      description: "Test Transaction",
      order_id: orderData.id,
      handler: function (response) {
        alert("Payment Successful");
        console.log(response);
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999"
      },
      notes: {
        address: "Customer Address"
      },
      theme: {
        color: "#F37254"
      }
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <button onClick={handlePayment} className="payment-button">
      Pay Now
    </button>
  );
};

export default PaymentButton;
