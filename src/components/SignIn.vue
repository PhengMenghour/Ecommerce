<template>
  <div class="signup-page">
    <div class="left-section">
      <img src="@/assets/images/signin.png" alt="Sign In" />
    </div>
    <div class="right-section">
      <div class="header">
        <span>Not a member? </span>
        <button @click="goToSignUp" class="sign-in-btn">Sign Up Now</button>
      </div>
      <h1>Sign in to SmartSphere</h1>
      <p>Enter your detail below</p><br><br>
      <form @submit.prevent="createAccount">
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

      </form>

      <div class="buttom">
        <button class="create-account-btn" type="submit">Sign in</button>
        <span><a href="">Forget Password?</a></span>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "SignIn",
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
    goToSignUp() {
      this.$router.push('/signUp') // or path: '/signup'
    }
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
}

.create-account-btn:hover {
  background-color: #0056b3;
}

.buttom {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 0px;
  margin-top: 30px;
  margin-left: 10px;
  align-items: baseline;

}

.buttom span {

  font-size: 20px;
  color: #2975FD;
  margin-right: 25px;


}

.buttom span a {
  text-decoration: none;
}
</style>