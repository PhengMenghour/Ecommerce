<template>
    <div class="product-container">
      <!-- First Product Card -->
      <div class="product-card">
        <div class="card-image">
          <img src="/src/assets/images/ps5.png" alt="Ps5controller" />
          <span class="discount-badge">10% Off</span>
        </div>
        <div class="card-details">
          <h3 class="product-name">PS5 Controller</h3>
          <p class="product-price">
            <span class="original-price">$80</span> $60
          </p>
        </div>
        <div class="card-actions">
          <i class="ri-square-line icon-container">
            <i class="ri-eye-line eye-icon"></i>
          </i>
          <button class="add-to-cart">Add to Cart</button>
          <button class="wishlist">
            <i class="ri-square-line icon-container">
              <i class="ri-heart-line"></i>
            </i>
          </button>
        </div>
      </div>
  
      <!-- Second Product Card -->
      <div class="product-card">
        <div class="card-image">
          <img src="/src/assets/images/ps5.png" alt="Ps5controller" />
          <span class="discount-badge">10% Off</span>
        </div>
        <div class="card-details">
          <h3 class="product-name">PS5 Controller</h3>
          <p class="product-price">
            <span class="original-price">$80</span> $60
          </p>
        </div>
        <div class="card-actions">
          <i class="ri-square-line icon-container">
            <i class="ri-eye-line eye-icon"></i>
          </i>
          <button class="add-to-cart">Add to Cart</button>
          <button class="wishlist">
            <i class="ri-square-line icon-container">
              <i class="ri-heart-line"></i>
            </i>
          </button>
        </div>
      </div>
  
      <!-- Third Product Card -->
      <div class="product-card">
        <div class="card-image">
          <img src="/src/assets/images/ps5.png" alt="Ps5controller" />
          <span class="discount-badge">10% Off</span>
        </div>
        <div class="card-details">
          <h3 class="product-name">PS5 Controller</h3>
          <p class="product-price">
            <span class="original-price">$80</span> $60
          </p>
        </div>
        <div class="card-actions">
          <i class="ri-square-line icon-container">
            <i class="ri-eye-line eye-icon"></i>
          </i>
          <button class="add-to-cart">Add to Cart</button>
          <button class="wishlist">
            <i class="ri-square-line icon-container">
              <i class="ri-heart-line"></i>
            </i>
          </button>
        </div>
      </div>
  
      <!-- Fourth Product Card -->
      <div class="product-card">
        <div class="card-image">
          <img src="/src/assets/images/ps5.png" alt="Ps5controller" />
          <span class="discount-badge">10% Off</span>
        </div>
        <div class="card-details">
          <h3 class="product-name">PS5 Controller</h3>
          <p class="product-price">
            <span class="original-price">$80</span> $60
          </p>
        </div>
        <div class="card-actions">
          <i class="ri-square-line icon-container">
            <i class="ri-eye-line eye-icon"></i>
          </i>
          <button class="add-to-cart">Add to Cart</button>
          <button class="wishlist">
            <i class="ri-square-line icon-container">
              <i class="ri-heart-line"></i>
            </i>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "productCards",
  };
  </script>
  
  <style scoped>
 .product-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px; /* Adds space between the cards */
    justify-content: center; /* Center items horizontally */
    align-items: center; /* Center items vertically */
    margin: 0 auto; /* Center the container itself horizontally */
    padding: 20px; /* Optional: Adds space inside the container */
}

  
  .product-card {
    width: 250px;
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
    height: auto;
    border-radius: 8px;
  }
  
  .discount-badge {
    position: absolute;
    top: 8px;
    right: 8px;
    background: #3b82f6;
    color: #fff;
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 4px;
  }
  
  .card-details {
    margin-top: 12px;
  }
  
  .product-name {
    font-size: 16px;
    font-weight: bold;
    color: #374151;
    margin-bottom: 8px;
  }
  
  .product-price {
    font-size: 14px;
    color: #1f2937;
  }
  
  .original-price {
    text-decoration: line-through;
    color: #9ca3af;
    margin-right: 4px;
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
  
  .wishlist {
    background: none;
    border: none;
    color: #374151;
    cursor: pointer;
    font-size: 18px;
  }
  
  .wishlist:hover {
    color: #ef4444;
  }
  
  .icon-container {
    position: relative;
    display: inline-block;
    font-size: 30px;
    color: gray;
    /* border: gray 1px solid; */
    /* border-radius: 50%; */
    padding: 8px;
    /* cursor: pointer; */
    /* transition: background 0.3s ease; */
  }
  
  .icon-container:hover {
    background: #f3f4f6;
  }
  
  .eye-icon,
  .ri-heart-line {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
    color: black;
  }
  
  
  
 
  </style>
  