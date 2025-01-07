<template>
  <div class="cart-page">
    <header class="cart-header">
      <h1>Your Cart</h1>
      <button class="clear-cart">Clear Shopping Cart</button>
    </header>

    <div class="column-container">
      <div class="column-product">
        <h3>Product</h3>

      </div>
      <div class="column-price">
        <h3>Price</h3>

      </div>
      <div class="column-quantity">
        <h3>Quantity</h3>

      </div>
      <div class="column-quantity">
        <h3>Subtotal</h3>

      </div>
    </div>

    <section class="cart-items">
      <CartItem v-for="(item, index) in cartItems" :key="index" :item="item" />

    </section>

    <div class="coupon-section">
      <div class="coupon-left-side">
        <input v-model="couponCode" type="text" placeholder="Enter Coupon Code" />
        <button @click="applyCoupon">Apply</button>
      </div>
      <div class="coupon-right-side">
        <button>Update Cart</button>
      </div>
    </div>

    <OrderSummary :subtotal="subtotal" :tax="tax" :total="total" />

    <footer class="features-section">
      <div class="feature">
        <!-- <img src="/assets/secure-icon.png" alt="Secure" /> -->
        <i class="fas fa-lock"></i>
        <p>Fast and Secure</p>
      </div>
      <div class="feature">
        <!-- <img src="/assets/money-back-icon.png" alt="Money Back" /> -->
        <i class="fas fa-money-bill"></i>
        <p>Money Back Guarantee</p>
      </div>
      <div class="feature">
        <!-- <img src="/assets/return-icon.png" alt="Return Policy" /> -->
        <i class="fas fa-clock"></i>
        <p>24 Hours Return Policy</p>
      </div>
      <div class="feature">
        <!-- <img src="/assets/support-icon.png" alt="Support" /> -->
        <i class="fas fa-headset"></i>
        <p>Pro Quality Support</p>
      </div>
    </footer>
  </div>
  <FooterComponent/>
</template>

<script>
import CartItem from '@/components/AddCard/CartItem.vue';
import OrderSummary from '@/components/AddCard/OrderSummary.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import { useCartStore } from '@/stores/Cart';



export default {
  components: { CartItem, OrderSummary, FooterComponent },



  data() {
    return {
      couponCode: "",
    };
  },
  computed: {
    cartItems() {
        const cartStore = useCartStore()
        return cartStore.cartItems
      },

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





    // removeItem(index) {
    //   this.cartItems.splice(index, 1);
    // },
    // updateQuantity(index, quantity) {
    //   this.cartItems[index].quantity = quantity;
    // },
    // applyCoupon() {
    //   // Example logic for applying a coupon
    //   if (this.couponCode === "DISCOUNT10") {
    //     alert("10% discount applied!");
    //   } else {
    //     alert("Invalid coupon code.");
    //   }
    // },
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

.cart-header button{
  height: 60px;
  width: 200px;
  border: 2px solid #b7b7b7;
  border-radius: 10px;
  background-color: transparent;
  font-size: large;
}

.cart-header button:hover{
  background-color: #3577f0;
  color: #ffffff;
}

.column-container{
  display: flex;
  align-items: center;
}

.column-product{
  display: flex;
  justify-content: center;
  flex: 2.5
}

.column-price{
  flex: 1;
}

.column-quantity{
  flex: 1;
}

.column-quantity{
  flex: 1;
}


.cart-items {
  border: 1px solid #ddd;
  padding: 20px;
  margin-top: 10px;
}

.coupon-section {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.coupon-section input {
  /* flex: 1; */
  padding: 10px;
  border: 1px solid #ddd;
  width: 300px;
  height: 60px;
  margin-right: 50px;
  font-size: larger;
}

.couple-left-side{
  display: flex;
  gap: 20px;
}

.coupon-left-side button{
  height: 60px;
  width: 100px;
  border: 2px solid #b7b7b7;
  border-radius: 10px;
  background-color: transparent;
  font-size: large;
}

.coupon-left-side button:hover{
  background-color: #3577f0;
  color: #ffffff;
}

.coupon-right-side{
  display: flex;
  justify-content: center;
  align-items: center;
}

.coupon-right-side button{
  height: 60px;
  width: 150px;
  border: 2px solid #b7b7b7;
  border-radius: 10px;
  background-color: transparent;
  font-size: large;
}

.coupon-right-side button:hover{
  background-color: #3577f0;
  color: #ffffff;
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

.feature{
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 22px;
}
</style>