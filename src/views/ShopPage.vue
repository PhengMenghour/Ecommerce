<template>
  <div class="main-container">

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
import NavigationBarComponent from "@/components/NavigationBarComponent.vue";
import ProductComponent from "@/components/ProductComponent.vue";
export default {
  components: {
    NavigationBarComponent,
    ProductComponent,
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

      products: [
        {
          id: 8,
          name: "iPhone 16 Pro Max",
          category: "iPhone",
          price: "$1499.99",
          discountPrice: "$1249.99",
          image: "/src/assets/images/iphone_16_promax.jpg",
          discount: "10% OFF",
        },
        {
          id: 9,
          name: "Samsung Galaxy S24",
          category: "Samsung",
          price: "$1199.99",
          discountPrice: "$999.99",
          image: "/src/assets/images/galaxy_s24_ultra.jpg",
          discount: "15% OFF",
        },
        {
          id: 10,
          name: "Dell Optiplex",
          category: "Dell",
          price: "$1599.99",
          discountPrice: "$1399.99",
          image: "/src/assets/images/dell_optiplex.jpg",
          discount: "12% OFF",
        },

        // New Products
        // Phones
        {
          id: 11,
          name: "Xiaomi Mi 14 Ultra",
          category: "Xiaomi",
          price: "$1099.99",
          discountPrice: "$899.99",
          image: "/src/assets/images/xiaomi_14ultra.jpg",
          discount: "18% OFF",
        },
        {
          id: 12,
          name: "Oppo Find X6 Pro",
          category: "Oppo",
          price: "$999.99",
          discountPrice: "$849.99",
          image: "/src/assets/images/oppo_find_x6_pro.jpg",
          discount: "15% OFF",
        },
        {
          id: 13,
          name: "Vivo X100 Pro",
          category: "Vivo",
          price: "$899.99",
          discountPrice: "$799.99",
          image: "/src/assets/images/vivo_x100pro.jpg",
          discount: "11% OFF",
        },

        // Computers
        {
          id: 14,
          name: "HP ProDesk 600 G3 SFF",
          category: "HP",
          price: "$799.99",
          discountPrice: "$749.99",
          image: "/src/assets/images/hp_prodesk_600_g3_sff.jpg",
          discount: "6% OFF",
        },
        {
          id: 15,
          name: "Lenovo Legion Tower",
          category: "Lenovo",
          price: "$1199.99",
          discountPrice: "$999.99",
          image: "/src/assets/images/lenovo_legion_tower_7ig8w.jpg",
          discount: "17% OFF",
        },
        {
          id: 16,
          name: "Asus ROG Strix GA35CA",
          category: "Asus",
          price: "$1499.99",
          discountPrice: "$1299.99",
          image: "/src/assets/images/asus_rog_strix.jpg",
          discount: "13% OFF",
        },

        // Accessories
        {
          id: 17,
          name: "Sony WH-1000XM5",
          category: "PowerBanks",
          price: "$99.99",
          discountPrice: "$89.99",
          image: "/src/assets/images/anker_ank_powerbank.jpg",
          discount: "10% OFF",
        },
        {
          id: 18,
          name: "Anker Fast Charger",
          category: "Chargers",
          price: "$49.99",
          discountPrice: "$39.99",
          image: "/src/assets/images/anker_fast_charger.jpg",
          discount: "20% OFF",
        },
        {
          id: 19,
          name: "PS5 Controller",
          category: "Controllers",
          price: "$99.99",
          discountPrice: "$89.99",
          image: "/src/assets/images/ps5.png",
          discount: "10% OFF",
        },

        // Laptops
        {
          id: 20,
          name: "MacBook Pro M1",
          category: "Apple",
          price: "$1999.99",
          discountPrice: "$1799.99",
          image: "/src/assets/images/macbook_pro_m1.png",
          discount: "10% OFF",
        },
        {
          id: 21,
          name: "Microsoft Surface Laptop 5",
          category: "Microsoft",
          price: "$1399.99",
          discountPrice: "$1249.99",
          image: "/src/assets/images/microsoft_surface_laptop_5.jpg",
          discount: "11% OFF",
        },
        {
          id: 22,
          name: "Acer Swift 3 OLED",
          category: "Acer",
          price: "$999.99",
          discountPrice: "$899.99",
          image: "/src/assets/images/acer_swift_3_oled.jpg",
          discount: "10% OFF",
        },

        // Monitors
        {
          id: 23,
          name: "LG 22MK600M",
          category: "LG-Monitors",
          price: "$799.99",
          discountPrice: "$699.99",
          image: "/src/assets/images/lg_monitor.jpg",
          discount: "13% OFF",
        },
        {
          id: 24,
          name: "Samsung 34 Odyssey G5 Ultra",
          category: "Samsung-Monitors",
          price: "$1499.99",
          discountPrice: "$1349.99",
          image: "/src/assets/images/samsung_odyssey.jpg",
          discount: "10% OFF",
        },
        {
          id: 25,
          name: "Dell Sync 2024",
          category: "Dell-Monitors",
          price: "$1199.99",
          discountPrice: "$1099.99",
          image: "/src/assets/images/dell_sync_2024.jpg",
          discount: "8% OFF",
        },

        // Networking
        {
          id: 26,
          name: "Netgear Nighthawk AX12",
          category: "Routers",
          price: "$599.99",
          discountPrice: "$549.99",
          image: "/src/assets/images/netgear_nighthawk_ax12.jpg",
          discount: "8% OFF",
        },
        {
          id: 27,
          name: "Cisco Catalyst 9200L",
          category: "Switches",
          price: "$999.99",
          discountPrice: "$899.99",
          image: "/src/assets/images/cisco_catalyst_9200l.jpg",
          discount: "10% OFF",
        },

        // Headphones
        {
          id: 28,
          name: "Sony WF-1000XM5",
          category: "Sony",
          price: "$299.99",
          discountPrice: "$269.99",
          image: "/src/assets/images/sony_1000xm5.jpg",
          discount: "10% OFF",
        },
        {
          id: 29,
          name: "Bose QuietComfort 45",
          category: "Bose",
          price: "$329.99",
          discountPrice: "$299.99",
          image: "/src/assets/images/bose_quietcomfort_45.jpg",
          discount: "9% OFF",
        },
        {
          id: 30,
          name: "JBL Tune 760NC",
          category: "JBL",
          price: "$199.99",
          discountPrice: "$169.99",
          image: "/src/assets/images/jbl_tune_760nc.jpg",
          discount: "15% OFF",
        },

        // Additional products...
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
/* Main Container */
.main-container{
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
.sort-by-container {
  position: absolute;
  top: 120px;
  /* Adjust this value based on your design */
  right: 20px;
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