import { createRouter, createWebHistory } from 'vue-router';
import CheckoutPage from '../views/CheckoutPage.vue'; // If needed
import CartPage from '@/views/CartPage.vue';

import PrivacyAndPolicyPage from '@/views/PrivacyAndPolicyPage.vue'
import ProductDetail from '@/views/ProductDetail.vue'

import SignIn from '@/components/SignIn.vue'
import SignUp from '@/components/SignUp.vue'

const routes = [
  { path: "/", 
    component: CartPage
  },
  { path: '/checkout-page',
     name: 'CheckoutPage',
     component: CheckoutPage
    },
  {
    path: '/pages/privacyAndPolicy',
    name: 'privacyAndPolicy',
    component: PrivacyAndPolicyPage
  },
  {
    path: '/productDetail',
    name: 'productDetail',
    component: ProductDetail,
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;