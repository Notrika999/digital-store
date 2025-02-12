<script setup>
import { computed } from 'vue'
import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore()

const cartItems = computed(() => cartStore.cartItems)
const cartTotal = computed(() => cartStore.cartTotal)

const increase = (product) => {
  cartStore.increaseQuantity(product);
};

const decrease = (product) => {
  cartStore.decreaseQuantity(product);
};

// اکشن‌ها
const removeFromCart = (id) => {
  cartStore.removeFromCart(id)
}

// const clearCart = () => {
//   cartStore.clearCart()
// }

const closeCart = () => {
  cartStore.closeCart()
}
</script>

<template>
  <!-- بک‌دراپ -->
  <div
    v-if="cartStore.isCartOpen"
    class="fixed inset-0 bg-black bg-opacity-50 z-40"
    @click="closeCart"
  ></div>

  <div
    v-if="cartStore.isCartOpen"
    class="fixed left-0 top-0 w-72 h-full bg-white z-50 shadow-lg transform transition-transform duration-300"
  >
    <div class="p-4">
      <h2 class="text-lg font-bold mb-3">سبد خرید</h2>
      <ul>
        <div v-for="item in cartItems" :key="item.id" class="flex flex-col mb-10">
          <div class="flex justify-between">
            <span class="font-bold text-[#001] text-lg">{{ item.title }}</span>


          </div>
          <div class="flex items-center space-x-3 my-4">
            <span class="text-sm font-bold inline-block ml-8">تعداد</span>

            <button
              @click="decrease(item.id)"
              class="text-lg font-bold text-red-700"
            >
              -
            </button>
            <span class="text-sm pr-2 font-semibold">{{ item.quantity }}</span>
            <button
              @click="increase(item.id)"
              class="text-lg font-bold text-blue-700"
            >
              +
            </button>
          </div>
          <div class="flex justify-between">
            <span class="font-bold text-[#00f]">قیمت {{ item.price * item.quantity }} تومان</span>
            <button
              @click="removeFromCart(item.id)"
              class="bg-red-500 text-white text-sm px-2 py-1 rounded-md hover:bg-red-600"
            >
              حذف
            </button>
          </div>
        </div>
      </ul>
      <p>جمع کل: {{ cartTotal }} تومان</p>
      <div class="mt-4 flex justify-between items-center">
        <button @click="closeCart" class="text-red-500">بستن</button>
        <RouterLink
          to="/cart"
          @click="closeCart"
          class="px-3 text-white bg-blue-600 hover:bg-blue-700 py-2 rounded-md"
        >
           سبد خرید
        </RouterLink>
      </div>
    </div>
  </div>
</template>
