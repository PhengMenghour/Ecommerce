import { createRouter, createWebHistory } from 'vue-router';
import CheckoutPage from '../views/CheckoutPage.vue'; // If needed
import CartPage from '@/views/CartPage.vue';


const routes = [
  { path: "/", 
    component: CartPage
  },
  { path: '/checkout-page',
     name: 'CheckoutPage',
     component: CheckoutPage
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;