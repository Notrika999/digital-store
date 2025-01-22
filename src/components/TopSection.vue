<script setup>
import { defineProps } from 'vue';

// تعریف پراپ‌ها
defineProps({
  sectionTitle: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
});
</script>

<template>
  <div class="flex items-center justify-between  pl-3">
    <h2 class="text-xl font-bold" :class="color">{{ sectionTitle }}</h2>
    <a :href="link" class="py-1 px-3 rounded-lg bg-white text-blue-800">بیشتر</a>
  </div>
</template>
