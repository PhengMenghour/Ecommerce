<template>
  <nav class="navbar">
    <div class="logo">
      <img src="/src/assets/images/smartsphere.png" alt="Logo" />
    </div>

    <ul class="nav-links">
      <li>
        <RouterLink class="main-links" :class="{ active: activeLink === 'home' }" :to="{ name: 'home' }"
          @click="setActiveLink('home')">
          Home
        </RouterLink>

      </li>
      <li class="dropdown">
        <RouterLink class="main-links" :class="{ active: activeLink === 'shop' }" :to="{ name: 'shop' }"
          @click="setActiveLink('shop')">
          Shop <i class="ri-arrow-down-s-line"></i>
        </RouterLink>
        <ul class="dropdown-menu">
          <li><RouterLink to="/shop/phones">Phones</RouterLink></li>
          <li><RouterLink to="/shop/computers">Computers</RouterLink></li>
          <li><RouterLink to="/shop/accessories">Accessories</RouterLink></li>
          <li><RouterLink to="/shop/laptops">Laptops</RouterLink></li>
          <li><RouterLink to="/shop/monitors">Monitors</RouterLink></li>
          <li><RouterLink to="/shop/networking">Networking</RouterLink></li>
          <li><RouterLink to="/shop/headphones">Headphones</RouterLink></li>
        </ul>
      </li>

      

      <li class="dropdown">
        <RouterLink class="main-links" :class="{ active: activeLink === 'pages' }" :to="{ name: 'home' }"
          @click="setActiveLink('pages')">
          Pages <i class="ri-arrow-down-s-line"></i>
        </RouterLink>
        <ul class="dropdown-menu">
          <li>
            <RouterLink to="/pages/cart">Cart</RouterLink>
          </li>
          <li>
            <RouterLink to="/pages/checkout">Checkout</RouterLink>
          </li>
          <li>
            <RouterLink to="/pages/accountPage">Account</RouterLink>
          </li>
          <li>
            <RouterLink to="/signUp">Sign Up</RouterLink>
          </li>
          <li>
            <RouterLink to="/signIn">Sign In</RouterLink>
          </li>
          <li>
            <RouterLink to="/pages/privacyAndPolicy">
              Privacy and Policy
            </RouterLink>
          </li>
        </ul>
      </li>
      <li>
        <RouterLink class="main-links" :class="{ active: activeLink === 'contact' }" :to="{ name: 'contact' }"
          @click="setActiveLink('contact')">
          Contact
        </RouterLink>
      </li>
      <li>
        <RouterLink class="main-links" :class="{ active: activeLink === 'signIn' }" :to="{ name: 'signIn' }"
          @click="setActiveLink('signIn')">
          Sign In
        </RouterLink>
      </li>
    </ul>

    <div class="nav-icons">
      <div class="search-container">
        <i class="ri-search-line" @click="handleSearch"></i>
        <input type="text" v-model="searchQuery" placeholder="What are you looking for?" @input="handleSearch" 
        />
        <i class="ri-search-line" @click="handleSearch"></i>
      </div>
      <button>
        <i class="ri-heart-3-line"></i>
      </button>
      <button @click="toggleCartSidebar">
        <i class="ri-shopping-cart-line"></i>
      </button>
      <button @click="$router.push('/pages/accountPage')">
        <i class="ri-user-line"></i>
      </button>
    </div>

    <!-- Sidebar -->
    <div :class="{ 'cart-sidebar': true, open: isCartOpen }">
      <div class="cart-header">
        <h2>Cart Review</h2>
        <button @click="toggleCartSidebar">
          <i class="ri-close-line"></i>
        </button>
      </div>
      <div class="cart-content">
        <!-- Cart items go here -->
        <CartItemComponent v-for="(item, index) in cartItems" :key="index" :item="item" />
      </div>
      <div class="button-container">
        <button class="button-left" @click="handleNavigation('/pages/cart')">View Cart</button>
        <button class="button-right" @click="handleNavigation('/pages/checkout')">Checkout</button>
      </div>
    </div>

    <!-- Overlay -->
    <div v-if="isCartOpen" class="overlay" @click="toggleCartSidebar"></div>
  </nav>
</template>

<script>
import { useCartStore } from '@/stores/Cart';
import CartItemComponent from './CartItemComponent.vue';
import { useSearchStore } from '@/stores/Search'; // Import the search store
import { RouterLink } from 'vue-router';

export default {
  components: {
    CartItemComponent
  },
  
  

  data() {
    return {
      activeLink: "home", // Default active link
      isCartOpen: false, // Sidebar visibility state
    };
  },

  computed: {
    cartItems() {
      const cartStore = useCartStore();
      return cartStore.cartItems
    },
  },

  methods: {
    setActiveLink(link) {
      this.activeLink = link; // Update active link
    },
    toggleCartSidebar() {
      this.isCartOpen = !this.isCartOpen; // Toggle sidebar visibility
    },

    handleNavigation(route) {
      this.$router.push(route); // Navigate to the specified route
      this.toggleCartSidebar(); // Close the sidebar
    },
    handleSearch() {
      const searchStore = useSearchStore();
      searchStore.setQuery(this.searchQuery); // Set the search query in the store
      this.$router.push('/shop'); // Navigate to the Shop page
    },
    
  },
  data() {
    return {
      searchQuery: '', // Add a data property for the search input
    };
  },
};
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 2%;
  /* Make the navbar stick to the top */
  /* left: 50%;
  transform: translateX(-50%); Center the navbar horizontally */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #ffffff;
  border-radius: 15px;
  font-family: "Poppins", sans-serif;
  z-index: 10;

  width: 100%;
  /* This ensures the navbar stretches across the full width */
  max-width: 1200px;
  /* You can adjust this to your desired width */
  margin-left: auto;
  /* Centers the navbar */
  margin-right: auto;
  /* Centers the navbar */

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.logo img {
  height: 40px;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 80px;
  margin: 0;
  padding: 0;
}

.nav-links a {
  text-decoration: none;
  color: #000000;
  font-weight: 500;
}

.nav-links .dropdown {
  position: relative;
  cursor: pointer;
}

.nav-links .dropdown-menu {
  width: 10rem;
  opacity: 0;
  /* Fully transparent */
  visibility: hidden;
  /* Hidden by default */
  position: absolute;
  top: 150%;
  /* Start slightly below the dropdown */
  left: 0;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 10px;
  list-style: none;
  padding: 10px;
  z-index: 1000;
  /* Ensure it appears above other elements */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transform: translateY(10px);
  /* Slide down by 10px initially */
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
}

.nav-links .dropdown:hover .dropdown-menu {
  opacity: 1;
  /* Fully visible */
  visibility: visible;
  /* Make it interactive */
  transform: translateY(0);
  /* Slide into position */
}

.nav-links .dropdown:hover .dropdown-menu:not(:hover) {
  /* Optional: Add slight delay for a smoother effect */
  transition-delay: 0.1s;
}

.nav-links .dropdown-menu a {
  display: block;
  color: #000000;
  text-decoration: none;
  padding: 5px 15px;
  transition: color 0.3s ease-in-out;
}

.nav-links .dropdown-menu a:hover {
  color: #fe5182;
}

.nav-icons {
  display: flex;
  align-items: center;
  gap: 15px;
  position: relative;
}

.nav-icons input {
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  width: 200px;
  height: 30px;
}

.nav-icons {
  display: flex;
  align-items: center;
  gap: 15px;
  /* Adjusts space between icons */
  position: relative;
  /* Ensures icons are aligned correctly */
}

.search-container {
  position: relative;
  flex-shrink: 0;
  /* Prevents shrinking of the search container */
}

.search-container input {
  width: 200px;
  /* Adjust width as needed */
  padding: 5px 35px 5px 10px;
  /* Leaves space for the icon */
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  z-index: 1;
  /* Ensures it doesn’t overlap other elements */
}

.search-container i {
  position: absolute;
  top: 50%;
  right: 10px;
  /* Aligns icon inside input */
  transform: translateY(-50%);
  font-size: 20px;
  color: #aaa;
  pointer-events: none;
  /* Prevents icon from blocking input functionality */
}

.nav-icons .ri-heart-3-line,
.nav-icons .ri-shopping-cart-line,
.nav-icons .ri-user-line {
  font-size: 20px;
  cursor: pointer;
  z-index: 2;
  /* Ensures these icons are on top of the search-container */
}

.nav-icons button {
  position: relative;
  width: 35px;
  height: 35px;
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  cursor: pointer;
  overflow: hidden;
  /* Ensures the effect stays inside the button */
  transition: color 0.3s ease;
  border-radius: 100px;
}

.nav-icons button i {
  z-index: 2;
  /* Keeps the icon above the background animation */
  font-size: 20px;
  color: #000;
}

.nav-icons button::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: #fe5182;
  /* Bloom color */
  border-radius: 50%;
  /* Creates a circular bloom */
  transform: translate(-50%, -50%);
  transition: width 0.5s ease, height 0.5s ease;
  /* Smooth bloom effect */
  z-index: 1;
}

.nav-icons button:hover::before {
  width: 300%;
  height: 300%;
}

.nav-icons button:hover {
  /* background-color: #fe5182; */
  color: white;
  border-radius: 100px;
}

.nav-icons button:hover i {
  color: white;
  /* Change the color to white or any other color you prefer */
  transition: color 0.3s ease;
  /* Smooth transition effect */
}

/* Styling Navigation bar with animation */
.nav-links .main-links {
  position: relative;
  text-decoration: none;
  color: #000000;
  font-weight: 500;
  cursor: pointer;
}

.nav-links .main-links::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -5px;
  /* Position below the link */
  height: 2px;
  /* Underline thickness */
  width: 0;
  background: #000000;
  /* Underline color */
  transition: width 0.3s ease-in-out;
  /* Smooth underline animation */
}

/* On hover */
.nav-links .main-links:hover::after {
  width: 100%;
}

/* For active link */
.nav-links .main-links.active::after {
  width: 100%;
  /* Keep the underline fully visible */
}

.nav-links .main-links.active {
  color: #000000;
  /* Optional: Change color for active link */
}

/* Sidebar styling */
.cart-sidebar {
  font-family: "Poppins";
  position: fixed;
  top: 0;
  right: -100%;
  /* Hidden by default */
  width: 40%;
  height: 100%;
  background-color: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  transition: right 0.3s ease-in-out;
  z-index: 1001;
  /* Above the overlay */
  overflow-y: auto;
  /* Add vertical scrolling */
  padding-bottom: 20px;
  /* Optional: Add some space at the bottom */
}

.cart-sidebar.open {
  right: 0;
  /* Slide in */
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #ffffff;
  border-bottom: 1px solid #ddd;
  height: 75px;
}

.cart-header h2 {
  margin: 0;
  font-size: 1.6em;
}

.cart-header button {
  background: #f6f7fb;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
  height: 40px;
  width: 40px;
  border-radius: 20px;
}

.cart-header button:hover {
  color: #fff;
  border: 2px solid;
  background-color: #3577f0;
  transition: ease-in 0.3s;
}

.cart-content {
  padding: 15px;
}

/* Overlay styling */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  /* Semi-transparent black */
  z-index: 1000;
  /* Below the sidebar */
  transition: opacity 0.3s ease;
}

.button-container {
  font-family: "Poppins";
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 50px;
}

.button-container button {
  height: 75px;
  width: 200px;
  border: none;
  font-size: 24px;
  color: white;
  border-radius: 10px;
}

.button-container button:hover {
  transition: ease-in-out 0.2s;
  scale: 1.1;
}

.button-container .button-left {
  background-color: #3577f0;
}

.button-container .button-right {
  background-color: #fe5182;
}
</style>
