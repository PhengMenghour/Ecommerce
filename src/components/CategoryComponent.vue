<template>
    <div class="container-category">
        <button>
            <img :src=" image " alt="">
            <h1> {{ title }}</h1>
        </button>
    </div>
</template>
<script>
export default {
    props: {
        image: String,
        title: String,
    }
}
</script>z
<style scoped>
    .container-category{
        margin: 10px 25px 10px 25px;
        display: flex;
        flex-direction: row;
        width: auto;
    }

    .container-category button {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        border-radius: 10px;
        border: none;
        background-color: #FFFFFF;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        width: 180px;
        height: 225px;

        transition: transform .2s;
    }

    .container-category button:hover {
        transform: scale(1.05);
    }

    .container-category h1{
        font-family: "Poppins";
        font-weight: 200;
        margin-top: 30px;
    }
</style>