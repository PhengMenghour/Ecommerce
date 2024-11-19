<template>
  <nav class="navbar">
    <div class="logo">
      <img src="/src/assets/images/smartsphere.png" alt="Logo" />
    </div>

    <ul class="nav-links">
      <li><a href="#home">Home</a></li>
      <li class="dropdown">
        <a href="#shop">Shop<i class="ri-arrow-down-s-line"></i></a>
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
        <a href="#pages">Pages<i class="ri-arrow-down-s-line"></i></a>
        <ul class="dropdown-menu">
          <li><a href="#test1">Test1</a></li>
          <li><a href="#test2">Test2</a></li>
        </ul>
      </li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#signIn">Sign In</a></li>
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

<script></script>

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
}

.nav-links .dropdown-menu {
  display: none;
  position: absolute;
  top: 30px;
  left: 0;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  list-style: none;
  padding: 10px;
}

.nav-links .dropdown:hover .dropdown-menu {
  display: block;
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
  font-size: 16px;
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
</style>
