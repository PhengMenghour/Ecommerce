<template>
  <div class="container">
    <div class="button-container">
      <button @click="removeFromCart">
        <i class="ri-close-line"></i>
      </button>
    </div>

    <div class="image-container">
      <div class="image-side">
        <img :src="item.image" :alt="item.name" />
      </div>
      <div class="text-side">{{ item.name }}</div>
    </div>

    <div class="price-container">{{ item.price }} USD</div>

    <div class="quantity-container">
      <button @click="updateQuantity(item.quantity - 1)" :disabled="item.quantity <= 1">
        <i class="ri-subtract-line"></i>
      </button>
      <span>{{ item.quantity }}</span>
      <button @click="updateQuantity(item.quantity + 1)">
        <i class="ri-add-line"></i>
      </button>
    </div>

    <div class="subtotal-container">
      {{ (item.price * item.quantity).toFixed(2) }} USD
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/Cart';

export default {
  props: {
    item: Object,
  },

  computed: {
    // Fixing cartItems computation to properly use store
    cartItems() {
      const cartStore = useCartStore();
      return cartStore.cartItems;
    },
  },

  methods: {
    // Method to remove item from cart
    removeFromCart() {
      const cartStore = useCartStore();
      cartStore.removeFromCart(this.item.id); // Correctly use item.id
    },

    // Method to clear the entire cart
    clearCart() {
      const cartStore = useCartStore();
      cartStore.clearCart(); // Call clearCart correctly as a function
    },

    // Method to update quantity in the store
    updateQuantity(newQuantity) {
      const validQuantity = Math.max(1, newQuantity); // Ensure the quantity is at least 1
      const cartStore = useCartStore();
      cartStore.updateQuantity(this.item.id, validQuantity); // Update quantity in the store
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
