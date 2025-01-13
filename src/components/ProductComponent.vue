<template>
  <div class="product-container">
    <!-- Product Card -->
    <div class="product-card">
      <div class="card-image">
        <img :src="product.image" :alt="product.name" />
        <!-- Removed the discount badge -->
      </div>
      <div class="card-details">
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-price">
          <!-- Display only the original price -->
          ${{ product.price }}
        </p>
      </div>

      <div class="card-actions">
        <button class="view-item" @click="viewProductDetail(product.id)">
          <i class="ri-eye-line"></i>
        </button>
        <button class="add-to-cart" @click="handleAddToCart">
          Add to Cart
        </button>
        <button class="wishlist" @click="addToWishlist(product)">
          <i class="ri-heart-3-line"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/Cart';
import { useProductsStore } from '../stores/Product';
import { useUserStore } from '@/stores/User';
import { useRouter } from 'vue-router';

export default {
  name: 'ProductComponent',
  props: {
    product: Object, // Accept a 'product' object as a prop
  },

  methods: {
    handleAddToCart() {
      const userStore = useUserStore();
      const cartStore = useCartStore();
      const router = useRouter();

      if (!userStore.isLoggedIn) {
        // If the user is not logged in, redirect to the login page
        this.$router.push('/signIn'); // Assuming 'login' is the name of your login route
      } else {
        // If the user is logged in, add the item to the cart
        cartStore.addToCart({
          ...this.product, // Pass the current product
          selectedColor: this.product.selectedColor, // Include selected options
          selectedSize: this.product.selectedSize,
          quantity: this.product.quantity,
        });
      }
    },

    viewProductDetail(id) {
      // Navigate to product detail page
      this.$router.push(`/productDetail/${id}`);
    },

    addToWishlist(product) {
      console.log(`${product.name} added to wishlist!`);
      // Implement wishlist functionality here (optional)
    },
  },
};
</script>

<style scoped>
.product-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  /* Adds space between the cards */
  justify-content: center;
  /* Center items horizontally */
  align-items: stretch;
  /* Ensure all items stretch to the same height */
  margin: 0 auto;
  /* Center the container itself horizontally */
  padding: 20px;
  /* Optional: Adds space inside the container */
}

.product-card {
  width: 250px;
  height: 400px;
  /* Set a fixed height for the card */
  border: 2px solid #d1d5db;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  background: #fff;
  position: relative;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.card-image {
  position: relative;
}

.card-image img {
  width: 100%;
  height: 250px;
  /* Set a fixed height */
  object-fit: cover;
  /* Ensures the image covers the area without distortion */
  border-radius: 8px;
}

.card-details {
  margin-top: 12px;
  height: 60px;
}

.product-name {
  font-size: 18px;
  font-weight: bold;
  color: #374151;
  margin-bottom: 8px;
  overflow: hidden;
  /* Hide overflow */
  text-overflow: ellipsis;
  /* Add ellipsis for overflow text */
  white-space: nowrap;
  /* Prevent text from wrapping */
}

.product-price {
  font-size: 16px;
  color: #1f2937;
  font-weight: bold;
}

.card-actions {
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.add-to-cart {
  background: #ef4444;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.add-to-cart:hover {
  background: #dc2626;
}

.wishlist,
.view-item {
  background: none;
  border: 1px solid #d4d4d4;
  color: #374151;
  cursor: pointer;
  font-size: 18px;
  padding: 5px;
  border-radius: 5px;
}

.wishlist:hover,
.view-item:hover {
  color: #ef4444;
}
</style>
