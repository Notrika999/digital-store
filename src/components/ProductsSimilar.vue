<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import ProductCard from './ProductCard.vue'
import 'swiper/css'
import { onMounted, ref } from 'vue'

const props = defineProps({
  productSubCategory: {
    type: String,
    required: true,
  },
  productID: {
    type: String,
    required: true,
  },
})

const productsSimi = ref([])

const fetchComments = async () => {
  const response = await fetch('../../public/data/data.json')
  const data = await response.json()
  productsSimi.value = data.products.filter(
    (product) => product.subCategory == props.productSubCategory,
  )
}

onMounted(() => {
  fetchComments()
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
  <div class="my-6 p-2 bg-white" :class="productsSimi.length <= 2 && 'hidden'">
    <swiper
      :slidesPerView="1"
      :spaceBetween="10"
      :breakpoints="swiperBreakpoints"
      :loop="true"
      class="mySwiper"
    >
      <swiper-slide
        v-for="product in productsSimi"
        :key="product.id"
        :class="String(product.id) === props.productID && 'hidden'"
      >
        <ProductCard :productInfo="product" class="border" />
      </swiper-slide>
    </swiper>
  </div>
</template>
