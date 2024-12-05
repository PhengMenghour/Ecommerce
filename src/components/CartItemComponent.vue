<template>
    <div class="card">
      <button class="close-btn">×</button>
      <div class="card-content">
        <!-- Product Image -->
        <img class="product-image" src="/src/assets/images/ps5.png" alt="PS5 Controller" />
        <div class="product-details">
          <!-- Product Rating -->
          <div class="rating">
            <span v-for="star in 5" :key="star" class="star">★</span>
            <span class="reviews">(64)</span>
          </div>
          <!-- Product Name -->
          <h3 class="product-name">PS5 Controller</h3>
          <!-- Product Price -->
          <p class="product-price">$79.99</p>
        </div>
        <!-- Quantity Controls -->
        <div class="quantity-controls">
          <button @click="decrement" class="quantity-btn">−</button>
          <span class="quantity">{{ quantity }}</span>
          <button @click="increment" class="quantity-btn">+</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        quantity: 15, // Default quantity

      };
    },
    methods: {
      increment() {
        this.quantity++;
      },
      decrement() {
        if (this.quantity > 1) {
          this.quantity--;
        }
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
  