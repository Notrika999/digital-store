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
  420: {
    slidesPerView: 2,
    spaceBetween: 5,
  },
  640: {
    slidesPerView: 3,
    spaceBetween: 5,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 10,
  },

  1148: {
    slidesPerView: 5,
    spaceBetween: 10,
  },
}
</script>

<template>
  <div class="pr-3 xl:pr-20 pl-3 mt-5">
    <swiper :slidesPerView="1" :spaceBetween="10" :breakpoints="swiperBreakpoints" :loop="true" class="mySwiper">
    <swiper-slide v-for="product in products" :key="product.id">
      <ProductCard :productInfo="product" />
    </swiper-slide>
  </swiper>
  </div>
</template>
