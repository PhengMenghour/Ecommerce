<template>
  <div class="billing-form">
    <h3>Billing Details</h3>
    <form>
      <div class="form-group">
        <label>Company Name</label>
        <input type="text" placeholder="Company Name" />
      </div>
      <div class="form-group">
        <label>Name</label>
        <input type="text" placeholder="Name" />
      </div>
      <div class="form-group">
        <label>Country/Region</label>
        <input type="text" placeholder="Country/Region" />
      </div>
      <div class="form-group">
        <label>Street Address</label>
        <input type="text" placeholder="Street Address" />
      </div>
      <div class="form-group">
        <label>City</label>
        <input type="text" placeholder="City" />
      </div>
      <div class="form-group">
        <label>State</label>
        <input type="text" placeholder="State" />
      </div>
      <div class="form-group">
        <label>Email Address</label>
        <input type="email" placeholder="Email Address" />
      </div>
      <div class="form-group1">
        <input type="checkbox"/>
        <label for="create-account">Create an account</label>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.billing-form{
  font-family: "Poppins";
}

.billing-form h3 {
  margin-bottom: 20px;
}

.form-group {
  /* display: flex;
  flex-direction: row;
  align-items: left; */
  margin-bottom: 15px;
}
.form-group1{
  display: flex;
  /* justify-content: start; */
  /* width: 70%; */
  align-items: center;
  
  padding-left: 10px;
  margin-bottom: 15px;

}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>