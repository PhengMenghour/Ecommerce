<template>
    <div class="comment-card">
      <div class="profile">
        <img :src="imageSrc" alt="User profile picture" class="profile-img" />
        <div class="profile-info">
          <h3 class="name">{{ name }}</h3>
          <div class="stars">
            <span v-for="star in rating" :key="star" class="star">★</span>
          </div>
        </div>
      </div>
      <p class="comment">{{ comment }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      imageSrc: String,
      name: String,
      rating: Number,
      comment: String
    },
  };
  </script>
  
  <style scoped>
  .comment-card {
    display: flex;
    flex-direction: row;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    /* max-width: 600px; */
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    gap: 10px;
    font-family: "Poppins";
  }
  
  .profile {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    flex: 1;

  }
  
  .profile-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 12px;
  }
  
  .profile-info {
    display: flex;
    flex-direction: column;
  }
  
  .name {
    font-size: 16px;
    font-weight: 600;
    margin: 0;
    color: #333;
  }
  
  .stars {
    color: #ffd700;
    font-size: 14px;
    margin-top: 4px;
  }
  
  .star {
    margin-right: 2px;
  }
  
  .comment {
    font-size: 14px;
    color: #555;
    line-height: 1.5;
    margin: 0;
    flex: 4;
  }
  </style>
  