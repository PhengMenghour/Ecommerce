<template>
  <div class="product-container">
    <div 
      v-for="product in products.slice(4, 8)" 
      :key="product.id" 
      class="product-card" 
      @click="viewProductDetail(product.id)"
    >
      <div class="discount-label" v-if="product.discount > 0">{{ product.discount }}% Off</div>
      <img :src="product.image" :alt="product.name" class="product-image" />
      <h3 class="product-name">{{ product.name }}</h3>
      <div class="rating">
        <span class="stars" v-for="i in 5" :key="i">
          <i class="ri-star-fill"></i>
        </span>
        <span>({{ product.review }})</span>
      </div>
      <div class="price">
        <span class="current-price">${{ product.price }}</span>
        <span class="original-price" v-if="product.discount > 0">${{ product.originalPrice }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { useProductsStore } from '@/stores/Product';

export default {
  name: "ProductDiscount",

  setup() {
    const productsStore = useProductsStore();
    const products = productsStore.products; // Assuming `products` is an array in the store

    return {
      products,
    };
  },

  methods: {
    viewProductDetail(id) {
      // Navigate to product detail page
      this.$router.push(`/productDetail/${id}`);
    },
  }
};
</script>

<style scoped>
.product-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}
.product-card {
  position: relative;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
}
.product-card:hover {
  transform: scale(1.05);
  transition: transform 0.2s;
  background-color: #e5dddd;
}

.discount-label {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #007bff;
  color: white;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  z-index: 1;
}
.product-image {
  width: 100%;
  max-width: 205px;
  max-height: 205px;
  margin: 0 auto;
  border: none;
  position: relative;
}
.product-name {
  font-size: 16px;
  margin: 8px 0;
  font-weight: 500;
  color: #6f6f6f;
}
.rating {
  color: #f39c12;
  margin: 4px 0;
}
.price {
  margin-top: 8px;
}
.current-price {
  font-size: 18px;
  font-weight: 600;
}
.original-price {
  font-size: 14px;
  color: #999;
  text-decoration: line-through;
  margin-left: 8px;
}
</style>
