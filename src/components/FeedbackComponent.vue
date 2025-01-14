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
            text: "The product quality exceeded my expectations, and the fast shipping was a pleasant surprise! I’ve never felt more confident in my purchase decisions. The customer service team was quick to assist me, making the whole experience seamless. I’ll definitely be back for more products soon!",
            image: "/src/assets/images/pf1.jpg", 
            role: "Head of Idea",
            name: "Mr. Chill Guy",
          },
          {
            text: "Browsing through the categories was straightforward, and the detailed product descriptions helped me choose exactly what I needed. My new gadget works perfectly, and the packaging was secure and eco-friendly. It’s refreshing to shop on a website that genuinely values its customers.",
            image: "/src/assets/images/pf2.jpg", 
            role: "Advisor",
            name: "Ms. Capibara Nonchalant ",
          },
          {
            text: "I was skeptical at first, but the reviews convinced me to give it a shot—and I’m so glad I did! The item arrived earlier than expected and was even better in person. I appreciate the little touches, like the thank-you note in the box. I’ll be recommending this site to all my friends!",
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
  