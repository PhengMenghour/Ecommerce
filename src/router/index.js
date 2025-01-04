import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ContactPage from '@/views/ContactPage.vue'
import ShopPage from '@/views/ShopPage.vue'
import Pages from '@/views/Pages.vue'
import SignInPage from '@/views/SignInPage.vue'
import PrivacyAndPolicyPage from '@/views/PrivacyAndPolicyPage.vue'
import ProductDetail from '@/views/ProductDetail.vue'

import SignIn from '@/components/SignIn.vue'
import SignUp from '@/components/SignUp.vue'

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
    path: '/pages',
    name: 'pages',
    component: Pages,
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: SignInPage,
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
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

