// stores/cartStore.js
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    isCartOpen: false,
  }),
  actions: {
    toggleCart() {
      this.isCartOpen = !this.isCartOpen;
      console.log(this.isCartOpen);
    },
    closeCart() {
      this.isCartOpen = false;
    },
  },
});
