<template>
  <div class="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg my-8">
    <div class="flex space-x-4 border-b pb-4 text-lg font-semibold text-gray-700">
      <button
        @click="activeTab = 'info'"
        :class="[
          'px-4 py-2 rounded-md',
          activeTab === 'info' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200',
        ]"
      >
        اطلاعات کاربر
      </button>
      <button
        @click="activeTab = 'orders'"
        :class="[
          'px-4 py-2 rounded-md',
          activeTab === 'orders' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200',
        ]"
      >
        سفارشات
      </button>
    </div>
    <UserInfo v-if="activeTab === 'info'" class="mt-4" />
    <OrderList v-if="activeTab === 'orders'" class="mt-4" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import UserInfo from '@/components/Profile/UserInfo.vue'
import OrderList from '@/components/Orders/OrderList.vue'

const activeTab = ref('info')
</script>
