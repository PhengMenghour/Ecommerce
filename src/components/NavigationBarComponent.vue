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
        <div class="input-icon">
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
}

.nav-icons input {
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  width: 200px;
}

.nav-icons .ri-heart-line,
.nav-icons .ri-shopping-cart-line,
.nav-icons .ri-user-line {
  font-size: 20px;
  cursor: pointer;
}

/* .nav-icons .input-icon {
    width: 100%;
    margin-bottom: 10px;
}

.nav-icons .input-icon i {
    position: absolute;
}

.nav-icons .input-icon .input-field{
    width: 100%;
    padding: 10px;
    text-align: center;
} */
</style>
