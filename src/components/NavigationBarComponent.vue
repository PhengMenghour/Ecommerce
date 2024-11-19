<template>
  <nav class="navbar">
    <div class="logo">
      <img src="/src/assets/images/smartsphere.png" alt="Logo" />
    </div>

    <ul class="nav-links">
      <li>
        <a
          class="main-links"
          :class="{ active: activeLink === 'home' }"
          @click.prevent="setActiveLink('home')"
          href="#home"
          >Home</a
        >
      </li>
      <li class="dropdown">
        <a
          class="main-links"
          :class="{ active: activeLink === 'shop' }"
          @click.prevent="setActiveLink('shop')"
          href="#shop"
          >Shop<i class="ri-arrow-down-s-line"></i
        ></a>
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
        <a
          class="main-links"
          :class="{ active: activeLink === 'pages' }"
          @click.prevent="setActiveLink('pages')"
          href="#pages"
          >Pages<i class="ri-arrow-down-s-line"></i
        ></a>
        <ul class="dropdown-menu">
          <li><a href="#cart">Cart</a></li>
          <li><a href="#checkout">Checkout</a></li>
          <li><a href="#account">Account</a></li>
          <li><a href="#signUp">Sign Up</a></li>
          <li><a href="#signIn">Sign In</a></li>
          <li><a href="#privacy">Privacy and Policy</a></li>
        </ul>
      </li>
      <li>
        <a
          class="main-links"
          :class="{ active: activeLink === 'contact' }"
          @click.prevent="setActiveLink('contact')"
          href="#contact"
          >Contact</a
        >
      </li>
      <li>
        <a
          class="main-links"
          :class="{ active: activeLink === 'signIn' }"
          @click.prevent="setActiveLink('signIn')"
          href="#signIn"
          >Sign In</a
        >
      </li>
    </ul>

    <div class="nav-icons">
      <div class="search-container">
        <input type="text" placeholder="What are you looking for?" />
        <i class="ri-search-line"></i>
      </div>

      <i class="ri-heart-line"></i>
      <i class="ri-shopping-cart-line"></i>
      <i class="ri-user-line"></i>
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

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #ffffff;
  border: 1px #000000 solid;
  border-radius: 15px;
  font-family: "Poppins", sans-serif;
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
  opacity: 0; /* Fully transparent */
  visibility: hidden; /* Hidden by default */
  position: absolute;
  top: 150%; /* Start slightly below the dropdown */
  left: 0;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 10px;
  list-style: none;
  padding: 10px;
  z-index: 1000; /* Ensure it appears above other elements */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transform: translateY(10px); /* Slide down by 10px initially */
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
}

.nav-links .dropdown:hover .dropdown-menu {
  opacity: 1; /* Fully visible */
  visibility: visible; /* Make it interactive */
  transform: translateY(0); /* Slide into position */
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
  gap: 15px; /* Adjusts space between icons */
  position: relative; /* Ensures icons are aligned correctly */
}

.search-container {
  position: relative;
  flex-shrink: 0; /* Prevents shrinking of the search container */
}

.search-container input {
  width: 200px; /* Adjust width as needed */
  padding: 5px 35px 5px 10px; /* Leaves space for the icon */
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  z-index: 1; /* Ensures it doesn’t overlap other elements */
}

.search-container i {
  position: absolute;
  top: 50%;
  right: 10px; /* Aligns icon inside input */
  transform: translateY(-50%);
  font-size: 20px;
  color: #aaa;
  pointer-events: none; /* Prevents icon from blocking input functionality */
}

.nav-icons .ri-heart-line,
.nav-icons .ri-shopping-cart-line,
.nav-icons .ri-user-line {
  font-size: 20px;
  cursor: pointer;
  z-index: 2; /* Ensures these icons are on top of the search-container */
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
  bottom: -5px; /* Position below the link */
  height: 2px; /* Underline thickness */
  width: 0;
  background: #000000; /* Underline color */
  transition: width 0.3s ease-in-out; /* Smooth underline animation */
}

/* On hover */
.nav-links .main-links:hover::after {
  width: 100%;
}

/* For active link */
.nav-links .main-links.active::after {
  width: 100%; /* Keep the underline fully visible */
}

.nav-links .main-links.active {
  color: #000000; /* Optional: Change color for active link */
}
</style>
