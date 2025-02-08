<template>
  <div class="xl:w-full w-auto flex items-center justify-between xl:justify-self-auto justify-self-end">
    <label for="sort" class="xl:inline-block hidden text-gray-700 font-medium">مرتب‌سازی بر اساس:</label>
    <select
      id="sort"
      v-model="selectedSort"
      @change="emitSort"
      class="w-auto min-w-max border px-3 py-2 rounded-md text-gray-700 focus:none text-sm"
    >
      <option value="latest">جدیدترین</option>
      <option value="priceHigh">گران ترین</option>
      <option value="priceLow">ارزانترین</option>
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
