
<template>
  <DiscountComponent />
  <NavigationBarComponent />
  <!-- <card /> -->
  <!-- <FooterComponent /> -->
  
  <router-view></router-view>
</template>

<script>
import DiscountComponent from "./components/DiscountComponent.vue";
import NavigationBarComponent from "./components/NavigationBarComponent.vue";
import productCard from "./components/productCard.vue";
import Itemss from "./components/Itemss.vue";
import FooterComponent from "./components/FooterComponent.vue";
import Card from "./components/Card.vue";



 

export default {
  components: {
    NavigationBarComponent,
    DiscountComponent,
    productCard,
    Itemss,
    FooterComponent,
    // Card
  },
};
</script>



