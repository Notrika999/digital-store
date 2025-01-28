<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

const swiperBreakpoints = {
  568: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  640: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
  1024: {
    slidesPerView: 6,
    spaceBetween: 50,
  },
}

const bestCat = [
  {
    id: 1,
    name: 'موبایل',
    count: 1,
    img: `../../public/images/best-categoray/mobile.png`,
  },
  {
    id: 2,
    name: 'هدفون',
    count: 20,
    img: `../../public/images/best-categoray/headphone.png`,
  },
  {
    id: 3,
    name: 'تبلت',
    count: 10,
    img: `../../public/images/best-categoray/tablet.webp`,
  },
  {
    id: 4,
    name: 'اسپیکر',
    count: 5,
    img: `../../public/images/best-categoray/spicker.webp`,
  },
  {
    id: 5,
    name: 'کنسول بازی',
    count: 2,
    img: `../../public/images/best-categoray/game.webp`,
  },
  {
    id: 4,
    name: 'اسپیکر',
    count: 5,
    img: `../../public/images/best-categoray/spicker.webp`,
  },
  {
    id: 5,
    name: 'کنسول بازی',
    count: 2,
    img: `../../public/images/best-categoray/game.webp`,
  },
  {
    id: 4,
    name: 'اسپیکر',
    count: 5,
    img: `../../public/images/best-categoray/spicker.webp`,
  },
  {
    id: 5,
    name: 'کنسول بازی',
    count: 2,
    img: `../../public/images/best-categoray/game.webp`,
  },
]
</script>

<template>
  <swiper :slidesPerView="1" :spaceBetween="10" :breakpoints="swiperBreakpoints" class="mySwiper">
    <swiper-slide v-for="item in bestCat" :key="item.id">
      <div class="flex flex-col items-center shadow rounded-md bg-white my-2">
        <a href="#" class="text-center group">
          <div class="w-32 h-32 overflow-hidden">
            <img :src="item.img" alt="img" class="transition-transform duration-500 transform group-hover:scale-105" />
          </div>
          <h3 class="text-sm mt-3">{{ item.name }}</h3>
          <p class="text-[#333] text-sm mt-1">{{ item.count }} محصول</p>
        </a>
      </div>
    </swiper-slide>
  </swiper>
</template>
