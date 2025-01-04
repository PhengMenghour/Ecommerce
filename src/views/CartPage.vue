<template>
  <div class="cart-page">
    <header class="cart-header">
      <h1>Your Cart</h1>
      <button class="clear-cart">Clear Shopping Cart</button>
    </header>

    <section class="cart-items">
      <CartItem
        v-for="(item, index) in cartItems"
        :key="index"
        :product="item"
        @remove-item="removeItem(index)"
        @update-quantity="updateQuantity(index, $event)"
      />
    </section>

    <div class="coupon-section">
      <input v-model="couponCode" type="text" placeholder="Enter Coupon Code" />
      <button @click="applyCoupon">Apply</button>
    </div>

    <OrderSummary :subtotal="subtotal" :tax="tax" :total="total" />

    <footer class="features-section">
      <div class="feature">
        <!-- <img src="/assets/secure-icon.png" alt="Secure" /> -->
        <p>Fast and Secure</p>
      </div>
      <div class="feature">
        <!-- <img src="/assets/money-back-icon.png" alt="Money Back" /> -->
        <p>Money Back Guarantee</p>
      </div>
      <div class="feature">
        <!-- <img src="/assets/return-icon.png" alt="Return Policy" /> -->
        <p>24 Hours Return Policy</p>
      </div>
      <div class="feature">
        <!-- <img src="/assets/support-icon.png" alt="Support" /> -->
        <p>Pro Quality Support</p>
      </div>
    </footer>
  </div>
</template>

<script>
import CartItem from '@/components/AddCard/CartItem.vue';
import OrderSummary from '@/components/AddCard/OrderSummary.vue';



export default {
  components: { CartItem, OrderSummary },
  data() {
    return {
      cartItems: [
        { name: "Bose QuietComfort Ultra Noise", price: 619, quantity: 1 },
        { name: "DualSense Wireless Controller", price: 49.99, quantity: 2 },
        { name: "Xiaomi 14 Ultra", price: 899.99, quantity: 1 },
      ],
      couponCode: "",
    };
  },
  computed: {
    subtotal() {
      return this.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    tax() {
      return (this.subtotal * 0.1).toFixed(2); // Example: 10% tax
    },
    total() {
      return (this.subtotal + parseFloat(this.tax)).toFixed(2);
    },
  },
  methods: {
    removeItem(index) {
      this.cartItems.splice(index, 1);
    },
    updateQuantity(index, quantity) {
      this.cartItems[index].quantity = quantity;
    },
    applyCoupon() {
      // Example logic for applying a coupon
      if (this.couponCode === "DISCOUNT10") {
        alert("10% discount applied!");
      } else {
        alert("Invalid coupon code.");
      }
    },
  },
};
</script>

<style scoped>
.cart-page {
  font-family: Arial, sans-serif;
  margin: 20px;
}
.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cart-items {
  border: 1px solid #ddd;
  padding: 20px;
  margin-top: 10px;
}
.coupon-section {
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
}
.coupon-section input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
}
.features-section {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
}
.feature img {
  width: 50px;
  height: 50px;
}
</style>