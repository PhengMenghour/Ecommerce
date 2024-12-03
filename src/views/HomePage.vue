<template>
  <div class="container-main">
    <h1></h1>
    <CarouselComponent/>
  </div>
  <div class="group-tag">
    <TagComponent />
  </div>
  <div class="container-category-head">
    <h1>Browse by Category</h1>
    <div class="swipe-button">
      <button @click="prevCategory" :disabled="currentIndex === 0"><i class="ri-arrow-left-line"></i></button>
      <button @click="nextCategory" :disabled="currentIndex >= categories.length - visibleCount"><i
          class="ri-arrow-right-line"></i></button>
    </div>
  </div>
  <div class="category-group">
    <div class="category-wrapper" v-for="(category, index) in visibleCategories" :key="category.id">
      <CategoryComponent :image="category.image" :title="category.title" />
    </div>
  </div>
  <div class="countdown-container">
    <div class="left-section">
      <TagComponent />
      <div class="text-container">
        <h1>Enhance Your</h1>
        <h1>Music</h1>
        <h1>Experience</h1>
      </div>
      <div class="countdown-time-container">
        <div class="countdown-time">
          <p class="time">{{ days }}</p>
          <p class="date">Day</p>
        </div>
        <div class="countdown-time">
          <p class="time">{{ hours}}</p>
          <p class="date">Hrs</p>
        </div>
        <div class="countdown-time">
          <p class="time">{{ minutes}}</p>
          <p class="date">Min</p>
        </div>
        <div class="countdown-time">
          <p class="time">{{ seconds}}</p>
          <p class="date">Sec</p>
        </div>
      </div>

      <button>Check it Out!</button>



    </div>
    <div class="right-section">
      <img src="/src/assets/images/headphonePic.png" alt="">
    </div>
  </div>


  <!-- For later use -->
  <!-- <productCards/>
  <Itemss/> -->
</template>

<script>
import CarouselComponent from "@/components/CarouselComponent.vue";
import CategoryComponent from "@/components/CategoryComponent.vue";
import Itemss from "@/components/Itemss.vue";
import productCards from "@/components/productCard.vue";
import TagComponent from "@/components/TagComponent.vue";


export default {
  components: {
    CategoryComponent,
    TagComponent,
    productCards,
    Itemss,
    CarouselComponent
  },



  computed: {
    visibleCategories() {
      return this.categories.slice(this.currentIndex, this.currentIndex + this.visibleCount);
    },


  },

  methods: {
    nextCategory() {
      if (this.currentIndex < this.categories.length - this.visibleCount) {
        this.currentIndex++;
      }
    },
    prevCategory() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },

    // Countdown
    startCountdown(){
      this.updateTime();
      this.timer = setInterval(this.updateTime, 1000);
    },

    updateTime(){
      const now = new Date().getTime();
      const distance = this.targetDate - now;

      if (distance < 0) {
        clearInterval(this.timer);
        this.days = this.hour = this.minutes = this.seconds = 0;
        return;
      }

      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }


  },

  data() {
    return {
      currentIndex: 0,
      visibleCount: 5, // Number of categories to display

      // Render categories 
      categories: [
        {
          id: 1,
          image: "./src/assets/images/phones.png",
          title: "Phones",
        },
        {
          id: 2,
          image: "/src/assets/images/computers.png",
          title: "Computers",
        },
        {
          id: 3,
          image: "/src/assets/images/accessories.png",
          title: "Accessories",
        },
        {
          id: 4,
          image: "/src/assets/images/laptops.png",
          title: "Laptops",
        },
        {
          id: 5,
          image: "/src/assets/images/monitors.png",
          title: "Monitors",
        },
        {
          id: 6,
          image: "/src/assets/images/networking.png",
          title: "Network",
        },
        {
          id: 7,
          image: "/src/assets/images/headphones.png",
          title: "Headphone",
        },
      ],

      // For countdown time
      targetDate: new Date("2024-12-31T23:59:59").getTime(),
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      timer: null,
    };
  },

  mounted(){
    this.startCountdown();
  },

  beforeUnmount(){
    clearInterval(this.timer);
  }  

};
</script>

<style>
.container-main {
  background-color: #f9f3f0;
  height: 800px;
  margin-top: -90px;
}

.container-category-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 200px 0px 200px;
  font-family: "Poppins", sans-serif;
}

.swipe-button {
  display: flex;
  gap: 10px;
  border-radius: 10px;
}

.swipe-button button {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #e3e3e3;
  color: #8b8b8b;
  background-color: #f6f7fb;
}

.swipe-button button:hover {
  background-color: #e1e6f1;
}

.category-group {
  display: flex;
  overflow: hidden;
  justify-content: center;
  gap: 10px;
  transition: transform 0.5s ease-in-out;
}

.category-wrapper {
  min-width: 180px;
  flex: 0 0 auto;
}

.category-wrapper:hover {
  opacity: 1;
}

.group-tag {
  margin-top: 10px;
  margin-left: 200px;
}

.countdown-container {
  display: flex;
  margin: 10% 2.5% 2.5% 2.5%;
  background-color: #f6f7fb;
  width: auto;
  height: 650px;
  border-radius: 10px;
  padding: 10px
}

.countdown-container .left-section {
  display: flex;
  flex-direction: column;
  padding-left: 20px;
}

.countdown-container .left-section .text-container h1{
  font-family: "Lato";
  font-size: 4rem;
  font-weight: 800;
  margin: 5% 0 5% 0;
}

.countdown-container .left-section .countdown-time-container{
  display: flex;
  margin: 5% 0 5% 0;
}

.countdown-container .left-section .countdown-time-container .countdown-time{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 75px;
  border: 1px solid #d4d4d4;
  border-radius: 100px;
  margin: 10px 10px 10px 10px;
  background-color: #ffffff;
  font-family: "Poppins";
}

.countdown-container .left-section .countdown-time-container .countdown-time p{
  margin-top: 10px;
  margin-bottom: 10px;
  /* font-size: 1rem; */
}

.countdown-container .left-section .time {
  font-weight: 600;
  font-size: 1.1rem;

}

.countdown-container .left-section .date{
  font-weight: 300;
  color: #747474;
  font-size: 0.9rem;
}

.countdown-container button {
  background-color: #3577f0;
  border: none;
  width: 12.5rem;
  height: 3.5rem;
  color: #ffffff;
  font-family: "Poppins";
  font-weight: bold;
  border-radius: 10px;
  font-size: 1rem;
}

.countdown-container button:hover {
  background-color: #103e95;
  transition: ease-in-out 0.2s;
}

.countdown-container .right-section {
  position: relative;
}

.countdown-container .right-section img {
  position: absolute;
  height: 550px;
  width: 500px;
  left: 15rem;
  top: -75px;
}


</style>
