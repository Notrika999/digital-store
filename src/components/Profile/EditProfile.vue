<!-- src/components/Profile/EditProfile.vue -->
<template>
  <div class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
    <div class="bg-white p-6 rounded-lg shadow-md w-96">
      <h2 class="text-lg font-bold mb-4">ویرایش اطلاعات</h2>
      <input
        v-model="updatedUser.name"
        class="border p-2 w-full rounded-md mb-2 focus:ring-2 focus:ring-blue-400"
        placeholder="نام"
      />
      <input
        v-model="updatedUser.email"
        class="border p-2 w-full rounded-md mb-2 focus:ring-2 focus:ring-blue-400"
        placeholder="ایمیل"
      />
      <div class="flex justify-end space-x-2 mt-4">
        <button
          @click="$emit('close')"
          class="bg-gray-400 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-500"
        >
          لغو
        </button>
        <button
          @click="saveChanges"
          class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
        >
          ذخیره
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()
const updatedUser = ref({ ...userStore.user })

const saveChanges = () => {
  userStore.updateUser(updatedUser.value)
  $emit('close')
}
</script>
