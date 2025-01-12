<template>
  <div class="main-container">
    <div class="breadcrumb-container">
      <div class="text-container">
        <nav class="breadcrumb">
          <span><a href="/">Home</a></span>
          <span> | </span>
          <span>Shop</span>
        </nav>
        <h1>{{ selectedMainCategory ? selectedMainCategory : 'Explore All Products' }}</h1>
      </div>
      <div class="image-container">
        <img src="@/assets/images/homepod.png" alt="" />
      </div>
    </div>

    <div class="page-heading">
      <h2>Explore All Products</h2>
    </div>

    <div class="shop-container">
      <!-- Categories Sidebar -->
      <aside class="categories">
        <h3>Categories</h3>
        <ul>
          <li v-for="category in categories" :key="category.id">
            <div class="category-header" @click="toggleCategory(category.id)">
              <span>{{ category.name }}</span>
              <i class="dropdown-icon" :class="{ open: category.isOpen }">
                <i class="ri-arrow-down-s-line"></i>
              </i>
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
        <button v-if="selectedCategory || selectedMainCategory" class="clear-btn" @click="clearCategory">
          Clear Filter
        </button>
      </aside>

      <!-- Products Section -->
      <section class="products-section">
        <div class="top-container">
          <div class="products-header">
            <p>Showing {{ filteredProducts.length }} products</p>
          </div>

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

          <ProductComponent v-for="product in filteredProducts" :key="product.id" :product="product" />
        </div>

        <button v-if="filteredProducts.length > 0" class="load-more">
          Load More
        </button>
      </section>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useProductsStore } from "@/stores/Product";
import ProductComponent from "@/components/ProductComponent.vue";
import { useSearchStore } from "@/stores/Search";

export default {
  components: {
    ProductComponent,
  },

  props: {
    mainCategory: {
      type: String,
      default: null,
    },
  },

  setup(props) {
    const selectedCategory = ref(null);
    const selectedMainCategory = ref(props.mainCategory || null);
    const sortOption = ref("latest");

    const productsStore = useProductsStore();
    const searchStore = useSearchStore();

    const filteredProducts = computed(() => {
      const searchQuery = searchStore.query.toLowerCase();

      return productsStore.products.filter((product) => {
        const matchesMainCategory = selectedMainCategory.value
          ? product.mainCategory.toLowerCase() === selectedMainCategory.value.toLowerCase()
          : true;
        const matchesSubcategory = selectedCategory.value
          ? product.category.toLowerCase() === selectedCategory.value.toLowerCase()
          : true;
        const matchesSearchQuery = product.name.toLowerCase().includes(searchQuery);

        return matchesMainCategory && matchesSubcategory && matchesSearchQuery;
      });
    });

    const categories = [
      {
        id: 1,
        name: "Phones",
        isOpen: false,
        subcategories: [
          { id: 8, name: "Samsung" },
          { id: 9, name: "iPhone" },
          { id: 10, name: "Xiaomi" },
          { id:  11, name: "Oppo" },
          { id: 12, name: "Vivo" },
        ],
      },
      {
        id: 2,
        name: "Computers",
        isOpen: false,
        subcategories: [
          { id: 13, name: "Dell" },
          { id: 14, name: "HP" },
          { id: 15, name: "Lenovo" },
          { id: 16, name: "Asus" },
        ],
      },
      {
        id: 3,
        name: "Accessories",
        isOpen: false,
        subcategories: [
          { id: 17, name: "PowerBanks" },
          { id: 18, name: "Chargers" },
          { id: 19, name: "Controllers" },
        ],
      },
      {
        id: 4,
        name: "Laptops",
        isOpen: false,
        subcategories: [
          { id: 20, name: "Apple" },
          { id: 21, name: "Microsoft" },
          { id: 22, name: "Acer" },
        ],
      },
      {
        id: 5,
        name: "Monitors",
        isOpen: false,
        subcategories: [
          { id: 23, name: "LG-Monitors" },
          { id: 24, name: "Samsung-Monitors" },
          { id: 25, name: "Dell-Monitors" },
        ],
      },
      {
        id: 6,
        name: "Networking",
        isOpen: false,
        subcategories: [
          { id: 26, name: "Routers" },
          { id: 27, name: "Switches" },
        ],
      },
      {
        id: 7,
        name: "Headphones",
        isOpen: false,
        subcategories: [
          { id: 28, name: "Sony" },
          { id: 29, name: "Bose" },
          { id: 30, name: "JBL" },
        ],
      },
    ];

    const toggleCategory = (categoryId) => {
      const category = categories.find((cat) => cat.id === categoryId);
      category.isOpen = !category.isOpen;
      selectedMainCategory.value = category.isOpen ? category.name : null;
      selectedCategory.value = null;
    };

    const selectCategory = (categoryName) => {
      selectedCategory.value = categoryName;
    };

    const clearCategory = () => {
      selectedCategory.value = null;
      selectedMainCategory.value = null;
    };

    const sortProducts = () => {
      if (sortOption.value === "price_low") {
        productsStore.products.sort((a, b) => parseFloat(a.discountPrice) - parseFloat(b.discountPrice));
      } else if (sortOption.value === "price_high") {
        productsStore.products.sort((a, b) => parseFloat(b.discountPrice) - parseFloat(a.discountPrice));
      }
    };

    return {
      selectedCategory,
      selectedMainCategory,
      sortOption,
      filteredProducts,
      categories,
      toggleCategory,
      selectCategory,
      clearCategory,
      sortProducts,
    };
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
}

/* Sidebar Styles */
.categories {
  width: 20%;
  border-right: 1px solid #e3e3e3;
  padding-right: 10px;
  margin-left: 20px;
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
  padding: 20px;
}

.products-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

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
