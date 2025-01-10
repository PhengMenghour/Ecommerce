<template>
  <div class="order-summary">
    <h3>Your Order</h3>

    <div class="order-items">
      <div class="info-container">
        <div class="header-container">
          <p>Product</p>
          <p>Subtotal</p>
        </div>
        <hr>
        <div v-for="item in cartItems" :key="item.id" class="order-item">
          <span>{{ item.name }}</span>
          <span>${{ (item.price * item.quantity).toFixed(2) }}</span>
        </div>
        <hr>
        <div class="order-item">
          <!-- <span>Shipping Method</span>
          <span>$50.00</span> -->
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
          <strong>${{ total.toFixed(2) }}</strong>
        </div>

      </div>

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
      <hr>
      <label>
        <input type="radio" name="payment" />
        Cash on Delivery
        <p class="payment-description">
          Pay with cash upon delivery.
        </p>
      </label>
      <hr>
      <label>
        <input type="radio" name="payment" checked />
        PayPal
        <p class="payment-description">
          Pay with PayPal. You can use your credit card if you don't have a
          PayPal account.
        </p>
      </label>
      <hr>
    </div>
    <button class="checkout-button">Process to Checkout</button>
  </div>
</template>

<script>
import { useCartStore } from "@/stores/Cart";

export default {
  computed: {
    // Get cart items from the store
    cartItems() {
      const cartStore = useCartStore()
      return cartStore.cartItems
    },
    // Calculate the total price from cart items and shipping
    total() {
      const cartTotal = this.cartItems.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
      }, 0);
      const shippingCost = 0; // You can modify this based on the selected shipping method
      return cartTotal + shippingCost;
    },
  },
};
</script>

<style scoped>
.order-summary {
  background-color: #f9f5f0;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  /* max-width: 100%; */
  margin: 20px;
  font-family: Arial, sans-serif;
  color: #333;
  font-family: "Poppins";
}

.order-summary h3 {
  margin-bottom: 20px;
  text-align: start;
  font-size: 1.5em;
  font-weight: 600;
}

.order-items {
  margin-bottom: 20px;
  font-size: 18px;
  /* background-color: ; */
}

.info-container{
  background-color: #ffffff;
  padding: 30px;
  border-radius: 20px;
}

.header-container{
  display: flex;
  justify-content: space-between;
  font-size: 22px;
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
  font-weight: 600;
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