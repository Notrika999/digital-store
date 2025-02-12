<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cartStore'
const cartStore = useCartStore()

const props = defineProps({
  productInfo: {
    type: Object,
    required: true,
  },
})

const router = useRouter()

const goToProductPage = () => {
  router.push(`/product/${props.productInfo.id}`)
}

const addToCart = () => {
  if (props.productInfo) {
    cartStore.addToCart(props.productInfo)
  }
}
</script>

<template>
  <div class="flex flex-col px-3 h-[20rem] bg-white overflow-hidden rounded-md relative group">
    <span
      v-if="productInfo.bestProduct"
      class="absolute mt-8 bg-red-700 px-2 rounded-3xl text-white text-sm"
      >ویژه</span
    >
    <span class="absolute mt-2 bg-green-700 px-2 rounded-3xl text-white text-sm">جدید</span>

    <div class="mt-2 size-[10rem] mx-auto">
      <a
        href="#"
        @click="goToProductPage"
        class="text-sm font-bold overflow-hidden text-nowrap text-ellipsis group-hover:underline"
      >
        <img :src="productInfo.images && productInfo.images[0]" :alt="productInfo.title" />
      </a>
    </div>

    <div class="relative group z-34">
      <a
        href="#"
        @click="goToProductPage"
        class="inline-block text-sm w-[6rem] font-bold text-nowrap text-ellipsis group-hover:underline"
      >
        {{ productInfo.title }}
      </a>

      <!-- Tooltip -->
      <div
        class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-[10rem] px-3 py-1 text-xs text-wrap text-white bg-gray-800 rounded opacity-0 transition-opacity duration-200 group-hover:opacity-100"
      >
        {{ productInfo.title }}
      </div>
    </div>

    <div class="my-auto flex items-center justify-between">
      <a href="#" class="text-sm text-[#333]">{{ productInfo.category }}</a>

      <p class="flex items-center">
        <span class="text-sm pt-1">{{ productInfo.rating }}</span>

        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
          <path
            fill="#efc507"
            d="m12 16.102l-3.63 2.192q-.16.079-.297.064q-.136-.016-.265-.094q-.13-.08-.196-.226t-.012-.319l.966-4.11l-3.195-2.77q-.135-.11-.178-.263t.019-.293t.165-.23q.104-.087.28-.118l4.216-.368l1.644-3.892q.068-.165.196-.238T12 5.364t.288.073t.195.238l1.644 3.892l4.215.368q.177.03.281.119q.104.088.166.229q.061.14.018.293t-.178.263l-3.195 2.77l.966 4.11q.056.171-.011.318t-.197.226q-.128.08-.265.095q-.136.015-.296-.064z"
          />
        </svg>
      </p>
    </div>

    <div
      class="hidden md:flex flex-col justify-between w-full items-start absolute -bottom-2 transition-all duration-300 group-hover:bottom-6"
    >
      <span
        class="text-blue-800 text-sm font-bold transition-all duration-300 group-hover:opacity-0"
        >{{ productInfo.price }} تومان</span
      >
      <button
        @click="addToCart"
        class="transition-all duration-300 opacity-0 group-hover:opacity-100 border-b border-blue-800"
      >
        افزودن به سبد
      </button>
    </div>

    <div class="md:hidden flex flex-col justify-between w-full mb-1">
      <p class="text-blue-600 text-sm font-bold">{{ productInfo.price }} تومان</p>
      <button @click="addToCart" class="bg-blue-700 text-white rounded-md py-1 px-2 self-end">
        افزودن به سبد
      </button>
    </div>
  </div>
</template>
