<template>
  <div class="product-container">
    <!-- Additional Images -->
    <div class="additional-images">
      <img v-for="(image, index) in additionalImages" :key="index" :src="image" :alt="'Product Image ' + (index + 1)"
        class="additional-image" @click="selectedImage = image" />
    </div>

    <!-- Product Image -->
    <div class="product-image">
      <img :src="selectedImage" :alt="product.name" />
    </div>

    <!-- Product Details -->
    <div class="product-details">
      <!-- Product Rating -->
      <div class="product-rating">
        ⭐⭐⭐⭐⭐ ({{ product.reviews }} Customer reviews)
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
            @click="selectedColor = color" :class="{ active: selectedColor === color }"></button>
        </div>

        <!-- Sizes -->
        <div class="sizes">
          <span>Size:</span>
          <button v-for="size in product.sizes" :key="size" class="size-option" @click="selectedSize = size"
            :class="{ active: selectedSize === size }">
            {{ size }}
          </button>
        </div>
      </div>

      <!-- Quantity Selector -->
      <div class="quantity">
        <button @click="updateQuantity(-1)">
          <i class="ri-subtract-line"></i>
        </button>
        <span>{{ quantity }}</span>
        <button @click="updateQuantity(1)">
          <i class="ri-add-large-fill"></i>
        </button>
      </div>

      <!-- Action Buttons -->
      <div class="action-buttons">
        <button class="add-to-cart" @click="addToCart">Add to Cart</button>
        <button class="wishlist">
          <i class="ri-heart-line"></i>
        </button>
      </div>
    </div>
  </div>

  <!-- Customer Review Section -->
  <div class="customer-reviews">
    <h3>Customer Reviews</h3>
    <div v-for="(comment, index) in comments" :key="index" class="comment-wrapper">
      <CommentComponent :image-src="comment.imageSrc" :name="comment.name" :rating="comment.rating"
        :comment="comment.comment" />
    </div>
  </div>
</template>

<script>
import CommentComponent from '@/components/CommentComponent.vue';


export default {
  components: {
    CommentComponent
  },

  data() {
    return {
      product: {
        name: "iPhone 13 Pro Max",
        price: 1249.99,
        reviews: 10,
        description:
          "The iPhone 13 Pro Max display has rounded corners that follow a beautiful curved design...",
        image: "./src/assets/images/iphone-13-pro-max.jpg",
        colors: ["#d8e3f3", "#f3ece1", "#d4d4d4", "#333333"],
        sizes: ["128GB", "256GB", "512GB"],
      },
      additionalImages: [
        "./src/assets/images/iphone-side1.jpg",
        "./src/assets/images/iphone-side2.jpg",
        "./src/assets/images/iphone16.png",
      ],
      selectedImage: "./src/assets/images/iphone-13-pro-max.jpg",
      selectedColor: "#d8e3f3",
      selectedSize: "128GB",
      quantity: 1,

      comments: [
        {
          imageSrc: 'https://via.placeholder.com/50',
          name: 'Jeffrey',
          rating: 5,
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at congue turpis, sed auctor nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at congue turpis, sed auctor nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at congue turpis, sed auctor nunc.',
        },
        {
          imageSrc: 'https://via.placeholder.com/50',
          name: 'Emily',
          rating: 4,
          comment:
            'Donec bibendum orci quis magna ultrices porta. Morbi sagittis felis turpis, vitae molestie ligula viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at congue turpis, sed auctor nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at congue turpis, sed auctor nunc.',
        },
        {
          imageSrc: 'https://via.placeholder.com/50',
          name: 'Michael',
          rating: 3,
          comment:
            'Nullam at sem vel neque finibus sollicitudin et eget enim. Fusce ac venenatis quam, sed aliquet est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at congue turpis, sed auctor nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at congue turpis, sed auctor nunc.',
        },
      ],
    };
  },
  methods: {
    updateQuantity(amount) {
      this.quantity = Math.max(1, this.quantity + amount);
    },
    addToCart() {
      alert(`Added ${this.quantity} ${this.product.name}(s) to the cart!`);
    },
  },
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
  font-size: 20px;
  margin-bottom: 10px;
  border-bottom: 2px solid #007bff;
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
  max-width: 350px;
  background-color: #f0f0f0;
  /* Light gray background */
  padding: 20px;
  /* Add padding for spacing */
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 450px;
}

.product-image img {
  max-width: 100%;
  /* Ensure the image scales properly */
  border-radius: 8px;
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
  height: auto;
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
</style>
