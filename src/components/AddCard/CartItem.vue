<template>
  <div class="container">
    <div class="button-container">
      <button @click="$emit('remove-item')">
        <i class="ri-close-line"></i>
      </button>
    </div>

    <div class="image-container">
      <div class="image-side">
        <img :src="product.image" :alt="product.name" />
      </div>
      <div class="text-side">{{ product.name }}</div>
    </div>

    <div class="price-container">{{ product.price.toFixed(2) }} USD</div>

    <div class="quantity-container">
      <button @click="updateQuantity(product.quantity - 1)" :disabled="product.quantity <= 1">
        <i class="ri-subtract-line"></i>
      </button>
      <span>{{ product.quantity }}</span>
      <button @click="updateQuantity(product.quantity + 1)">
        <i class="ri-add-line"></i>
      </button>
    </div>

    <div class="subtotal-container">
      {{ (product.price * product.quantity).toFixed(2) }} USD
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    updateQuantity(newQuantity) {
      console.log("update quantity")
      const validQuantity = Math.max(1, newQuantity);
      this.$emit("update-quantity", { id: this.product.id, quantity: validQuantity });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  font-family: "Poppins";
  font-size: 22px;
}

.button-container {
  flex: 0.5;
}

.button-container button {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #f6f7fb;
  color: #000;
  width: 40px;
  height: 40px;
  border-radius: 100px;
  font-size: 16px;
}

.button-container button:hover {
  border: 3px solid #115eed;
}

.image-container {
  display: flex;
  align-items: center;
  flex: 2;
}

.image-container .image-side {
  flex: 1;
}

.image-container .image-side img {
  width: 150px;
  height: auto;
}

.image-container .text-side {
  flex: 1;
}

.price-container {
  flex: 1;
}

.quantity-container {
  display: flex;
  align-items: center;
  gap: 15px;
  flex: 1;
}

.quantity-container button {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #f6f7fb;
  color: #000;
  width: 40px;
  height: 40px;
  border-radius: 100px;
  font-size: 16px;
}

.quantity-container button:hover {
  border: 3px solid #115eed;
}

.quantity-container span {
  font-size: 20px;
}

.subtotal-container {
  flex: 1;
}
</style>
