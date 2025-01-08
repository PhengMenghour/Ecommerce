import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ContactPage from '@/views/ContactPage.vue'
import ShopPage from '@/views/ShopPage.vue'
import SignInPage from '@/views/SignInPage.vue'
import PrivacyAndPolicyPage from '@/views/PrivacyAndPolicyPage.vue'
import CartPage from '@/views/CartPage.vue'
import CheckoutPage from '@/views/CheckoutPage.vue'
import SignUpPage from '@/views/SignUpPage.vue'
import ProductDetail from '@/views/ProductDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage,
  },
  {
    path: '/shop',
    name: 'shop',
    component: ShopPage,
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: SignInPage,
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: SignUpPage,
  },
  {
    path: '/pages/privacyAndPolicy',
    name: 'privacyAndPolicy',
    component: PrivacyAndPolicyPage,
  },
  {
    path: '/pages/cart',
    name: 'cart',
    component: CartPage,
  },
  {
    path: '/pages/checkout',
    name: 'checkout',
    component: CheckoutPage,
  },
  {
    path: '/productDetail/:productId',
    name: 'productDetail',
    component: ProductDetail
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router