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
import CommentForm from '@/components/CommentForm.vue'
import Comments from '@/components/Comments.vue'
import ProductsSimilar from '@/components/ProductsSimilar.vue'

const thumbsSwiper = ref(null)
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper
}
const modules = [FreeMode, Navigation, Thumbs]

const route = useRoute()
const productIDRef = ref(route.params.id)
const product = ref(null)
const cartStore = useCartStore()

const fetchProduct = async () => {
  const response = await fetch('../../data/data.json')
  const data = await response.json()

  product.value = data.products.find((p) => p.id == productIDRef.value)
}

onMounted(fetchProduct)

const addToCart = () => {
  if (product.value) {
    cartStore.addToCart(product.value)
  }
}
</script>

<template>
  <div v-if="product" class="mx-auto lg:p-6 mt-1 lg:mr-14">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-md p-4">
      <div class="w-xs relative p-2 md:border-l border-b md:border-b-0">
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
              <span
                v-if="product.bestProduct"
                class="absolute right-0 mt-12 bg-red-700 px-4 py-1 rounded-3xl text-white z-8"
                >ویژه</span
              >
              <span class="absolute right-0 mt-2 bg-green-700 px-4 py-1 rounded-3xl text-white z-8"
                >جدید</span
              >
              <img :src="img" class="zoom-image w-full object-cover" />
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
          class="mySwiper h-[125px]"
        >
          <swiper-slide v-for="(img, index) in product.images" :key="index"
            ><img :src="img" class="w-full"
          /></swiper-slide>
        </swiper>
      </div>

      <div class="mr-6">
        <h1 class="text-2xl font-bold mb-2">{{ product.title }}</h1>
        <p>
          {{ product.rating }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline"
            width="26"
            height="26"
            viewBox="0 0 24 24"
          >
            <path
              fill="#efc507"
              d="m12 16.102l-3.63 2.192q-.16.079-.297.064q-.136-.016-.265-.094q-.13-.08-.196-.226t-.012-.319l.966-4.11l-3.195-2.77q-.135-.11-.178-.263t.019-.293t.165-.23q.104-.087.28-.118l4.216-.368l1.644-3.892q.068-.165.196-.238T12 5.364t.288.073t.195.238l1.644 3.892l4.215.368q.177.03.281.119q.104.088.166.229q.061.14.018.293t-.178.263l-3.195 2.77l.966 4.11q.056.171-.011.318t-.197.226q-.128.08-.265.095q-.136.015-.296-.064z"
            />
          </svg>
          <span class="text-xs text-[#232]">(6 نظر ثبت شده)</span>
        </p>

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

        <button
          @click="addToCart"
          class="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
        >
          افزودن به سبد خرید
        </button>
      </div>
    </div>

    <div class="my-10 px-4 py-10 rounded-md bg-white text-gray-700">
      <h2 class="text-2xl font-bold pb-2 border-b mb-4">توضیحات</h2>
      <div v-html="product.description"></div>
    </div>

    <ProductsSimilar :productSubCategory="product.subCategory" :productID="productIDRef" />

    <CommentForm />

    <Comments :productID="productIDRef" />
  </div>
  <p v-else class="text-center text-gray-500 mt-10">در حال بارگذاری...</p>
</template>
