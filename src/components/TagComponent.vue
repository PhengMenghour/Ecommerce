<template>
    <div class="tag-container">
        <div class="container-icon">
            <i :class="iconClass"></i>
        </div>
        <div class="container-title">
            <h1>{{ tag }}</h1>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        tag: String,
        iconClass: {
            type: String,
            default: "ri-price-tag-3-line" // Set a default icon class
        }
    }
}
</script>

<style scoped>
.tag-container {
    display: flex;
    align-items: center;
    gap: 10px;
}

.container-icon {
    width: 30px;
    height: 30px;
    background-color: #FF497C;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.tag-container i {
    color: white;
    font-size: 20px;
}

.tag-container .container-title h1 {
    font-family: "Poppins";
    font-size: 16px;
    font-weight: 500;
}
</style>
