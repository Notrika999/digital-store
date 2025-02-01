<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import ProductCard from './ProductCard.vue';
import 'swiper/css'

defineProps({
  products: {
    type: Array,
    required: true,
  },
})

const swiperBreakpoints = {
  250: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  568: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  878: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  1148: {
    slidesPerView: 4,
    spaceBetween: 90,
  },
}
</script>

<template>
  <div class="max-w-[59rem] mt-6">
    <swiper :slidesPerView="1" :spaceBetween="10" :breakpoints="swiperBreakpoints" :loop="true" class="mySwiper">
    <swiper-slide v-for="product in products" :key="product.id">
      <ProductCard :productInfo="product" class="w-64"  />
    </swiper-slide>
  </swiper>
  </div>
</template>
