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
  1287: {
    slidesPerView: 5,
    spaceBetween: 120,
  },
}

const productStore = useProductStore();

const bestProducts = productStore.allProducts.filter(product => product.bestProduct);
</script>

<template>
  <div class="pr-20 pl-3 mt-5">
    <swiper :slidesPerView="1" :spaceBetween="10" :breakpoints="swiperBreakpoints" :loop="true" class="mySwiper">
    <swiper-slide v-for="product in bestProducts" :key="product.id">
      <ProductCard :productInfo="product" />
    </swiper-slide>
  </swiper>
  </div>
</template>
