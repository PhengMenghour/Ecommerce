<template>
  <div class="product-container">
    <div v-for="product in products" :key="product.id" class="product-card">
      <div class="card-image">
        <img :src="product.image" :alt="product.name" />
        <span class="discount-badge" v-if="product.discount">{{ product.discount }} Off</span>
      </div>
      <div class="card-details">
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-price">
          <span class="original-price" v-if="product.originalPrice">${{ product.originalPrice }}</span> ${{ product.price }}
        </p>
      </div>
      <div class="card-actions">
        <button class="view-item" @click="$router.push('/productDetail')">
          <i class="ri-eye-line"></i>
        </button>
        <button class="add-to-cart">Add to Cart</button>
        <button class="wishlist">
          <i class="ri-heart-3-line"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCards",
  data() {
    return {
      products: [
        {
          id: 1,
          name: "PS5 Controller",
          image: "/src/assets/images/ps5.png",
          price: 60,
          originalPrice: 80,
          discount: "",
        },
        {
          id: 2,
          name: "PS5 Controller",
          image: "/src/assets/images/ps5.png",
          price: 60,
          originalPrice: 80,
          discount: "10%",
        },
        {
          id: 3,
          name: "PS5 Controller",
          image: "/src/assets/images/ps5.png",
          price: 60,
          originalPrice: 80,
          discount: "10%",
        },
        {
          id: 4,
          name: "PS5 Controller",
          image: "/src/assets/images/ps5.png",
          price: 60,
          originalPrice: 80,
          discount: "10%",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* (Styles remain the same as the original code) */
.product-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
  font-family: "Poppins";
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

.wishlist, .view-item{
  background: none;
  /* border: none; */
  color: #374151;
  cursor: pointer;
  font-size: 18px;
  padding: 5px;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
}

.wishlist:hover, .view-item:hover {
  color: #ef4444;
}

.icon-container {
  position: relative;
  display: inline-block;
  font-size: 30px;
  color: gray;
  padding: 8px;
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
