<template>
  <DiscountComponent />
  <NavigationBarComponent />

  <productCartiphone/>
  <Itemss/>
  <router-view></router-view>
</template>

<script>
import DiscountComponent from "./components/DiscountComponent.vue";
import NavigationBarComponent from "./components/NavigationBarComponent.vue";
import productCard from "./components/productCard.vue";
import Itemss from "./components/Itemss.vue";
import ProductCartiphone from "./components/productCartiphone.vue";
 

export default {
  components: {
    NavigationBarComponent,
    DiscountComponent,
    productCard,
    Itemss,
    ProductCartiphone,
  }
};
</script>
<style scoped></style>
