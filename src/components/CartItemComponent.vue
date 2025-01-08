<template>
  <div class="card">
    <button @click="removeFromCart" class="close-btn">×</button>
    <div class="card-content">
      <!-- Product Image -->
      <img class="product-image" :src="item.image" :alt="item.name" />
      <div class="product-details">
        <!-- Product Rating -->
        <div class="rating">
          <span v-for="star in 5" :key="star" class="star">★</span>
          <span class="reviews">(64)</span>
        </div>
        <!-- Product Name -->
        <h3 class="product-name">{{ item.name }}</h3>
        <!-- Product Price -->
        <p class="product-price">{{ item.price }}$</p>
      </div>
      <!-- Quantity Controls -->
      <div class="quantity-controls">
        <button @click="updateQuantity(item.quantity - 1)" :disabled="item.quantity <= 1"
          class="quantity-btn">−</button>
        <span class="quantity">{{ item.quantity }}</span>
        <button @click="updateQuantity(item.quantity + 1)" class="quantity-btn">+</button>
      </div>
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
      const cartStore = useCartStore
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
.card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
  background-color: #fff;
  position: relative;
  width: 556px;
}

.close-btn {
  position: absolute;
  top: 8px;
  left: 8px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
}

.card-content {
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
}

.product-image {
  width: 100px;
  height: auto;
  border-radius: 8px;
}

.product-details {
  flex: 1;
}

.rating {
  display: flex;
  align-items: center;
  gap: 4px;
}

.star {
  color: gold;
  font-size: 14px;
}

.reviews {
  color: #666;
  font-size: 12px;
}

.product-name {
  font-size: 18px;
  margin: 4px 0;
}

.product-price {
  font-size: 16px;
  color: #333;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.quantity-btn {
  background-color: #f0f0f0;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.quantity {
  font-size: 16px;
  font-weight: bold;
}
</style>