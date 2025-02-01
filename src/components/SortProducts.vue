<template>
  <div class="flex items-center justify-between bg-white p-2 mb-4 rounded-md">
    <label for="sort" class="text-gray-700 font-medium">مرتب‌سازی بر اساس:</label>
    <select
      id="sort"
      v-model="selectedSort"
      @change="emitSort"
      class="border px-3 py-2 rounded-md text-gray-700 focus:ring focus:ring-blue-300"
    >
      <option value="latest">جدیدترین</option>
      <option value="priceHigh">قیمت (بیشترین به کمترین)</option>
      <option value="priceLow">قیمت (کمترین به بیشترین)</option>
      <option value="rating">امتیاز</option>
    </select>
  </div>
</template>

<script setup>
import { ref } from "vue";

const selectedSort = ref("latest");

// ارسال مقدار مرتب‌سازی به والد
const emit = defineEmits(["sortChanged"]);
const emitSort = () => {
  emit("sortChanged", selectedSort.value);
};
</script>
