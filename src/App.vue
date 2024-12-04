<template>
  <DiscountComponent />
  <NavigationBarComponent />
  <router-view></router-view>
</template>

<script>
import DiscountComponent from "./components/DiscountComponent.vue";
import NavigationBarComponent from "./components/NavigationBarComponent.vue";

export default {
  components: {
    NavigationBarComponent,
    DiscountComponent,
  },
};
</script>
<style scoped></style>
