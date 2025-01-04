
<template>
  <DiscountComponent />
  <NavigationBarComponent />

  <router-view></router-view>
  <div id="app">
    <!-- <router-view /> -->
    <!-- <CartPage/>  -->
    <CheckoutPage/>
  </div>
</template>

<script>
import DiscountComponent from "./components/DiscountComponent.vue";
import NavigationBarComponent from "./components/NavigationBarComponent.vue";
import productCard from "./components/NewArrivalComponent.vue";
import Itemss from "./components/ItemComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import Card from "./components/CartItemComponent.vue";



import ProductCartiphone from "./components/ProductComponent.vue";
 

export default {
  name: "App",
  components: {
    NavigationBarComponent,
    DiscountComponent,
    productCard,
    Itemss,
    FooterComponent,
    // Card
    ProductCartiphone,
  }
};
</script>


<style>

#app {
  font-family: Arial, sans-serif;
  padding: 20px;
}
</style>