import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    isCartOpen: false,
    cart: [],
  }),
  getters: {
    cartItems: (state) => state.cart,
    cartTotal: (state) => state.cart.reduce((total, item) => total + item.quantity * item.price, 0),
    cartCount: (state) => state.cart.reduce((count, item) => count + item.quantity, 0),
  },
  actions: {
    toggleCart() {
      this.isCartOpen = !this.isCartOpen;
      console.log('وضعیت سبد خرید:', this.isCartOpen);
    },
    closeCart() {
      this.isCartOpen = false;
    },
    addToCart(product, quantity = 1) {
      const existingProduct = this.cart.find((item) => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += quantity; // افزایش تعداد محصول
      } else {
        this.cart.push({ ...product, quantity });
      }
      console.log('محصولات در سبد خرید:', this.cart);
    },
    removeFromCart(productId) {
      this.cart = this.cart.filter((item) => item.id !== productId);
    },
    clearCart() {
      this.cart = [];
    },
    // **افزایش تعداد محصول در سبد خرید**
    increaseQuantity(productId) {
      const product = this.cart.find((item) => item.id === productId);
      if (product) {
        product.quantity += 1;
      }
    },
    // **کاهش تعداد محصول در سبد خرید**
    decreaseQuantity(productId) {
      const product = this.cart.find((item) => item.id === productId);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      } else {
        this.removeFromCart(productId); // اگر تعداد صفر شد، از سبد حذف شود
      }
    },
  },
});
