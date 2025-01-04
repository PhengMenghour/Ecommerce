<template>
  <div id="app">
    <!-- <router-view /> -->
    <!-- <CartPage/>  -->
    <CheckoutPage/>
  </div>
</template>

<script>
import CartPage from './views/CartPage.vue';
import CheckoutPage from './views/CheckoutPage.vue';

export default {
  name: "App",
  components: {
    CheckoutPage,
CartPage,
  }
};
</script>

<style>

#app {
  font-family: Arial, sans-serif;
  padding: 20px;
}
</style>