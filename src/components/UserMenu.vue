<template>
  <div v-if="isOpen" class="relative">
    <!-- نمایش پاپ‌آپ در حالت دسکتاپ -->
    <div
      v-if="isDesktop"
      ref="menu"
      class="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50 border bg-white"
    >
      <ul class="py-2">
        <li v-for="item in menuItems" :key="item.text">
          <router-link
            @click="$emit('closeMenu')"
            :to="item.link"
            class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            {{ item.text }}
          </router-link>
        </li>
        <li>
          <button
            @click="logout"
            class="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
          >
            خروج
          </button>
        </li>
      </ul>
    </div>

    <!-- نمایش Drawer در موبایل -->
    <div v-else class="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-end">
      <div class="bg-white w-full rounded-t-lg p-4">
        <button @click="$emit('closeMenu')" class="text-gray-500 text-xl float-left">✖</button>
        <h2 class="text-lg font-bold text-center">حساب کاربری</h2>
        <ul class="mt-4 space-y-2">
          <li v-for="item in menuItems" :key="item.text">
            <router-link
              @click="$emit('closeMenu')"
              :to="item.link"
              class="block p-3 text-gray-700 hover:bg-gray-100 text-center"
            >
              {{ item.text }}
            </router-link>
          </li>
          <li>
            <button
              @click="logout"
              class="block w-full text-center p-3 text-red-500 hover:bg-gray-100"
            >
              خروج
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineProps, defineEmits } from 'vue'
import { useRouter } from 'vue-router'

defineProps({
  isOpen: Boolean,
})

const emits = defineEmits(['closeMenu'])

const isDesktop = ref(window.innerWidth >= 1024)
const router = useRouter()

const menuItems = [{ text: 'پروفایل من', link: '/user/profile' }]

const logout = () => {
  console.log('خروج از حساب کاربری')
  router.push('/auth/login')
  emits('closeMenu')
}

const handleResize = () => {
  isDesktop.value = window.innerWidth >= 1024
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
