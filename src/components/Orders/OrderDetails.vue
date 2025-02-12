<!-- src/components/Orders/OrderDetails.vue -->
<template>
  <div class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
    <div class="bg-white p-6 rounded-lg shadow-md w-96">
      <h2 class="text-lg font-bold mb-4">جزئیات سفارش #{{ order.id }}</h2>
      <p><strong>تاریخ سفارش:</strong> {{ order.date }}</p>
      <p><strong>وضعیت:</strong> {{ order.status }}</p>
      <button
        @click="$emit('close')"
        class="mt-4 bg-gray-400 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-500"
      >
        بستن
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({ order: Object })
</script>
