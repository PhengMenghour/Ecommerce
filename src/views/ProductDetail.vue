<template>
  <div class="product-container">
    <!-- Additional Images -->
    <div class="additional-images">
      <img v-for="(image, index) in product.additionalImages" :key="index" :src="image"
        :alt="'Product Image ' + (index + 1)" class="additional-image" @click="product.selectedImage = image" />
    </div>

    <!-- Product Image -->
    <div class="product-image">
      <img :src="product.selectedImage" :alt="product.name" />
    </div>

    <!-- Product Details -->
    <div class="product-details">
      <!-- Product Rating -->
      <div class="product-rating">
        ⭐⭐⭐⭐⭐ ({{ product.review }} Customer reviews)
      </div>

      <!-- Product Title and Price -->
      <h1>{{ product.name }}</h1>
      <h2>${{ product.price }}</h2>

      <!-- Product Availability -->
      <ul>
        <li>✔️ In stock</li>
        <li>✔️ Free delivery available</li>
        <li>✔️ 10% Off Use code: HELLO</li>
      </ul>

      <!-- Product Description -->
      <p>{{ product.description }}</p>

      <!-- Product Options -->
      <div class="product-options">
        <!-- Colors -->
        <div class="colors">
          <span>Colors:</span>
          <button v-for="color in product.colors" :key="color" class="color-option" :style="{ backgroundColor: color }"
            @click="product.selectedColor = color" :class="{ active: product.selectedColor === color }"></button>
        </div>

        <!-- Sizes -->
        <div class="sizes">
          <span>Size:</span>
          <button v-for="size in product.sizes" :key="size" class="size-option" @click="product.selectedSize = size"
            :class="{ active: product.selectedSize === size }">
            {{ size }}
          </button>
        </div>
      </div>

      <!-- Quantity Selector -->
      <div class="quantity">
        <button @click="updateQuantity(-1)">
          <i class="ri-subtract-line"></i>
        </button>
        <span>{{ product.quantity }}</span>
        <button @click="updateQuantity(1)">
          <i class="ri-add-large-fill"></i>
        </button>
      </div>

      <!-- Action Buttons -->
      <div class="action-buttons">
        <button class="add-to-cart" @click="handleAddToCart">Add to Cart</button>
        <button class="wishlist">
          <i class="ri-heart-line"></i>
        </button>
      </div>
    </div>
  </div>

  <!-- Customer Reviews Section -->
  <div class="customer-reviews">

    <h3>Customer Reviews</h3>

    <hr>

    <!-- Comment Input Form -->
    <form class="comment-form" @submit.prevent="submitComment">
      <textarea v-model="newComment" placeholder="Write your comment here..." rows="3" cols="50" required></textarea>
      <button type="submit">Submit Comment</button>
    </form>

    <!-- Comments Display -->
    <div v-for="(comment, index) in product.comments" :key="index" class="comment-wrapper">
      <CommentComponent :comment="comment" :imageSrc="defaultImage" />

    </div>
  </div>
</template>

<script>
import CommentComponent from '@/components/CommentComponent.vue';
import { useCartStore } from '@/stores/Cart';
import { useProductsStore } from '@/stores/Product';
import { useUserStore } from '@/stores/User';
import { mapState } from 'pinia';
import { useRouter } from 'vue-router';


export default {
  components: {
    CommentComponent
  },

  setup() {
    const productsStore = useProductsStore();

    return {
      productsStore,
    };
  },

  data() {
    return {
      newComment: '', // Local state for new comment input
      defaultImage: 'https://via.placeholder.com/50', // Default profile image
    };
  },
  methods: {
    updateQuantity(amount) {
      this.product.quantity = Math.max(0, this.product.quantity + amount);
    },

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

    submitComment() {
      if (this.newComment.trim()) {
        const userStore = useUserStore(); // Access the user store
        const comment = {
          name: userStore.user.username || 'Anonymous User', // Use the dynamic username
          rating: 5, // Static rating, adjust as needed
          comment: this.newComment,
        };

        // Add the comment to the store
        this.productsStore.addComment(this.product.id, comment);

        // Clear the input
        this.newComment = '';
      }
    },
  },

  computed: {
    ...mapState(useProductsStore, {
      products: 'products',
    }),

    product() {
      return this.products.find((p) => p.id === parseInt(this.$route.params.productId));
    },


    product() {
      const product = this.products.find((p) => p.id === parseInt(this.$route.params.productId))

      return product;
    }
  }
};
</script>

<style scoped>
/* Customer Reviews Section */
.customer-reviews {
  max-width: 1200px;
  margin: 20px auto;
  background: #ffffff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.customer-reviews h3 {
  font-family: "Poppins";
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 10px;
  /* border-bottom: 2px solid #007bff; */
  padding-bottom: 5px;
}

.review-card {
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
}

.review-header {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: bold;
}

.review-header .stars {
  color: #ffc107;
}

.review-card p {
  margin: 5px 0;
  font-size: 14px;
  color: #333;
}

/* details */

/* Body styling */
body {
  font-family: Arial, sans-serif;
  background-color: #f8f9fa;
  margin: 0;
  padding: 20px;
}

/* Main product container */
.product-container {
  display: flex;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-family: "Poppins";
}

/* Product image styling */
.product-image {
  width: 300px;
  background-color:rgba(255, 255, 255, 0);
  padding: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
}

.product-image img {
  object-fit: contain; /* Keeps the image within its container without cropping */
  width: 100%;         /* Adjusts the width */
  height: auto;        /* Automatically adjusts height to maintain aspect ratio */
}

/* Product details container */
.product-details {
  flex: 1;
}

/* Product rating and other text styling */
.product-rating {
  font-size: 14px;
  color: #ffc107;
}

h1 {
  font-size: 24px;
  margin: 10px 0;
}

h2 {
  color: #28a745;
  margin: 10px 0;
}

ul {
  list-style: none;
  padding: 0;
  margin: 10px 0;
}

ul li {
  margin: 5px 0;
}

/* Color and size options */
.colors,
.sizes {
  margin: 10px 0;
}

.color-option,
.size-option {
  margin: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}

.color-option {
  width: 30px;
  height: 30px;
}

.size-option.active,
.color-option.active {
  border: 2px solid #007bff;
}

/* Action buttons */
.add-to-cart,
.wishlist {
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

.add-to-cart:hover {
  background-color: #0056b3;
}

.wishlist {
  background-color: #ffffff;
  color: #333;
  margin-left: 10px;
  border: 1px solid black;
}

/* Quantity selector */
.quantity {
  display: flex;
  align-items: center;
  margin: 20px 0;
  gap: 10px;
}

/* Additional images container */
.additional-images {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100px;
  height: 400px;
}

.additional-image {
  max-width: 100%;
  background-color: #f0f0f0;
  /* Same light gray background */
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(214, 213, 213, 0.1);
}

.additional-image:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(214, 213, 213, 0.1);
}

.comment-wrapper {
  margin-bottom: 16px;
}

.commentReview-header {
  display: flex;
  justify-content: space-between;
}

.comment-form{
  font-family: "Poppins";
  margin: 20px 0 20px 0;
  /* padding: 20px; */
  display: flex;
  align-items: center;
  gap: 20px;
}

.comment-form textarea{
  flex: 1;
  resize: none;
  height: 100px;
}

.comment-form button{
  height: 50px;
  border: none;
  border-radius: 10px;
  background-color: #007bff;
  color: #ffffff;
}

.comment-form button:hover{
  background-color: #0056b3;
  transition: ease-in-out 0.3s;
}
</style>
