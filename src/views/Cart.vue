<template>
  <div class="mx-auto p-4">
    <h2 class="text-2xl bg-white font-bold mb-4 xl:mr-16 text-[#2A2A2A] py-6 pr-3 rounded-lg">
      سبد خرید
    </h2>

    <!-- اگر سبد خرید خالی بود -->
    <div v-if="cart.length === 0" class="text-center py-10">
      <p class="text-gray-500 text-lg">سبد خرید شما خالی است.</p>
    </div>

    <!-- لیست محصولات در سبد -->
    <div v-else class="bg-white shadow-md rounded-lg p-4 xl:mr-16">
      <div
        v-for="item in cart"
        :key="item.id"
        class="flex items-center justify-between border-b py-4"
      >
        <!-- تصویر محصول -->
        <img :src="item.images[0]" alt="product" class="w-16 h-16 object-cover rounded-md" />

        <!-- اطلاعات محصول -->
        <div class="flex-1 px-4">
          <h2 class="text-lg font-semibold">{{ item.title }}</h2>
          <p class="text-gray-500">قیمت: {{ formatPrice(item.price) }} تومان</p>
        </div>

        <!-- دکمه‌های افزایش/کاهش تعداد -->
        <div class="flex items-center">
          <button @click="decreaseQuantity(item)" class="px-2 py-1 bg-gray-200 rounded-md">
            -
          </button>
          <span class="px-3">{{ item.quantity }}</span>
          <button @click="increaseQuantity(item)" class="px-2 py-1 bg-gray-200 rounded-md">
            +
          </button>
        </div>

        <!-- قیمت کل -->
        <p class="text-lg font-semibold">{{ formatPrice(item.price * item.quantity) }} تومان</p>

        <!-- دکمه حذف -->
        <button @click="removeFromCart(item.id)" class="text-red-500 text-xl">🗑</button>
      </div>
    </div>

    <!-- جمع کل و دکمه پرداخت -->
    <div
      v-if="cart.length > 0"
      class="xl:mr-16 mt-6 p-4 bg-white shadow-md rounded-lg flex justify-between items-center"
    >
      <p class="text-xl font-bold">جمع کل: {{ formatPrice(totalPrice) }} تومان</p>
      <button class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">پرداخت</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCartStore } from '@/stores/cartStore' // مسیر استور خودت را تنظیم کن

const cartStore = useCartStore()
const cart = computed(() => cartStore.cart)
const totalPrice = computed(() =>
  cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0),
)

const increaseQuantity = (item) => {
  cartStore.addToCart(item, 1)
}

const decreaseQuantity = (item) => {
  if (item.quantity > 1) {
    item.quantity--
  } else {
    cartStore.removeFromCart(item.id)
  }
}

const removeFromCart = (id) => {
  cartStore.removeFromCart(id)
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('fa-IR').format(price)
}
</script>

<style scoped>
button {
  transition: all 0.2s;
}
</style>
