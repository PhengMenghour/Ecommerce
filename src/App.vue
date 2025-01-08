<template>
  <DiscountComponent v-if="$route.name !== 'signIn' && $route.name !== 'signUp'" />
  <NavigationBarComponent v-if="$route.name !== 'signIn' && $route.name !== 'signUp'" />

  <router-view></router-view>
</template>

<script>
import DiscountComponent from "./components/DiscountComponent.vue";
import NavigationBarComponent from "./components/NavigationBarComponent.vue";

export default {
  name: "App",
  components: {
    NavigationBarComponent,
    DiscountComponent,
  },
};
</script>


<style>

</style>