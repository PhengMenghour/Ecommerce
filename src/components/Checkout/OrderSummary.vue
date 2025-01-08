<template>
  <div class="order-summary">
    <h3>Your Order</h3>
    <div class="order-items">
      <div class="order-item">
        <span>Bose Quietcomfort Ultra Noise</span>
        <span>$619.00</span>
      </div>
      <div class="order-item">
        <span>DualSense Wireless Controller</span>
        <span>$49.99</span>
      </div>
      <div class="order-item">
        <span>Xiaomi 14 Ultra</span>
        <span>$699.99</span>
      </div>
      <div class="order-item">
        <span>Shipping Method</span>
        <span>$50.00</span>
      </div>
    </div>
    <div class="shipping-method">
      <label>
        <input type="radio" name="shipping" checked />
        Free Shipping
      </label>
      <label>
        <input type="radio" name="shipping" />
        Local
      </label>
      <label>
        <input type="radio" name="shipping" />
        Flat rate
      </label>
    </div>
    <div class="order-total">
      <strong>Total:</strong>
      <strong>$1468.97</strong>
    </div>
    <div class="payment-options">
      <h4>Payment Methods</h4>
      <label>
        <input type="radio" name="payment" />
        Direct Bank Transfer
        <p class="payment-description">
          Make your payment directly into our bank account.
        </p>
      </label>
      <label>
        <input type="radio" name="payment" />
        Cash on Delivery
        <p class="payment-description">
          Pay with cash upon delivery.
        </p>
      </label>
      <label>
        <input type="radio" name="payment" checked />
        PayPal
        <p class="payment-description">
          Pay with PayPal. You can use your credit card if you don't have a
          PayPal account.
        </p>
      </label>
    </div>
    <button class="checkout-button">Process to Checkout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.order-summary {
  background-color: #f9f5f0;
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  margin: auto;
  font-family: Arial, sans-serif;
  color: #333;
  font-family: "Poppins";
}

.order-summary h3 {
  margin-bottom: 20px;
  text-align: center;
  font-size: 1.5em;
}

.order-items {
  margin-bottom: 20px;
}

.order-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.shipping-method {
  margin-top: 20px;
  margin-bottom: 20px;
}

.shipping-method label {
  display: block;
  margin-bottom: 5px;
}

.order-total {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 1.2em;
  font-weight: bold;
}

.payment-options {
  margin-top: 30px;
}

.payment-options h4 {
  margin-bottom: 10px;
  font-size: 1.2em;
}

.payment-options label {
  display: block;
  margin-bottom: 20px;
}

.payment-description {
  font-size: 0.9em;
  color: #666;
  margin: 5px 0 0 25px;
}

.checkout-button {
  margin-top: 20px;
  width: 100%;
  padding: 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  text-align: center;
}

.checkout-button:hover {
  background-color: #0056b3;
}
</style>