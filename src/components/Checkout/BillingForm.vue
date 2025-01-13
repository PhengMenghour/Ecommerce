<template>
  <div class="main-container">
    <div class="accordion-container">
      <!-- Returning Customer Section -->
      <div class="login-container">
        <i class="ri-user-fill"></i>
        <p>Returning Customer?</p>
        <button @click="toggleLogin">Click here to login <i class="ri-arrow-down-s-line"></i></button>
      </div>
      <div v-if="showLogin" class="login-section">
        <p>Please login to continue.</p>
        <!-- Add login form or details -->
      </div>

      <!-- Coupon Section -->
      <div class="coupon-container">
        <i class="ri-pencil-line"></i>
        <p>Have a coupon?</p>
        <button @click="toggleCoupon">Click here to enter your code <i class="ri-arrow-down-s-line"></i></button>
      </div>
      <div v-if="showCoupon" class="coupon-section">
        <p>Enter your coupon code below:</p>
        <input type="text" v-model="couponCode" placeholder="Enter coupon code" class="input-field">
        <button @click="applyCoupon" class="apply-coupon-button">Apply Coupon</button>
      </div>
    </div>

    <!-- Billing Form -->
    <div class="form-container">
      <h2>Billing Details</h2>
      <form @submit.prevent="proceedToCheckout">
        <div class="first-form">
          <div class="input-container">
            <input type="text" id="first-name" class="input-field" v-model="firstName" :class="{ error: errors.firstName }" placeholder=" " required>
            <label for="first-name">First Name <span class="required">*</span></label>
            <span v-if="errors.firstName" class="error-message">{{ errors.firstName }}</span>
          </div>
          <div class="input-container">
            <input type="text" id="last-name" class="input-field" v-model="lastName" :class="{ error: errors.lastName }" placeholder=" " required>
            <label for="last-name">Last Name <span class="required">*</span></label>
            <span v-if="errors.lastName" class="error-message">{{ errors.lastName }}</span>
          </div>
        </div>

        <div class="second-form">
          <div class="input-container">
            <input type="text" id="company-name" class="input-field" v-model="companyName" placeholder=" ">
            <label for="company-name">Company Name</label>
          </div>
        </div>

        <div class="fourth-form">
          <div class="input-container">
            <input type="text" id="street-address" class="input-field" v-model="streetAddress" :class="{ error: errors.streetAddress }" placeholder=" " required>
            <label for="street-address">Street Address <span class="required">*</span></label>
            <span v-if="errors.streetAddress" class="error-message">{{ errors.streetAddress }}</span>
          </div>
        </div>

        <div class="sixth-form">
          <div class="input-container">
            <input type="text" id="city" class="input-field" v-model="city" :class="{ error: errors.city }" placeholder=" " required>
            <label for="city">Town/City <span class="required">*</span></label>
            <span v-if="errors.city" class="error-message">{{ errors.city }}</span>
          </div>
        </div>

        <div class="seventh-form">
          <div class="input-container select-container">
            <select id="country" v-model="country" class="input-field" :class="{ error: errors.country }" required>
              <option value="">Select Country</option>
              <option value="KH">Cambodia</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="GB">United Kingdom</option>
              <!-- Add more countries -->
            </select>
            <label for="country">Country <span class="required">*</span></label>
            <span v-if="errors.country" class="error-message">{{ errors.country }}</span>
          </div>
        </div>

        <div class="eighth-form">
          <div class="input-container">
            <input type="text" id="phone" class="input-field" v-model="phone" :class="{ error: errors.phone }" placeholder=" " required>
            <label for="phone">Phone <span class="required">*</span></label>
            <span v-if="errors.phone" class="error-message">{{ errors.phone }}</span>
          </div>
        </div>

        <div class="nineth-form">
          <div class="input-container">
            <input type="email" id="email" class="input-field" v-model="email" :class="{ error: errors.email }" placeholder=" " required>
            <label for="email">Email Address <span class="required">*</span></label>
            <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
          </div>
        </div>

        <button :disabled="isLoading" type="submit" class="checkout-button">
          <span v-if="isLoading">Processing...</span>
          <span v-else>Process to Checkout</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLogin: false,
      showCoupon: false,
      couponCode: "",
      firstName: "",
      lastName: "",
      companyName: "",
      streetAddress: "",
      city: "",
      country: "",
      phone: "",
      email: "",
      errors: {},
      isLoading: false,
    };
  },
  methods: {
    toggleLogin() {
      this.showLogin = !this.showLogin;
    },
    toggleCoupon() {
      this.showCoupon = !this.showCoupon;
    },
    applyCoupon() {
      // Logic for applying coupon
      alert(`Coupon "${this.couponCode}" applied!`);
    },
    validateForm() {
      this.errors = {};
      if (!this.firstName) this.errors.firstName = "First Name is required.";
      if (!this.lastName) this.errors.lastName = "Last Name is required.";
      if (!this.streetAddress) this.errors.streetAddress = "Street Address is required.";
      if (!this.city) this.errors.city = "City is required.";
      if (!this.country) this.errors.country = "Country is required.";
      if (!this.phone.match(/^\d{10,15}$/)) this.errors.phone = "Enter a valid phone number.";
      if (!this.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) this.errors.email = "Enter a valid email address.";
      return Object.keys(this.errors).length === 0;
    },
    proceedToCheckout() {
      if (this.validateForm()) {
        this.isLoading = true;
        setTimeout(() => {
          this.$router.push("/payment");
          this.isLoading = false;
        }, 2000); // Simulate loading
      }
    },
  },
};
</script>

<style scoped>
.main-container {
  font-family: "Poppins";
}

.accordion-container button {
  border: none;
  background-color: transparent;
  font-size: 20px;
}

.accordion-container button:hover {
  color: #3577f0;
  transition: ease-in-out 0.3s;
}

.login-container,
.coupon-container {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 90%;
  background-color: #f6f7fb;
  border-radius: 10px;
  padding: 0 20px 0 20px;
  margin: 0px 0px 20px 0;
  font-family: "Poppins";
  font-size: 20px;
}

.login-container i,
.coupon-container i {
  font-size: 28px;
  color: #777777;
}

.login-container p,
.coupon-container p {
  color: #777777;
}

.form-container h2 {
  font-weight: 500;
  font-size: 26px;
}

.fill-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
}

.first-form {
  width: 90%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  font-family: "Poppins";
}

.first-form input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

input:focus {
  outline: none;
  border-color: #007BFF;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.input-container {
  width: 90%;
  position: relative;
}

label {
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  background: #fff;
  padding: 0 4px;
  font-size: 14px;
  color: #6c757d;
  transition: 0.3s ease;
  pointer-events: none;
}

.required {
  color: #d9534f;
}

.input-field {
  width: 100%;
  padding: 12px 12px;
  font-size: 16px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s ease;
}

.input-field:focus {
  border-color: #80bdff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

.input-field:focus+label,
.input-field:not(:placeholder-shown)+label {
  top: -8px;
  left: 8px;
  font-size: 12px;
  color: #495057;
}

.second-form,
.fourth-form,
.fifth-form,
.sixth-form,
.seventh-form,
.eighth-form,
.nineth-form {
  display: flex;
  justify-content: space-between;
  gap: 50px;
  font-family: "Poppins";
  margin-top: 20px;
}

.third-form {
  display: flex;
  justify-content: space-between;
  gap: 50px;
  font-family: "Poppins";
  margin-top: 20px;
}

.third-form .input-container {
  width: 100%;
}

.select-container .input-field {
  appearance: none;
  background-color: #fff;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%236c757d'%3E%3Cpath d='M7 10l5 5 5-5H7z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px 16px;
  cursor: pointer;
  padding: 12px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  width: 100%;
  font-size: 16px;
}

.select-container label {
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  background: #fff;
  padding: 0 4px;
  font-size: 14px;
  color: #6c757d;
  transition: 0.3s ease;
  pointer-events: none;
}

.select-container .input-field:focus {
  border-color: #80bdff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

.select-container .input-field:focus+label,
.select-container .input-field:not(:placeholder-shown)+label {
  top: -8px;
  left: 8px;
  font-size: 12px;
  color: #495057;
}

.required {
  color: #d9534f;
}

.check-box{
  display: flex;
  margin-top: 20px;
  gap: 20px;
  align-items: center;
}

.check-box input{
  width: 15px;
  height: 100%;
}

.checkout-button {
  margin-top: 20px;
  width: 94%;
  padding: 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  text-align: center;
}

.checkout-button:hover {
  background-color: #0056b3;
}

.error {
  border-color: #d9534f;
  box-shadow: 0 0 5px rgba(217, 83, 79, 0.5);
}

.error-message {
  color: #d9534f;
  font-size: 12px;
  margin-top: 4px;
}
</style>
