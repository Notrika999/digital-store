<script setup>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  defineProps({
  sliders: {
    type: Array,
    required: true
  },
});

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  // Import required modules
  import { Navigation } from 'swiper/modules';
</script>

<template>
  <div class="pr-20 pl-3">
    <swiper
      dir="rtl"
      :navigation="true"
      :pagination="{ clickable: true }"
      :modules="[Navigation]"
      class="mySwiper max-w-[78rem] my-10 mx-0 rounded-xl"
    >
      <swiper-slide v-for="slider in sliders" :key="slider.id">
        <div class="w-[78rem] h-[24em]">
          <img :src="slider" alt="" class="w-full h-full">
        </div>
      </swiper-slide>
    </swiper>
  </div>

</template>

<style >
/* می‌توانید استایل‌های دلخواه برای اسلایدر خود اضافه کنید */
.mySwiper {
  width: 100%;
  height: 100%;
}

.swiper-button-prev:after, .swiper-rtl .swiper-button-next:after {
    font-size: 20px !important;
    font-weight: bolder !important;
    color: #fff !important;
    background-color: rgba(0, 0, 0, .25) !important;
    padding: .75rem !important;
    border-radius: 100% !important;
}

.swiper-button-prev:hover:after, .swiper-rtl .swiper-button-next:hover:after {
  background-color: rgba(0, 0, 0, .6) !important;
}
</style>
