<template>
    <div>
      <h2>Billing Details</h2>
      <form>
        <label for="companyName">Company Name</label>
        <input type="text" id="companyName" v-model="billingDetails.companyName">
        <!-- Repeat for other fields -->
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        billingDetails: {
          companyName: '',
          fullName: '',
          country: '',
          address: '',
          city: '',
          email: ''
        }
      };
    }
  };
  </script>
  