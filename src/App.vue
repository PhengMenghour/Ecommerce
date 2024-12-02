<template>
  <DiscountComponent />
  <NavigationBarComponent />
  <productCard/>
  <Itemss/>
  <router-view></router-view>
</template>

<script>
import DiscountComponent from "./components/DiscountComponent.vue";
import NavigationBarComponent from "./components/NavigationBarComponent.vue";
import productCard from "./components/productCard.vue";
import Itemss from "./components/Itemss.vue";
 

export default {
  components: {
    NavigationBarComponent,
    DiscountComponent,
    productCard,
    Itemss,
  },
};
</script>
<style scoped></style>
