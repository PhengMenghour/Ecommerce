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
          <li><a href="#phone">Phone</a></li>
          <li><a href="#computer">Computer</a></li>
          <li><a href="#accessories">Accessories</a></li>
          <li><a href="#laptops">Laptops</a></li>
          <li><a href="#monitors">Monitors</a></li>
          <li><a href="#networking">Network</a></li>
          <li><a href="#headphones">Headphone</a></li>
        </ul>
      </li>
      <li class="dropdown">
        <RouterLink class="main-links" :class="{ active: activeLink === 'pages' }" :to="{ name: 'pages' }"
          @click="setActiveLink('pages')">
          Pages <i class="ri-arrow-down-s-line"></i>
        </RouterLink>
        <ul class="dropdown-menu">
          <li><a href="#cart">Cart</a></li>
          <li><a href="#checkout">Checkout</a></li>
          <li><a href="#account">Account</a></li>
          <li><a href="#signUp">Sign Up</a></li>
          <li><a href="#signIn">Sign In</a></li>
          <li>
            <RouterLink :to="{name: 'privacyAndPolicy'}">
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
        <input type="text" placeholder="What are you looking for?" />
        <i class="ri-search-line"></i>
      </div>
      <button>
        <i class="ri-heart-3-line"></i>
      </button>
      <button>
        <i class="ri-shopping-cart-line"></i>
      </button>
      <button>
        <i class="ri-user-line"></i>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      activeLink: "home", // Default active link
    };
  },
  methods: {
    setActiveLink(link) {
      this.activeLink = link; // Update active link
    },
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
</style>
