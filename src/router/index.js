import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsStore from '@/views/ProductsStore.vue'
import ProductPage from '@/views/ProductPage.vue'
import Cart from '@/views/Cart.vue'
import Login from '@/views/auth/LoginView.vue'
import ProfileView from '@/views/user/ProfileView.vue'
import FavoritesView from '@/views/user/FavoritesView.vue'
import SettingsView from '@/views/user/SettingsView.vue'
import AddressView from '@/views/user/AddressView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/shop',
      component: ProductsStore,
      meta: { type: 'all' },
    },
    {
      path: '/shop/:category',
      component: ProductsStore,
      meta: { type: 'category' },
      props: true,
    },
    { path: "/product/:id", component: ProductPage },
    {
      path: '/aut',
      component: Login,
    },
    {
      path: '/cart',
      component: Cart,
    },
    {
      path: '/user/profile',
      component: ProfileView,
    },
    {
      path: '/user/favorites',
      component: FavoritesView,
    },
    {
      path: '/user/settings',
      component: SettingsView,
    },
    {
      path: '/user/address',
      component: AddressView,
    },
  ],
})

export default router
