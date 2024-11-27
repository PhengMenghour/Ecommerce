<template>
  <div class="container-main">
    <h1></h1>
  </div>
  <div class="group-tag">
    <TagComponent />
  </div>
  <div class="container-category-head">
    <h1>Browse by Category</h1>
    <div class="swipe-button">
      <button><i class="ri-arrow-left-line"></i></button>
      <button><i class="ri-arrow-right-line"></i></button>
    </div>
  </div>
  <div class="category-group">
    <CategoryComponent v-for="category in categories" :key="category.id" :image="category.image"
      :title="category.title" />
  </div>
</template>

<script>
import CategoryComponent from "@/components/CategoryComponent.vue";
import TagComponent from "@/components/TagComponent.vue";

export default {
  components: {
    CategoryComponent,
    TagComponent,
  },

  data() {
    return {
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
    };
  },
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
  margin: 0px 300px 0px 300px;
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

.category-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.group-tag{
  margin-top: 10px;
  margin-left: 300px;
}
</style>
