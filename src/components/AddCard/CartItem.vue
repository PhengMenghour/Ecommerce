<template>
  <div class="cart-item">
    <button class="remove-btn" @click="$emit('remove-item')">×</button>
    <div class="item-details">
      <h3>{{ product.name }}</h3>
      <p>{{ product.price.toFixed(2) }} USD</p>
      <div class="quantity">
        <button @click="updateQuantity(product.quantity - 1)" :disabled="product.quantity <= 1">-</button>
        <input type="number" v-model="product.quantity" @input="updateQuantity($event.target.value)" />
        <button @click="updateQuantity(product.quantity + 1)">+</button>
      </div>
    </div>
    <p class="subtotal">{{ (product.price * product.quantity).toFixed(2) }} USD</p>
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    updateQuantity(newQuantity) {
      this.$emit("update-quantity", Math.max(1, newQuantity));
    },
  },
};
</script>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
}
.item-details {
  flex: 1;
  margin-left: 20px;
}
.quantity {
  display: flex;
  align-items: center;
}
.quantity button {
  padding: 5px;
}
.subtotal {
  font-weight: bold;
}
</style>