<!-- src/components/Orders/OrderList.vue -->
<template>
  <div class="p-6 bg-white shadow-md rounded-lg">
    <h2 class="text-lg font-bold text-gray-700">سفارشات</h2>
    <ul class="mt-4 space-y-3">
      <li v-for="order in orders" :key="order.id" class="bg-gray-100 p-3 rounded-md shadow-sm">
        <p class="font-semibold">سفارش #{{ order.id }}</p>
        <p class="text-gray-500 text-sm">تاریخ: {{ order.date }}</p>
        <p class="text-gray-500 text-sm">وضعیت: {{ order.status }}</p>
        <button
          @click="viewOrder(order)"
          class="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
        >
          جزئیات
        </button>
      </li>
    </ul>
    <OrderDetails v-if="selectedOrder" :order="selectedOrder" @close="selectedOrder = null" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import OrderDetails from './OrderDetails.vue'

const orders = ref([
  { id: 1, date: '2025-02-10', status: 'ارسال شده' },
  { id: 2, date: '2025-01-25', status: 'در حال پردازش' },
])

const selectedOrder = ref(null)
const viewOrder = (order) => {
  selectedOrder.value = order
}
</script>
