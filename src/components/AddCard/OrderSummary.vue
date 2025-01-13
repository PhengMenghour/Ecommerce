<template>
  <div class="container">
    <div class="order-summary">
      <h3>Order Summary</h3>
      <div class="subtotal-container">
        <p class="left-side">Subtotal:</p>
        <p class="right-side">${{ subtotal.toFixed(2) }}</p>
      </div>
      <hr>
      <div class="shipping-container">
        <p class="left-side">Shipping:</p>
        <p class="right-side">Free</p>
      </div>
      <hr>
      <div class="tax-container">
        <p class="left-side">Tax:</p>
        <p class="right-side">${{ tax }}</p>
      </div>
      <hr>
      <coupon @apply-coupon="applyCoupon" />
      <div v-if="discount > 0" class="discount-container">
        <p class="left-side">Discount:</p>
        <p class="right-side">- ${{ discount.toFixed(2) }}</p>
      </div>
      <hr v-if="discount > 0" />
      <div class="total-container">
        <h4 class="left-side">Total:</h4>
        <h4 class="right-side">${{ discountedTotal.toFixed(2) }}</h4>
      </div>
      <hr />
      <button @click="$router.push('/pages/checkout')" class="checkout-btn">
        Proceed to Checkout
      </button>
    </div>
  </div>
</template>

<script>
import CouponCode from './CouponCode.vue';

export default {
  components: {
    CouponCode
  },
  props: ["subtotal", "tax", "total"],
  data() {
    return {
      discount: 0, // Discount value to be applied
    };
  },
  computed: {
    discountedTotal() {
      return this.total - this.discount;
    },
  },
  methods: {
    applyCoupon(couponCode) {
      // Example coupon logic
      if (couponCode === "SAVE10") {
        this.discount = this.subtotal * 0.1; // 10% discount
        alert("Coupon applied! You saved 10%.");
      } else {
        alert("Invalid coupon code.");
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: end;
}

.order-summary {
  display: flex;
  flex-direction: column;
  justify-content: end;
  background: #f9f3f0;
  padding: 20px;
  margin-top: 20px;
  width: 500px;
  border-radius: 15px;
}

.order-summary h3 {
  font-size: 26px;
}

.order-summary p {
  font-size: 20px;
}

.subtotal-container,
.shipping-container,
.tax-container,
.total-container,
.discount-container {
  display: flex;
}

.left-side {
  flex: 1;
}

.right-side {
  flex: 1;
}

.checkout-btn {
  font-family: "Poppins";
  font-weight: 500;
  background: blue;
  height: 50px;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  margin-top: 10px;
}
</style>
