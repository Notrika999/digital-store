<script setup>
const adverObj = [
  {
    id: 1,
    title: 'عنوان لحظات لذت بخش',
    subTitle: "از لحظه هات لذت ببر",
    img: `../../public/images/adver/03.png`,
    bgColor: 'bg-gradient-to-r from-amber-500 to-amber-400'
  },
  {
    id: 2,
    title: 'ایرپاد',
    subTitle: "تخفیف تا 40%",
    img: `../../public/images/adver/02.png`,
    bgColor: 'bg-gradient-to-r from-cyan-600 to-cyan-400'
  },
  {
    id: 3,
    title: 'عنوان لحظات لذت بخش',
    subTitle: "از لحظه هات لذت ببر",
    img: `../../public/images/adver/03.png`,
    bgColor: 'bg-gradient-to-r from-blue-800 to-indigo-400'
  },
  {
    id: 4,
    title: 'عنوان لحظات لذت بخش',
    subTitle: "پلی استیشن",
    img: `../../public/images/adver/02.png`,
    bgColor: 'bg-gradient-to-r from-rose-700 to-rose-500'
  },
]
</script>

<template>
  <div v-for="item in adverObj" :key="item.id"
    class="flex items-center justify-between px-3 w-72 h-40 rounded-md group"
    :class="item.bgColor"
  >
    <div>
      <img :src="item.img" alt="" class="w-24 h-24 transition-transform duration-500 transform group-hover:scale-125" />
    </div>
    <div class="flex flex-col items-end justify-evenly py-5 h-full">
      <p class="w-full font-bold text-right text-[#222]">{{ item.title }}</p>
      <p class="w-full text-right text-[#122]">{{ item.subTitle }}</p>
      <button class="bg-white mt-3 py-1 px-4 rounded-md hover:bg-white/85">خرید کنید</button>
    </div>
  </div>
</template>
