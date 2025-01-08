<template>
    <div class="product-card" @click="$router.push('/productDetail')">
      <div class="discount-label" v-if="discount > 0">{{ discount }}% Off</div>
      <img :src="image" :alt="name" class="product-image" />
      <h3 class="product-name">{{ name }}</h3>
      <div class="rating">
        <span class="stars"><i class="ri-star-fill"></i></span>
        <span class="stars"><i class="ri-star-fill"></i></span>
        <span class="stars"><i class="ri-star-fill"></i></span>
        <span class="stars"><i class="ri-star-fill"></i></span>
        <span>({{ reviews }})</span>
      </div>
      <div class="price">
        <span class="current-price">${{ price }}</span>
        <span class="original-price" v-if="discount > 0">${{ originalPrice }}</span>
      </div>
    </div>
</template>

<script>
export default {
  name: "ProductDiscount",
  props: {
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    originalPrice: { type: Number, required: false },
    discount: { type: Number, required: false, default: 0 },
    reviews: { type: Number, required: false, default: 0 },
  },
};


</script>

<style scoped>
.product-card {
  position: relative; /* To position the discount label */
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
}
.product-card:hover{
  transform: scale(1.05);
  transition: transform .2s;
  background-color:#e5dddd;
}

.discount-label {
  position: absolute;
  top: 10px; /* Adjust the position from the top */
  right: 10px; /* Adjust the position from the right */
  background-color: #007bff; /* Blue background for the discount tag */
  color: white;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  z-index: 1; /* Ensures the label appears on top of the image */
}
.product-image {
  width: 100%;
  max-width: 205px;
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
