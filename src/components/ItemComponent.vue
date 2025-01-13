<template>
  <div class="item-list">
    <div class="item" v-for="product in products.slice(10, 16)" :key="product.id">
      <div class="item-image">
        <img :src="product.image" :alt="product.name" />
      </div>
      <div class="item-details">
        <div class="rating">
          <div class="star-container">
            <span><i class="ri-star-fill"></i></span>
            <span><i class="ri-star-fill"></i></span>
            <span><i class="ri-star-fill"></i></span>
            <span><i class="ri-star-fill"></i></span>
            <span><i class="ri-star-line"></i></span>
          </div>
          <span>{{ product.review }}+ Reviews</span>
        </div>
        <h3 class="item-name">{{ product.name }}</h3>
        <p class="item-price">${{ product.price }}</p>
      </div>
      <div class="item-actions">
        <button @click="handleAddToCart(product)" class="add-to-cart">
          <i class="ri-shopping-cart-line"></i>
        </button>
        <button class="add-to-wishlist">
          <i class="ri-heart-line"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/Cart';
import { useProductsStore } from '@/stores/Product';
import { useUserStore } from '@/stores/User';
import { useRouter } from 'vue-router';

export default {
  name: "Item",
  setup() {
    const productsStore = useProductsStore();
    const products = productsStore.products; // Access the list of products from store


    return {
      products,
    };
  },

  methods: {
    handleAddToCart(product) {
      const userStore = useUserStore();
      const cartStore = useCartStore();
      const router = useRouter();

      if (!userStore.isLoggedIn) {
        // Redirect to login page if the user is not logged in
        this.$router.push('/signIn');
      } else {
        // Add the item to the cart
        cartStore.addToCart({
          ...product, // Pass the product object
          selectedColor: product.selectedColor || null, // Include selected options if available
          selectedSize: product.selectedSize || null,
          quantity: product.quantity || 1,
        });
      }
    },
  }
};
</script>

<style scoped>
/* Container for all items */
.item-list {
  display: flex;
  /* Display items side-by-side */
  flex-wrap: wrap;
  /* Allow wrapping if items don't fit in one row */
  gap: 20px;
  /* Space between items */
  justify-content: center;
  /* Center items horizontally */
  align-items: center;
  /* Center items vertically if they wrap */
  padding: 20px;
  /* Optional: Add padding around the container */
  font-family: "Poppins";
}

/* Individual item */
.item {
  display: flex;
  /* Horizontal alignment of image, details, and actions */
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  background-color: #fff;
  max-width: 560px;
  /* Adjust the width as needed */
  width: 100%;
  /* Makes it responsive */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Image Section */
.item-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-image img {
  max-width: 80px;
  /* Resize image */
  height: auto;
}

/* Details Section */
.item-details {
  flex: 2;
  /* text-align: center; */
  margin: 0 16px;
  /* Add spacing between image and details */
}

.rating {
  font-size: 14px;
  margin-bottom: 8px;
  display: flex;
  gap: 10px;
}

.item-name {
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
}

.item-price {
  font-size: 18px;
  color: #333;
  margin-bottom: 12px;
}

/* Actions Section */
.item-actions {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.item-actions button {
  /* border: none; */
  background: none;
  cursor: pointer;
  font-size: 22px;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
}

.item-actions .add-to-cart:hover {
  color: green;
}

.item-actions .add-to-wishlist:hover {
  color: red;
}



.star-container {
  color: #ffdc60;
}
</style>
