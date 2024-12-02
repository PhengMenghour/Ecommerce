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
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
}
.product-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  width: 250px;
  text-align: center;
}
.card-image {
  position: relative;
}
.card-image img {
  width: 100%;
  height: auto;
}
.discount-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background: red;
  color: white;
  padding: 5px;
  font-size: 12px;
  border-radius: 4px;
}
.card-details {
  padding: 10px;
}
.card-actions {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
}
.add-to-cart,
.wishlist {
  background: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}
.add-to-cart:hover,
.wishlist:hover {
  background: #0056b3;
}
</style>
