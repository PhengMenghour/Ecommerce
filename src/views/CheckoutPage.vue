<template>
  <main>
    <div class="checkout-container">
      <div class="checkout-form">
        <BillingForm aria-labelledby="billing-form" />
      </div>
      <div class="checkout-summary">
        <OrderSummary aria-labelledby="order-summary" />
      </div>
    </div>
    
    <div class="features-section-container">
      <Suspense>
        <template #default>
          <FeaturesSection aria-labelledby="features-section" />
        </template>
        <template #fallback>
          <div class="loading-spinner">Loading...</div>
        </template>
      </Suspense>
    </div>
    <FooterComponent/>
  </main>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import OrderSummary from '@/components/Checkout/OrderSummary.vue';
import BillingForm from '@/components/Checkout/BillingForm.vue';
import FooterComponent from '@/components/FooterComponent.vue';

const FeaturesSection = defineAsyncComponent(() => import('@/components/Checkout/FeaturesSection.vue'));

export default {
  components: {
    BillingForm,
    OrderSummary,
    FeaturesSection,
    FooterComponent,
  },
};
</script>

<style scoped>
.checkout-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 40px;
}

.checkout-form{
  background: var(--card-bg, #ffffff); /* Example of a CSS variable */
  padding: 20px;
  /* border-radius: var(--border-radius, 8px);
  box-shadow: var(--box-shadow, 0 2px 4px rgba(0, 0, 0, 0.1)); */
}
.checkout-summary {
  background: var(--card-bg, #f9f3f0); /* Example of a CSS variable */
  padding: 20px;
  border-radius: var(--border-radius, 8px);
  box-shadow: var(--box-shadow, 0 2px 4px rgba(0, 0, 0, 0.1));
}

.features-section-container {
  margin-top: 40px;
  padding: 20px;

  border-radius: 8px;
}

.loading-spinner {
  text-align: center;
  font-size: 18px;
  color: #888;
}

@media (max-width: 768px) {
  .checkout-container {
    grid-template-columns: 1fr;
  }

  .checkout-form,
  .checkout-summary {
    padding: 15px;
  }

  .features-section-container {
    margin-top: 30px;
    padding: 15px;
  }
}
</style>
