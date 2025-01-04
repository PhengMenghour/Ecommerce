<template>
    <div class="order-summary">
      <h3>Order Summary</h3>
      <p>Subtotal: {{ subtotal.toFixed(2) }} USD</p>
      <p>Shipping: Free</p>
      <p>Tax: {{ tax }} USD</p>
      <h4>Total: {{ total }} USD</h4>
      <button class="checkout-btn">Proceed to Checkout</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ["subtotal", "tax", "total"],
  };
  </script>
  
  <style scoped>
  .order-summary {
    background: #f9f9f9;
    padding: 20px;
    margin-top: 20px;
  }
  .checkout-btn {
    background: blue;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
  </style>