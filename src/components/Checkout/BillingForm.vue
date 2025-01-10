<template>
  <div class="main-container">
    <div class="accordion-container">

      <div class="login-container">
        <i class="ri-user-fill"></i>
        <p>Returning Customer?</p>
        <button>Click here to login <i class="ri-arrow-down-s-line"></i></button>

      </div>

      <div class="coupon-container">
        <i class="ri-pencil-line"></i>
        <p>Have a coupon?</p>
        <button>Click here to enter your code <i class="ri-arrow-down-s-line"></i></button>
      </div>
    </div>

    <div class="form-container">
      <h2>Billing details</h2>
      <div class="name-form-container">
        <form action="">

          <div class="first-form">
            <div class="input-container">
              <input type="text" id="name" class="input-field" placeholder=" " required>
              <label for="name">First Name <span class="required">*</span></label>
            </div>
            <div class="input-container">
              <input type="text" id="name" class="input-field" placeholder=" " required>
              <label for="name">Last Name <span class="required">*</span></label>
            </div>
          </div>

          <div class="second-form">
            <div class="input-container">
              <input type="text" id="company-name" class="input-field" placeholder=" ">
              <label for="company-name">Company Name</label>
            </div>

          </div>

          <div class="third-form">

          </div>

          <div class="fourth-form">
            <div class="input-container">
              <input type="text" id="company-name" class="input-field" placeholder=" ">
              <label for="company-name">Street Address <span class="required">*</span></label>
            </div>
          </div>

          <div class="fifth-form">
            <div class="input-container">
              <input type="text" id="company-name" class="input-field" placeholder=" ">
              <label for="company-name">Apartment, Suite, Unit, Etc. (Optional)</label>
            </div>
          </div>

          <div class="sixth-form">
            <div class="input-container">
              <input type="text" id="company-name" class="input-field" placeholder=" ">
              <label for="company-name">Town/City <span class="required">*</span></label>
            </div>
          </div>

          <div class="seventh-form">
            <div class="input-container">
              <input type="text" id="company-name" class="input-field" placeholder=" ">
              <label for="company-name">Country</label>
            </div>
          </div>

          <div class="eighth-form">
            <div class="input-container">
              <input type="text" id="company-name" class="input-field" placeholder=" ">
              <label for="company-name">Phone <span class="required">*</span></label>
            </div>
          </div>

          <div class="nineth-form">
            <div class="input-container">
              <input type="text" id="company-name" class="input-field" placeholder=" ">
              <label for="company-name">Email Address <span class="required">*</span></label>
            </div>
          </div>
        </form>

        <div class="check-box">
          <input type="checkbox">
          <p>Create an Account</p>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {};
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
.fifth-form,
.sixth-form,
.seventh-form,
.eighth-form,
.nineth-form {
  display: flex;
  justify-content: space-between;
  gap: 50px;
  /* Same as first-form */
  font-family: "Poppins";
  margin-top: 20px;
}


.third-form {
  display: flex;
  justify-content: space-between;
  gap: 50px;
  /* Maintain consistency with other forms */
  font-family: "Poppins";
  margin-top: 20px;
}

.third-form .input-container {
  width: 100%;
  /* Ensures it takes the full width */
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
  /* Match padding with other input fields */
  border: 1px solid #ced4da;
  border-radius: 4px;
  width: 100%;
  /* Full width */
  font-size: 16px;
  /* Match font size with other inputs */
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

.second-form input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.select-container {
  position: relative;
}

.select-container .input-field {
  appearance: none;
  background-color: #fff;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%236c757d'%3E%3Cpath d='M7 10l5 5 5-5H7z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px 16px;
  cursor: pointer;
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
</style>