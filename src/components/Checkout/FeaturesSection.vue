<template>
  <div class="features-section">
<div class="feature1" >
  <div class="feature">
      <i class="fas fa-lock"></i>
      <p>Fast and Secure</p>
    </div>
    <div class="feature">
      <i class="fas fa-money-bill"></i>
      <p>Money Back Guarantee</p>
    </div>
</div>
  <div class="feature2">
    <div class="feature">
      <i class="fas fa-clock"></i>
      <p>24 Hours Return Policy</p>
    </div>
    <div class="feature">
      <i class="fas fa-headset"></i>
      <p>Pro Quality Support</p>
    </div>
  </div>
    
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.features-section {
  display: flex;
  align-items: center;
  margin-top: 40px;
  justify-content: center;
  
  padding: 20px 30px 20px 10px;
}

.feature {
  text-align: center;
}
.feature1{
  margin-right: 30px;
}

.feature i {
  font-size: 2em;
  color: #007bff;
  margin-bottom: 10px;
}

.feature p {
  margin-top: 5px;
  font-weight: bold;
}
</style>