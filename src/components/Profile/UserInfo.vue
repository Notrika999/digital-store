<!-- src/components/Profile/UserInfo.vue -->
<template>
  <div class="p-6 bg-white shadow-md rounded-lg text-center">
    <img
      :src="user.avatar"
      alt="Avatar"
      class="w-24 h-24 rounded-full mx-auto border-4 border-blue-400"
    />
    <h2 class="text-xl font-bold mt-4">{{ user.name }}</h2>
    <p class="text-gray-600">{{ user.email }}</p>
    <button
      @click="editMode = true"
      class="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600"
    >
      ویرایش
    </button>
    <EditProfile v-if="editMode" @close="editMode = false" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import EditProfile from '@/components/Profile/EditProfile.vue'

const userStore = useUserStore()
const user = userStore.user
const editMode = ref(false)
</script>
