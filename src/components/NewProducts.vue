<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import ProductCard from './ProductCard.vue';
import { useProductStore } from "@/stores/productStore"
import 'swiper/css'

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

const productStore = useProductStore();

const bestProducts = productStore.allProducts.filter(product => product.bestProduct);
</script>

<template>
  <div class="max-w-[59rem] mt-6">
    <swiper :slidesPerView="1" :spaceBetween="10" :breakpoints="swiperBreakpoints" :loop="true" class="mySwiper">
    <swiper-slide v-for="product in bestProducts" :key="product.id">
      <ProductCard :productInfo="product" />
    </swiper-slide>
  </swiper>
  </div>
</template>
