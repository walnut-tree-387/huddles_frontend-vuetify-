import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product-cards',
      name: 'Product Cards',
      component: () => import('../views/ProductCardsView.vue')
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../views/ProfileView.vue')
    }
  ]
})

export default router
