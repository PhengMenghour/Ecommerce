<template lang="">
    <div class="container">
        <img src="/src/assets/images/icons8-tick.gif" alt="Computer man">
        <h2>Payment Successful!</h2>
        <p>Your payment has been completed</p>
        <button @click="$router.push('/')">Finish</button>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .container {
        font-family: "Poppins";
        height: 80vh; /* Full viewport height */
        width: 100%; /* Full width */
        display: flex;
        flex-direction: column;
        justify-content: center; /* Center vertically */
        align-items: center; /* Center horizontally */
        text-align: center; /* Center text if needed */
    }

    .container h2 {
        font-size: 40px;
        font-weight: 500;
    }

    .container p{
        color: #767676;
    }

    .container button {
        background-color: blueviolet;
        color: #ffffff;
        border: none;
        width: 15rem;
        height: 40px;
        border-radius: 10px;
    }

    .container button:hover{
        background-color: #be80da;
        transition: ease-in-out 0.3s;
    }
</style>