<template>
  <div class="comment-card">
    <div class="profile">
      <img :src="imageSrc" alt="User profile picture" class="profile-img" />
      <div class="profile-info">
        <h3 class="name">{{ comment.name }}</h3>
        <div class="stars">
          <!-- Loop through 5 stars and conditionally add the filled class -->
          <span
            v-for="n in 5"
            :key="n"
            :class="['star', { 'filled': n <= comment.rating }]"
          >★</span>
        </div>
      </div>
    </div>
    <p class="comment">{{ comment.comment }}</p>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
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
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  gap: 10px;
  font-family: "Poppins";
  margin-bottom: 16px; /* Add space between comments */
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
  color: #ffd700; /* Gold color for filled stars */
  font-size: 14px;
  margin-top: 4px;
}

.star {
  margin-right: 2px;
  color: #ccc; /* Default color for unfilled stars */
}

.star.filled {
  color: #ffd700; /* Gold color for filled stars */
}

.comment {
  font-size: 14px;
  color: #555;
  line-height: 1.5;
  margin: 0;
  flex: 4;
}
</style>
