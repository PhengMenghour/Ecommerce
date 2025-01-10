<template>
  <div class="main-container">
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
  </div>
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
.main-container{
  padding: 20px;
}

.checkout-container {
  display: flex;
}

.checkout-form{
  flex: 1;

}
.checkout-summary {
  flex: 1;
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
