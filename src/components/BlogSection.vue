<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'

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
  <div class="mt-3">
    <swiper
      :slidesPerView="1"
      :spaceBetween="10"
      :breakpoints="swiperBreakpoints"
      :loop="true"
      class="mySwiper"
    >
      <swiper-slide>
        <div class="flex flex-col gap-y-3 bg-white rounded-md py-4 px-2">
          <div class="">
            <img src="../../public/images/products/iPhone 15 Pro Natural titanium.png" alt="" />
          </div>
          <div>
            <span class="text-[#999] text-sm"> 13 دسامبر 2022 </span>
            <h3 class="text-sm font-bold mt-4">
              <a href="#"> به‌روزرسانی MIUI 14 برای ردمی نوت ۱۰ پرو منتشر شد </a>
            </h3>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="flex flex-col gap-y-3 bg-white rounded-md py-4 px-2">
          <div class="">
            <img src="../../public/images/products/iPhone 15 Pro Natural titanium.png" alt="" />
          </div>
          <div>
            <span class="text-[#999] text-sm"> 13 دسامبر 2022 </span>
            <h3 class="text-sm font-bold mt-4">
              <a href="#"> به‌روزرسانی MIUI 14 برای ردمی نوت ۱۰ پرو منتشر شد </a>
            </h3>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="flex flex-col gap-y-3 bg-white rounded-md py-4 px-2">
          <div class="">
            <img src="../../public/images/products/iPhone 15 Pro Natural titanium.png" alt="" />
          </div>
          <div>
            <span class="text-[#999] text-sm"> 13 دسامبر 2022 </span>
            <h3 class="text-sm font-bold mt-4">
              <a href="#"> به‌روزرسانی MIUI 14 برای ردمی نوت ۱۰ پرو منتشر شد </a>
            </h3>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="flex flex-col gap-y-3 bg-white rounded-md py-4 px-2">
          <div class="">
            <img src="../../public/images/products/iPhone 15 Pro Natural titanium.png" alt="" />
          </div>
          <div>
            <span class="text-[#999] text-sm"> 13 دسامبر 2022 </span>
            <h3 class="text-sm font-bold mt-4">
              <a href="#"> به‌روزرسانی MIUI 14 برای ردمی نوت ۱۰ پرو منتشر شد </a>
            </h3>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="flex flex-col gap-y-3 bg-white rounded-md py-4 px-2">
          <div class="">
            <img src="../../public/images/products/iPhone 15 Pro Natural titanium.png" alt="" />
          </div>
          <div>
            <span class="text-[#999] text-sm"> 13 دسامبر 2022 </span>
            <h3 class="text-sm font-bold mt-4">
              <a href="#"> به‌روزرسانی MIUI 14 برای ردمی نوت ۱۰ پرو منتشر شد </a>
            </h3>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
