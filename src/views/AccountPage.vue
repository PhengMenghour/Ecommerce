<template>
  <div class="breadcrumb-container">
    <div class="text-container">
      <nav class="breadcrumb">
        <span><router-link to="/">Home</router-link></span>
        <span> | </span>
        <span><router-link to="/">Pages</router-link></span>
        <span> | </span>
        <span>Shop</span>
      </nav>
      <h1>Account</h1>
    </div>
    <div class="image-container">
      <img src="@/assets/images/homepod.png" alt="Homepod Image" />
    </div>
  </div>

  <div class="account-page">
    <div class="main-content">
      <div class="profile-section">
        <img
          src="@/assets/images/profile.jpg"
          alt="Profile Picture"
          class="profile-img"
        />
        <h2>Hello Annie</h2>
        <p style="margin-left: 90px">SmartSphere Member Since Sep 2020</p>
      </div>
      <div class="menu-section">
        <ul class="menu-list">
          <li>
            <router-link to="#" @click.prevent="showSection('dashboard')"
              ><i class="icon-dashboard"></i> Dashboard</router-link
            >
          </li>
          <li>
            <router-link to=/pages/cart
            ><i class="icon-logout"></i>orders</router-link
            >
          </li>
          <li>
            <router-link to="#" @click.prevent="showSection('downloads')"
              ><i class="icon-downloads"></i> Downloads</router-link
            >
          </li>
          <li>
            <router-link to="#" @click.prevent="showSection('addresses')"
              ><i class="icon-addresses"></i> Addresses</router-link
            >
          </li>
          <li>
            <router-link to="#" @click.prevent="showSection('account-details')"
              ><i class="icon-account"></i> Account Details</router-link
            >
          </li>
          <li>
            <router-link to="/logout"
              ><i class="icon-logout"></i> Logout</router-link
            >
          </li>
        </ul>
      </div>
      <div v-if="activeSection === 'dashboard'" class="content-section">
        <p>
          Hello Annie (not Annie?
          <router-link to="/logout">Log Out</router-link>)
        </p>
        <p>
          From your account dashboard, you can view your recent orders, manage
          your shipping and billing addresses, and edit your password and
          account details.
        </p>
      </div>
      <div v-if="activeSection === 'downloads'" class="content-section">
        <p>You don't have any downloads</p>
      </div>
      <div v-if="activeSection === 'addresses'" class="content-section">
        <p>
          The following addresses will be used on the checkout page by default.
        </p>
        <div class="address-section">
          <div class="address-card">
            <h3>Shipping Address</h3>
            <p>Name: Annie Mario</p>
            <p>Email: annie@example.com</p>
            <p>Phone: 1234 567890</p>
            <p>7398 Smoke Ranch Road</p>
            <p>Las Vegas, Nevada 89128</p>
          </div>
          <div class="address-card">
            <h3>Billing Address</h3>
            <p>Name: Annie Mario</p>
            <p>Email: annie@example.com</p>
            <p>Phone: 1234 567890</p>
            <p>7398 Smoke Ranch Road</p>
            <p>Las Vegas, Nevada 89128</p>
          </div>
        </div>
      </div>
      <div v-if="activeSection === 'account-details'" class="content-section">
        <div class="account-details-page">
          <form>
            <label for="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              placeholder="First Name"
              value="Annie"
            />

            <label for="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              placeholder="Last Name"
              value="Mario"
            />

            <label for="country-region">Country/Region</label>
            <select id="country-region">
              <option>United Arab Emirates (UAE)</option>
              <!-- Add other options here -->
            </select>

            <p class="small-text">
              This will be how your name will be displayed in the account
              section and in reviews
            </p>

            <h2>Password Change</h2>

            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Password" />

            <label for="new-password">New Password</label>
            <input
              type="password"
              id="new-password"
              placeholder="New Password"
            />

            <label for="confirm-password">Confirm New Password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm New Password"
            />

            <button type="submit">Save Changes</button>
          </form>
        </div>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: {
    FooterComponent,
  },
  data() {
    return {
      activeSection: "dashboard", // Default section
    };
  },
  methods: {
    showSection(section) {
      this.activeSection = section;
    },
  },
};
</script>

<style scoped>
.breadcrumb-container {
  font-family: "Poppins";
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f8f8;
  padding: 0 10%;
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

.account-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  display: flex;
  flex: 1;
  padding: 20px;
}

.profile-section {
  text-align: center;
  margin-right: 20px;
}

.profile-img {
  border-radius: 50%;
  width: 100px;
  height: 100px;
}

.menu-section {
  margin-top: 250px;
  margin-left: -250px;
  height: 400px;
  width: 300px;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-list li {
  margin-bottom: 15px;
}

.menu-list li a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
  font-size: 16px;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.menu-list li a:hover {
  background-color: #f5f5f5;
  color: blue;
}

.menu-list li.active a {
  background-color: #eef3fc;
  color: #2d89ef;
}

.content-section {
  flex: 1;
  margin-top: 250px;
  font-family: sans-serif;
  margin-left: 100px;
}

.address-section {
  display: flex;
  gap: 20px;
}

.address-card {
  width: 45%;
  padding: 16px;
}
/* General Form Styles */
form {
  font-family: "Arial", sans-serif;
  width: 600px;
  margin-left: -300px;
  margin: 0 auto;
  padding: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 14px;
}

input[type="text"],
input[type="password"],
select {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

input[type="password"]::placeholder,
input[type="text"]::placeholder {
  color: #ccc;
}

input[type="text"]:focus,
input[type="password"]:focus,
select:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

/* Section Title */
 

/* Button Styles */
button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 12px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}

/* Additional Instructions */
.small-text {
  font-size: 12px;
  color: #666;
  margin-bottom: 20px;
}

footer {
  padding: 10px;
  text-align: center;
  background-color: #f1f1f1;
}
</style>
