import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ContactPage from '@/views/ContactPage.vue'
import ShopPage from '@/views/ShopPage.vue'
import Pages from '@/views/Pages.vue'
import SignInPage from '@/views/SignInPage.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
