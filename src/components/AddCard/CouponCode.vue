<template>
    <div class="coupon-section">
      <input
        type="text"
        v-model="couponCode"
        placeholder="Enter Coupon Code"
      />
      <button @click="$emit('apply-coupon', couponCode)">Apply</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        couponCode: ''
      };
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>