<template>
    <div>
      <h2>Your Order</h2>
      <ul>
        <li v-for="item in orderItems" :key="item.name">
          <span>{{ item.name }}</span>
          <span>${{ item.price.toFixed(2) }}</span>
        </li>
        <li class="total">
          <span>Total</span>
          <span>${{ totalPrice.toFixed(2) }}</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: ['orderItems', 'totalPrice']
  };
  </script>
  