<script setup>
import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore()

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
      <h2 class="text-lg font-bold">سبد خرید</h2>
      <!-- محتوا -->
      <p>لیست محصولات در اینجا نمایش داده می‌شود.</p>
      <div class="mt-4 flex justify-between items-center">
        <button @click="closeCart" class="text-red-500">بستن</button>
        <button @click="closeCart" class="w-8/12 text-white bg-[#1c61e7] py-2 rounded-md">تسویه حساب</button>
      </div>
    </div>
  </div>
</template>
