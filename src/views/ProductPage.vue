<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useCartStore } from '@/stores/cartStore'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

const thumbsSwiper = ref(null)
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper
}
const modules = [FreeMode, Navigation, Thumbs]

const route = useRoute()
const product = ref(null)
const cartStore = useCartStore()

const fetchProduct = async () => {
  const response = await fetch('../../data.json')
  const data = await response.json()

  product.value = data.products.find((p) => p.id == route.params.id)
}

onMounted(fetchProduct)

const addToCart = () => {
  if (product.value) {
    cartStore.addToCart(product.value)
  }
}
</script>

<template>
  <div v-if="product" class="container mx-auto p-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="w-xs relative">
        <span
          v-if="product.bestProduct"
          class="absolute left-0 mt-12 bg-red-700 px-4 py-1 rounded-3xl text-white z-10"
          >ویژه</span
        >
        <span class="absolute left-0 mt-2 bg-green-700 px-4 py-1 rounded-3xl text-white z-10"
          >جدید</span
        >
        <swiper
          :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }"
          :spaceBetween="10"
          :navigation="true"
          :thumbs="{ swiper: thumbsSwiper }"
          :modules="modules"
          class="mySwiper2"
        >
          <swiper-slide v-for="(img, index) in product.images" :key="index" class="w-96">
            <div class="relative overflow-hidden">
              <img :src="img" class="zoom-image w-full  object-cover" />
            </div>
          </swiper-slide>
        </swiper>
        <swiper
          @swiper="setThumbsSwiper"
          :spaceBetween="10"
          :slidesPerView="4"
          :freeMode="true"
          :watchSlidesProgress="true"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide v-for="(img, index) in product.images" :key="index"
            ><img :src="img"
          /></swiper-slide>
        </swiper>
      </div>
      <div class="mr-6">
        <h1 class="text-2xl font-bold">{{ product.title }}</h1>

        <p class="text-gray-600 mt-2">{{ product.description }}</p>

        <div class="my-5">
          <p
            v-for="(value, key) in product.technicalSpecifications"
            :key="key"
            class="flex items-center gap-4 py-1"
          >
            <span class="text-xs font-bold text-[#232]">{{ key }}: </span>
            <span class="text-sm font-bold">{{ value }}</span>
          </p>
        </div>

        <p class="text-lg font-bold mt-4 text-blue-600">{{ product.price }} تومان</p>

        <button @click="addToCart" class="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  </div>
  <p v-else class="text-center text-gray-500 mt-10">در حال بارگذاری...</p>
</template>
