<script setup>
import { defineProps } from 'vue';

// تعریف پراپ‌ها
defineProps({
  navTitle: {
    type: String,
    required: true
  },
  to:{
    type: String,
    required: true
  }
});
</script>

<template>
  <li>
    <RouterLink :to="to" class="py-2 rounded-3xl px-3 text-[#333333] hover:text-sky-700 hover:bg-[#1c61e759] font-bold text-lg">{{ navTitle }}</RouterLink>
  </li>
</template>
