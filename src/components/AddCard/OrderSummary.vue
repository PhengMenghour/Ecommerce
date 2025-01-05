<template>
  <div class="container">
    <div class="order-summary">
      <h3>Order Summary</h3>
      <div class="subtotal-container">
        <p class="left-side">Subtotal: </p>
        <p class="right-side">${{ subtotal.toFixed(2) }}</p>
      </div>
      <hr>
      <div class="shipping-container">
        <p class="left-side">Shipping</p>
        <p class="right-side">Free</p>
      </div>
      <hr>
      <div class="tax-container">
        <p class="left-side">Tax</p>
        <p class="right-side">${{ tax }}</p>
      </div>
      <hr>
      <div class="total-container">
        <h4 class="left-side">Total</h4>
        <h4 class="right-side">${{ total }}</h4>
        
      </div>
      <hr>
      <button class="checkout-btn">Proceed to Checkout</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["subtotal", "tax", "total"],
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: end;
}

.order-summary {
  display: flex;
  flex-direction: column;
  justify-content: end;
  background: #f9f3f0;
  padding: 20px;
  margin-top: 20px;
  width: 500px;
  /* height: 500px; */
  border-radius: 15px;
}

.order-summary h3{
  font-size: 26px;
}

.order-summary p{
  font-size: 20px;
}

.subtotal-container, .shipping-container, .tax-container, .total-container{
  display: flex;
}

.left-side{
  flex: 1;
}

.right-side{
  flex: 1;
}

.checkout-btn {
  background: blue;
  height: 50px;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  margin-top: 10px;
}
</style>