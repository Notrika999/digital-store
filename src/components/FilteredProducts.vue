<script setup>
  import { ref, onMounted, watch } from "vue";
  import noUiSlider from "nouislider";
  import "nouislider/dist/nouislider.css";

// props برای دریافت محصولات اولیه و ارسال تغییرات
const props = defineProps(["initialPriceRange", "onPriceChange"]);

// مقدار محدوده قیمت
const priceRange = ref([...props.initialPriceRange]);

// ایجاد اسلایدر
onMounted(() => {
  const slider = document.getElementById("slider");
  noUiSlider.create(slider, {
    start: [...priceRange.value],
    connect: true,
    range: {
      min: 0,
      max: 10000000,
    },
    step: 500,
  });

  // به‌روزرسانی مقدار قیمت با تغییر اسلایدر
  slider.noUiSlider.on("update", (values) => {
    priceRange.value = values.map(Number); // تبدیل به عدد
  });
});

// نظارت بر تغییرات قیمت و ارسال به والد
watch(priceRange, (newRange) => {
  props.onPriceChange(newRange);
});
</script>

<template>
  <div>
    <h2>فیلتر محدوده قیمت</h2>
    <div id="slider" class="my-4"></div>
    <div class="flex gap-4">
      <p>حداقل قیمت: {{ priceRange[0] }} تومان</p>
      <p>حداکثر قیمت: {{ priceRange[1] }} تومان</p>
    </div>

    <h2 class="mt-6">محصولات</h2>
    <div v-if="filteredProducts?.length" class="grid grid-cols-3 gap-4">
      <div v-for="product in filteredProducts" :key="product.id" class="p-4 border rounded">
        <h3>{{ product.title }}</h3>
        <p>قیمت: {{ product.price }} تومان</p>
      </div>
    </div>
    <p v-else>محصولی در این محدوده قیمت یافت نشد.</p>
  </div>
</template>
