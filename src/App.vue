
<template>
  <DiscountComponent />
  <NavigationBarComponent />

  <router-view></router-view>
</template>

<script>
import DiscountComponent from "./components/DiscountComponent.vue";
import NavigationBarComponent from "./components/NavigationBarComponent.vue";
import productCard from "./components/NewArrivalComponent.vue";
import Itemss from "./components/ItemComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import Card from "./components/CartItemComponent.vue";



import ProductCartiphone from "./components/ProductListComponent.vue";
 

export default {
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



