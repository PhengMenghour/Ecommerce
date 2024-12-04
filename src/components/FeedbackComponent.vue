<template>
    <div class="feedback-component">
      <div class="feedback-container">
        <div class="feedback-card" v-for="(feedback, index) in feedbacks" :key="index">
          <p class="feedback-text">{{ feedback.text }}</p>
          <div class="feedback-author">
            <img :src="feedback.image" alt="User Image" class="author-image" />
            <div>
              <p class="author-role">{{ feedback.role }}</p>
              <p class="author-name">{{ feedback.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "FeedbackComponent",
    data() {
      return {
        feedbacks: [
          {
            text: "She tilted her head back and let whip cream stream into her mouth while taking a bath. Combines are no longer just for farms. I honestly find her about as intimidating as a basket of kittens. He barked orders at his daughters but they just stared back with amusement. Charles ate the french fries knowing they would be his last meal.",
            image: "/src/assets/images/pf1.jpg", 
            role: "Head of Idea",
            name: "Mr. Chill Guy",
          },
          {
            text: "She tilted her head back and let whip cream stream into her mouth while taking a bath. Combines are no longer just for farms. I honestly find her about as intimidating as a basket of kittens. He barked orders at his daughters but they just stared back with amusement. Charles ate the french fries knowing they would be his last meal.",
            image: "/src/assets/images/pf2.jpg", 
            role: "Advisor",
            name: "Ms. Capibara Nonchalant ",
          },
          {
            text: "She tilted her head back and let whip cream stream into her mouth while taking a bath. Combines are no longer just for farms. I honestly find her about as intimidating as a basket of kittens. He barked orders at his daughters but they just stared back with amusement. Charles ate the french fries knowing they would be his last meal.",
            image: "/src/assets/images/pf3.jpg", 
            role: "Therapist",
            name: "Ms. Otter Kawaii",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .feedback-component {
    text-align: justify;
    font-family:peppium, arial;
  }
  
  .title {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
  }
  
  .feedback-container {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  
  .feedback-card {
    width: 300px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    margin: 13px;
  }
  
  .feedback-text {
    font-size: 14px;
    line-height: 1.6;
    color: #555;
    margin-bottom: 15px;
  }
  
  .feedback-author {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .author-image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    border: #f3ccc6, solid;
  }

  /* .author-image:hover{
    transform: scale(1.05);
    transition: transform .2s;
  } */
  
  .author-role {
    font-size: 12px;
    color: #999;
  }
  
  .author-name {
    font-size: 14px;
    color: #333;
  }
  </style>
  