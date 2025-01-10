<template>
  <div class="signup-page">
    <div class="left-section">
      <img src="@/assets/images/signup.png" alt="Sign Up" />
    </div>
    <div class="right-section">
      <div class="header">
        <span>Already a member? </span>
        <button @click="goToSignIn" class="sign-in-btn">Sign in</button>
      </div>
      <h1>I'm New Here</h1>
      <p>Enter your detail below</p>
      <form @submit.prevent="handleSignUp">
        <div class="input-group">
          <fieldset>
            <legend>User name</legend>
            <input id="username" type="text" placeholder="johndoe" v-model="username" />
          </fieldset>
        </div>
        <div class="input-group">
          <fieldset>
            <legend>Email</legend>
            <input id="email" type="email" placeholder="customer@gmail.com" v-model="email" />
          </fieldset>
        </div>
        <div class="input-group">
          <fieldset>
            <legend>Password</legend>
            <input id="password" type="password" placeholder="*********" v-model="password" />
          </fieldset>
        </div>
        <button class="create-account-btn" type="submit">Create Account</button>
      </form>
    </div>
  </div>
</template>

<script>


import Swal from 'sweetalert2';
export default {
  name: "SignUp",
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    createAccount() {
      console.log("Account Created:", {
        username: this.username,
        email: this.email,
        password: this.password,
      });
    },
    goToSignIn() {
      this.$router.push('/signIn') // or path: '/signIn'
    },

    handleSignUp() {
      const users = JSON.parse(localStorage.getItem("users")) || [];
        const userExists = users.some((user) => user.email === this.email);
  
        if (userExists) {
          
          Swal.fire({
            icon: "info",
            title: "",
            text: "Email already registered. Please use a different email!",
            timer: 3000, // Automatically closes after 3 seconds
            showConfirmButton: false,
          });
          


        } else {
          users.push({
            username: this.username,
            email: this.email,
            password: this.password,
          });
          localStorage.setItem("users", JSON.stringify(users));
          

          Swal.fire({
            icon: "success",
            title: "Sign Up Successful!",
            text: "Sign Up successful! You can now sign in.",
            timer: 1000, // Automatically closes after 3 seconds
            showConfirmButton: false,
          });
          
            this.$router.push("/signin");
        }
    },


  },
};
</script>

<style scoped>
.signup-page {
  display: flex;
  width: 100%;
  height: 100%;
  font-family: "Poppins", sans-serif;
}

.left-section {
  width: 454px;
  height: 100%;
}

.left-section img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.right-section {
  flex: 1;
  padding-left: 140px;
  padding-top: 25px;
  padding-right: 45px;
  margin-bottom: auto;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.right-section h1{
  font-size: 28px;
}

.right-section p{
  font-size: 22px;
}

.header {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 0px;
  margin-top: 0px;
  margin-left: 10px;
  align-items: center;
}

.header span {
  font-size: 20px;
  color: #000000;
  margin-right: 25px;

}

.sign-in-btn {
  width: 150px;
  height: 50px;
  color: white;
  border: none;
  border-radius: 10px;
  background-color: #DE2A74;
  font-size: larger;
  font-weight: 500;
  cursor: pointer;
}

.sign-in-btn:hover {
  background-color: #b82c66;
}


.input-group {
  margin-bottom: 20px;
  width: 456px;
}

fieldset {
  border: 1px solid #838383;
  border-radius: 5px;
  padding: 0;
  position: relative;
  display: flex;
  align-items: center;
  height: 73px;

}

:placeholder-shown {
  font-size: 20px;
  margin-left: 8px;
  color: #00000080;
  margin-bottom: 15px;
}

legend {
  font-size: 20px;
  color: #00000079;
  padding: 0 10px;
  margin-left: 20px;
  margin-right: auto;
}

input {
  flex: 1;
  border: none;
  outline: none;
  padding: 24px 25px;
  margin-bottom: 18px;
  font-size: 24px;
  color: #000000;
  background: transparent;

}

input:focus {
  outline: none;
}

fieldset:focus-within {
  border-color: #007bff;
}

.create-account-btn {
  /* width: 189px;
  height: 67px;
  background-color: #2975FD;
  color: white;
  font-size: 26px;
  font-weight: normal;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 0px;
  margin-top: 62px;
  display: block;
  margin-right: 75px; */

  width: 150px;
  height: 50px;
  color: white;
  border: none;
  border-radius: 10px;
  background-color: #2975FD;
  font-size: larger;
  font-weight: 500;
  cursor: pointer;
  margin-right: 60px;
  margin-top: 30px;
}

.create-account-btn:hover {
  background-color: #0056b3;
}

</style>