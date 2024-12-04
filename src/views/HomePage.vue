<template>
  <div class="container-main">
    <h1></h1>
  </div>
  <div class="group-tag">
    <TagComponent />
  </div>
  <div class="container-category-head">
    <h1>Browse by Category</h1>
    <div class="swipe-button">
      <button @click="prevCategory" :disabled="currentIndex === 0"><i class="ri-arrow-left-line"></i></button>
      <button @click="nextCategory" :disabled="currentIndex >= categories.length - visibleCount"><i class="ri-arrow-right-line"></i></button>
    </div>
  </div>
  <div class="category-group">
    <div class="category-wrapper" v-for="(category, index) in visibleCategories" :key="category.id">
      <CategoryComponent :image="category.image" :title="category.title" />
    </div>
  </div>
  <div class="feature-product-header">
    <h1>Featured Products</h1>
    <div class="featured-products">
        <div class="products">
          <ProductDiscount
            v-for="product in products"
            :key="product.id"
            :name="product.name"
            :image="product.image"
            :price="product.price"
            :originalPrice="product.originalPrice"
            :discount="product.discount"
            :reviews="product.reviews"
          />
        </div>
      <button class="view-all-button">View All Products</button>
    </div>
  </div>

  <div class="feedback-header">
    <h1>Users Feedback</h1>
    <FeedbackComponent/>
  </div>

</template>

<script>
import CategoryComponent from "@/components/CategoryComponent.vue";
import TagComponent from "@/components/TagComponent.vue";
import ProductDiscount from "@/components/FeatureProduce.vue";
import FeedbackComponent from "@/components/FeedbackComponent.vue";

export default {
  components: {
    CategoryComponent,
    TagComponent,
    ProductDiscount,
    FeedbackComponent,
  },

  computed: {
    visibleCategories() {
      return this.categories.slice(this.currentIndex, this.currentIndex + this.visibleCount);
    },
  },

  methods: {
    nextCategory() {
      if (this.currentIndex < this.categories.length - this.visibleCount) {
        this.currentIndex++;
      }
    },
    prevCategory() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
  },

  data() {
    return {
      currentIndex: 0,
      visibleCount: 5, // Number of categories to display

      categories: [
        {
          id: 1,
          image: "./src/assets/images/phones.png",
          title: "Phones",
        },
        {
          id: 2,
          image: "/src/assets/images/computers.png",
          title: "Computers",
        },
        {
          id: 3,
          image: "/src/assets/images/accessories.png",
          title: "Accessories",
        },
        {
          id: 4,
          image: "/src/assets/images/laptops.png",
          title: "Laptops",
        },
        {
          id: 5,
          image: "/src/assets/images/monitors.png",
          title: "Monitors",
        },
        {
          id: 6,
          image: "/src/assets/images/networking.png",
          title: "Network",
        },
        {
          id: 7,
          image: "/src/assets/images/headphones.png",
          title: "Headphone",
        },
      ],
      
      products: [
        {
          id: 1,
          name: "IPhone 16 Pro Max",
          image: "./src/assets/images/iphone_16_pro_max.jpg",
          price: 1249.99,
          originalPrice: 1499.99,
          discount: 10,
          reviews: 103,
        },

        {
          id: 2,
          name: "Galaxy S24 Ultra",
          image: "./src/assets/images/galaxy_s24_ultra.jpg",
          price: 1299.99,
          originalPrice: 0,
          discount: 0,
          reviews: 99,
        },

        {
          id: 3,
          name: "Xiaomi 14 Ultra",
          image: "./src/assets/images/xiaomi_14ultra.jpg",
          price: 699.99,
          originalPrice: 0,
          discount: 0,
          reviews: 99,
        },

        {
          id: 4,
          name: "Vivo X100 Pro",
          image: "./src/assets/images/vivo_x100pr0.jpg",
          price: 499.99,
          originalPrice: 549.99,
          discount: 10,
          reviews: 103,
        },
      ],

      products: [
        {
          id: 1,
          name: "IPhone 16 Pro Max",
          image: "./src/assets/images/iphone_16_promax.jpg",
          price: 1249.99,
          originalPrice: 1499.99,
          discount: 10,
          reviews: 103,
        },
        {
          id: 2,
          name: "Galaxy S24 Ultra",
          image: "./src/assets/images/galaxy_s24_ultra.jpg",
          price: 1299.99,
          originalPrice: 0,
          discount: 0,
          reviews: 99,
        },
        {
          id: 3,
          name: "Xiaomi 14 Ultra",
          image: "./src/assets/images/xiaomi_14ultra.jpg",
          price: 699.99,
          originalPrice: 0,
          discount: 0,
          reviews: 99,
        },
        {
          id: 4,
          name: "Vivo X100 Pro",
          image: "./src/assets/images/vivo_x100pro.jpg",
          price: 499.99,
          originalPrice: 549.99,
          discount: 10,
          reviews: 103,
        },
      ],
    };
  },
};
</script>

<style>
.container-main {
  background-color: #f9f3f0;
  height: 800px;
  margin-top: -90px;
}

.container-category-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 200px 0px 200px;
  font-family: "Poppins", sans-serif;
}

.swipe-button {
  display: flex;
  gap: 10px;
  border-radius: 10px;
}

.swipe-button button {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #e3e3e3;
  color: #8b8b8b;
  background-color: #f6f7fb;
}

.swipe-button button:hover {
  background-color: #e1e6f1;
}

.category-group {
  display: flex;
  overflow: hidden;
  justify-content: center;
  gap: 10px;
  transition: transform 0.5s ease-in-out; /* Smooth sliding effect */
  /* Add gap for better spacing */
}

.category-wrapper {
  min-width: 180px;
  flex: 0 0 auto;
}

.category-wrapper:hover {
  opacity: 1;
  /* Highlight the category on hover */
}

.group-tag {
  margin-top: 10px;
  margin-left: 200px;
}

.feature-product-header {
  margin: 0px 200px 0px 200px;
  font-family: "Poppins", sans-serif;
}

.featured-products {
  text-align:center;
  padding: 16px;
  font-family: "Poppins";
  font-weight: 200;
  margin-top: 30px; 
}

.products {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
}

.view-all-button {
  margin-top: 20px;
  padding: 15px 30px;
  background-color:#e5c5ba;
  color: black;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.view-all-button:hover{
  background-color: #b5958a;
  transform: scale(1.05);
  transition: transform .1s;
}

.feedback-header {
  margin: 0px 200px 0px 200px;
  font-family: "Poppins", sans-serif;
}
</style>

