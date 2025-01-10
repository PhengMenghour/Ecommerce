<template>
  <div class="main-container">
    <div class="breadcrumb-container">
      <div class="text-container">
        <nav class="breadcrumb">
          <span><a href="/">Home</a></span>
          <span> | </span>
          <span>Shop</span>
        </nav>
        <h1>Privacy and Policy</h1>
      </div>
      <div class="image-container">
        <img src="/src/assets/images/homepod.png" alt="">
      </div>
    </div>

    <!-- Page Heading -->
    <div class="page-heading">
      <h2>Explore All Products</h2>
    </div>

    <!-- Main Content -->
    <div class="shop-container">
      <!-- Categories Sidebar -->
      <aside class="categories">
        <h3>Categories</h3>
        <ul>
          <li v-for="category in categories" :key="category.id">
            <div class="category-header" @click="toggleCategory(category.id)">
              <span>{{ category.name }}</span>
              <i class="dropdown-icon" :class="{ open: category.isOpen }">▼</i>
            </div>
            <ul v-if="category.isOpen" class="subcategory-list">
              <li v-for="subcategory in category.subcategories" :key="subcategory.id">
                <a href="#" @click.prevent="selectCategory(subcategory.name)">
                  {{ subcategory.name }}
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <button v-if="selectedCategory" class="clear-btn" @click="clearCategory">
          Clear Filter
        </button>
      </aside>

      <!-- Products Section -->
      <section class="products-section">
        <div class="top-container">
          <div class="products-header">
            <p>Showing {{ filteredProducts.length }} products</p>
          </div>

          <!-- Sort by dropdown -->
          <div class="sort-by-container">
            <select v-model="sortOption" @change="sortProducts">
              <option value="latest">Sort by Latest</option>
              <option value="popularity">Sort by Popularity</option>
              <option value="rating">Sort by Rating</option>
              <option value="price_low">Price: Low to High</option>
              <option value="price_high">Price: High to Low</option>
            </select>
          </div>

        </div>


        <div class="products-grid">
          <div v-if="filteredProducts.length === 0" class="no-products">
            <p>No products found for this category.</p>
          </div>
          <!-- <ProductComponent :product="product" v-for="product in products" :key="product.id" /> -->
          <ProductComponent :product="product" v-for="product in filteredProducts" :key="product.id" />

          

        </div>

        <button v-if="filteredProducts.length > 0" class="load-more">
          Load More
        </button>
      </section>
    </div>
  </div>
</template>

<script>
import NavigationBarComponent from "@/components/NavigationBarComponent.vue";
import ProductComponent from "@/components/ProductComponent.vue";
import { useProductsStore } from "@/stores/Product";
export default {
  components: {
    NavigationBarComponent,
    ProductComponent,
  },

  setup() {
    const productsStore = useProductsStore();
    const products = productsStore.products;

    return {
      products,
    };
  },

  data() {
    return {
      selectedCategory: null,
      sortOption: "latest",
      categories: [
        {
          id: 1,
          name: "Phones",
          isOpen: false,
          subcategories: [
            { id: 8, name: "Samsung", link: "samsung" },
            { id: 9, name: "iPhone", link: "iphone" },
            { id: 10, name: "Xiaomi", link: "xiaomi" },
            { id: 11, name: "Oppo", link: "oppo" },
            { id: 12, name: "Vivo", link: "vivo" },
          ],
        },
        {
          id: 2,
          name: "Computers",
          isOpen: false,
          subcategories: [
            { id: 13, name: "Dell", link: "dell" },
            { id: 14, name: "HP", link: "hp" },
            { id: 15, name: "Lenovo", link: "lenovo" },
            { id: 16, name: "Asus", link: "asus" },
          ],
        },
        {
          id: 3,
          name: "Accessories",
          isOpen: false,
          subcategories: [
            { id: 17, name: "PowerBanks", link: "powerbanks" },
            { id: 18, name: "Chargers", link: "chargers" },
            { id: 19, name: "Controllers", link: "controllers" },
          ],
        },
        {
          id: 4,
          name: "Laptops",
          isOpen: false,
          subcategories: [
            { id: 20, name: "Apple", link: "apple" },
            { id: 21, name: "Microsoft", link: "microsoft" },
            { id: 22, name: "Acer", link: "acer" },
          ],
        },
        {
          id: 5,
          name: "Monitors",
          isOpen: false,
          subcategories: [
            { id: 23, name: "LG-Monitors", link: "lg_monitors" },
            { id: 24, name: "Samsung-Monitors", link: "samsung_monitors" },
            { id: 25, name: "Dell-Monitors", link: "dell_monitors" },
          ],
        },
        {
          id: 6,
          name: "Networking",
          isOpen: false,
          subcategories: [
            { id: 26, name: "Routers", link: "routers" },
            { id: 27, name: "Switches", link: "switches" },
          ],
        },
        {
          id: 7,
          name: "Headphones",
          isOpen: false,
          subcategories: [
            { id: 28, name: "Sony", link: "sony" },
            { id: 29, name: "Bose", link: "bose" },
            { id: 30, name: "JBL", link: "jbl" },
          ],
        },
      ],
    };
  },
  computed: {
    filteredProducts() {
      if (!this.selectedCategory) {
        return this.products; // Show all products if no category is selected
      }
      return this.products.filter(
        (product) => product.category === this.selectedCategory
      );
    },
  },

  methods: {
    toggleCategory(categoryId) {
      const category = this.categories.find((cat) => cat.id === categoryId);
      category.isOpen = !category.isOpen; // Toggle the dropdown
    },
    selectCategory(categoryName) {
      this.selectedCategory = categoryName; // Set active category
    },
    
    clearCategory() {
      this.selectedCategory = null; // Clear category filter
    },
    sortProducts() {
      if (this.sortOption === "price_low") {
        this.products.sort(
          (a, b) => parseFloat(a.discountPrice) - parseFloat(b.discountPrice)
        );
      } else if (this.sortOption === "price_high") {
        this.products.sort(
          (a, b) => parseFloat(b.discountPrice) - parseFloat(a.discountPrice)
        );
      }
      // Add other sorting logic if needed
    },
  },
};
</script>

<style scoped>
.breadcrumb-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f8f8;
  padding: 0 10% 0 10%;
}

.breadcrumb {
  font-size: 22px;
}

.text-container h1 {
  font-family: "Poppins";
  font-weight: 600;
}

.text {
  font-family: "Poppins";
}

.text h3 {
  font-weight: 500;
}

.image-container {
  display: flex;
  justify-content: end;
}

.image-container img {
  width: 50%;
}

.page-heading {
  margin-left: 40px;
}

/* Main Container */
.main-container {
  font-family: "Poppins";
}

.shop-container {
  display: flex;
  /* Use flexbox to align categories and products side by side */
}

/* Sidebar Styles */
.categories {
  width: 20%;
  border-right: 1px solid #e3e3e3;
  padding-right: 10px;
  margin-left: 20px;
}

.subcategories:hover {
  color: red;
}

.categories h3 {
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  margin-bottom: 10px;
  margin-left: 20px;
}

.categories ul {
  list-style: none;
  padding: 0;
}

.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-family: "Lato", sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  margin-left: 20px;
}

.category-header:hover {
  color: red;
}

.dropdown-icon {
  transition: transform 0.3s ease;
}

.dropdown-icon.open {
  transform: rotate(180deg);
}

.subcategory-list {
  margin-left: 30px;
}

.subcategory-list li a {
  text-decoration: none;
  color: #555;
}

.subcategory-list li a:hover {
  color: #ff497c;
}

.clear-btn {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #ff497c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

/* Products Section */
.products-section {
  flex: 1;
  /* Allow products section to take remaining space */
  padding: 20px;
  /* Add some padding */
}

.products-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Sort by dropdown positioning */
/* .sort-by-container {
  position: absolute;
  top: 120px;
  right: 20px;
} */

.top-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sort-by-container select {
  padding: 5px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.no-products {
  text-align: center;
  font-size: 16px;
  color: #777;
}

.load-more {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.load-more:hover {
  background-color: #0056b3;
}
</style>