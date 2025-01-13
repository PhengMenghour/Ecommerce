<template>
  <div class="coupon-section">
    <label for="coupon-input" class="sr-only">Coupon Code</label>
    <input
      id="coupon-input"
      type="text"
      v-model="couponCode"
      placeholder="Enter Coupon Code"
      @keyup.enter="applyCoupon"
    />
    <button
      :disabled="!couponCode.trim()"
      @click="applyCoupon"
    >
      <slot>Apply</slot>
    </button>
    <p v-if="errorMessage" class="error-message" aria-live="polite">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      couponCode: '',
      errorMessage: '', // Error message to display
    };
  },
  methods: {
    applyCoupon() {
      const trimmedCode = this.couponCode.trim();
      if (trimmedCode) {
        // Reset error message
        this.errorMessage = '';
        // Emit the event
        this.$emit('apply-coupon', trimmedCode);
        // Show an alert
        alert(`Coupon "${trimmedCode}" applied successfully!`);
        // Clear the input field
        this.couponCode = '';
      } else {
        this.errorMessage = 'Please enter a valid coupon code.';
      }
    },
  },
};
</script>

<style scoped>
.coupon-section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background-color: #0056b3;
}

.error-message {
  color: red;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}

/* Screen-reader only class for accessibility */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
</style>
