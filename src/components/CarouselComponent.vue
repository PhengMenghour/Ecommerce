<template>
    <div class="carousel-container">
        <div class="carousel-content">
            <!-- Left section -->

            <div class="carousel-text">
                <TagComponent tag="Hot Deal In This Week" icon-class="ri-fire-fill"/>
                <h2>{{ textContent[currentIndex] }}</h2>

                <button class="btn-shopNow"><i class="ri-shopping-cart-line"></i>Shop Now</button>

            </div>

            <!-- Right section -->
            <div class="carousel-image-wrapper">
                <div class="carousel-wrapper" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                    <div v-for="(image, index) in images" :key="index" class="carousel-item">
                        <img :src="image" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TagComponent from './TagComponent.vue';

export default {
    components: {
        TagComponent
    },

    data() {
        return {
            images: [
                "/src/assets/images/iphone16pm.png",
                "/src/assets/images/iphone16.png",
                "/src/assets/images/s24ultra.png"
            ],
            textContent: [
                "IPhone 16 Pro Max",
                "IPhone 16 Series",
                "S24 Ultra Series"
            ],
            currentIndex: 0,
            autoSwipeInterval: null,
        }
    },
    methods: {
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        },
        prevSlide() {
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        },
        startAutoSwipe() {
            this.stopAutoSwipe();
            this.autoSwipeInterval = setInterval(this.nextSlide, 3000);
        },
        stopAutoSwipe() {
            clearInterval(this.autoSwipeInterval);
        }
    },
    mounted() {
        this.startAutoSwipe();
    },
    beforeDestroy() {
        this.stopAutoSwipe();
    },
}
</script>
<style scoped>
.carousel-container {
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 900px;
    margin: auto;
    font-family: "Poppins";
}

.carousel-content {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 20px;
    margin-top: 15%;
}

.carousel-text {
    flex: 1;
    padding: 20px;
}

.carousel-text h2 {
    font-size: 4rem;
    margin-bottom: 10px;
    margin-top: 0;
}

.carousel-text p {
    font-size: 16px;
    color: #555;
}

.carousel-image-wrapper {
    flex: 1;
    overflow: hidden;
    position: relative;
}

.carousel-wrapper {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.carousel-item {
    flex: 0 0 100%;
}

.carousel-item img {
    width: 100%;
    height: auto;
    border-radius: 10px;
}

.nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    color: white;
    padding: 10px;
    cursor: pointer;
    z-index: 10;
}

.prev {
    left: 10px;
}

.next {
    right: 10px;
}

.btn-shopNow {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #ffffff;
    border: 1px solid #D8D8D8;
    width: 200px;
    height: 50px;
    border-radius: 10px;
    font-size: 20px;
}

.btn-shopNow:hover {
    background-color: #cacaca;
    color: #ffffff;
    /* scale: 1.1; */
    transition: ease-in-out 0.2s;
}
</style>