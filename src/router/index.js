import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsStore from '@/views/ProductsStore.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/shop',
      name: 'shop',
      component: ProductsStore,
    },
    {
      path: '/aut',
      name: 'aut',
      component: () => import('../views/Authentication.vue'),
    },
  ],
})

export default router
