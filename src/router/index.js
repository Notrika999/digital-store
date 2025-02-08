import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsStore from '@/views/ProductsStore.vue'
import ProductPage from '@/views/ProductPage.vue'

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
      meta: { type: 'all' },
    },
    {
      path: '/shop/:category',
      name: 'shopCategory',
      component: ProductsStore,
      meta: { type: 'category' },
      props: true,
    },
    { path: "/product/:id", component: ProductPage },
    {
      path: '/aut',
      name: 'aut',
      component: () => import('../views/Authentication.vue'),
    },
  ],
})

export default router
