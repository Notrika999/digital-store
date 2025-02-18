<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/stores/cartStore'
import NavbarCart from './NavbarCart.vue'
import MobileCategory from '@/components/MobileCategory.vue'
import UserMenu from '@/components/UserMenu.vue'

const isUserMenuOpen = ref(false)
// مقدار اولیه نمایش کامپوننت را False قرار می‌دهیم
const isMobileCategoryOpen = ref(false)

const cartStore = useCartStore()

const toggleCart = () => {
  cartStore.toggleCart()
}

const toggleUserMenu = () => {
  isUserMenuOpen.value = !isUserMenuOpen.value
}
</script>

<template>
  <div
    class="fixed right-0 bottom-0 left-0 h-16 z-50 lg:hidden flex items-center justify-between pr-5 xl:pr-16 pl-5 bg-[#e6effd]"
  >
    <button @click="isMobileCategoryOpen = !isMobileCategoryOpen" class="xl:hidden inline-block">
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
        <path
          fill="#00f"
          d="M4 7q-.425 0-.712-.288T3 6t.288-.712T4 5h16q.425 0 .713.288T21 6t-.288.713T20 7zm0 12q-.425 0-.712-.288T3 18t.288-.712T4 17h16q.425 0 .713.288T21 18t-.288.713T20 19zm0-6q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13z"
        />
      </svg>
    </button>

    <MobileCategory v-if="isMobileCategoryOpen" @close="isMobileCategoryOpen = false" />

    <RouterLink to="/shop" class="py-2 rounded-3xl text-[#333333]">
      <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 24 24">
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          color="currentColor"
        >
          <path
            d="M2.967 10.496v5.002c0 2.83 0 4.244.878 5.123c.88.88 2.293.88 5.122.88h6c2.828 0 4.242 0 5.121-.88c.879-.879.879-2.294.879-5.123v-5.002"
          />
          <path
            d="M14.967 16.993c-.684.607-1.773 1-3 1s-2.316-.393-3-1m1.137-8.575c-.282 1.019-1.308 2.776-3.256 3.03c-1.72.225-3.026-.526-3.359-.84c-.367-.255-1.205-1.07-1.41-1.578c-.205-.51.034-1.613.205-2.063l.683-1.978c.167-.497.558-1.672.958-2.07s1.21-.415 1.544-.415h7.006c1.803.026 5.746-.016 6.525 0c.78.016 1.248.67 1.385.95C21.548 6.27 22 7.884 22 8.57c-.152.734-.78 2.116-3 2.725c-2.307.632-3.615-.598-4.025-1.07m-5.82 0c.325.399 1.344 1.202 2.82 1.222c1.477.02 2.752-1.01 3.205-1.527c.128-.153.405-.606.693-1.503"
          />
        </g>
      </svg>
    </RouterLink>

    <RouterLink to="/" class="py-2 rounded-3xl text-[#333333]">
      <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="m12 5.561l-7 5.6V19h5v-4h4v4h5v-7.358a1 1 0 0 0-.375-.781zM12 3l7.874 6.3A3 3 0 0 1 21 11.641V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7.839A2 2 0 0 1 3.75 9.6z"
        />
      </svg>
    </RouterLink>

    <button @click="toggleUserMenu" class="relative">
      <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 24 24">
        <path
          fill="#333"
          d="M15.71 12.71a6 6 0 1 0-7.42 0a10 10 0 0 0-6.22 8.18a1 1 0 0 0 2 .22a8 8 0 0 1 15.9 0a1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1a10 10 0 0 0-6.25-8.19M12 12a4 4 0 1 1 4-4a4 4 0 0 1-4 4"
        />
      </svg>
    </button>
    <UserMenu :isOpen="isUserMenuOpen" @closeMenu="isUserMenuOpen = false" />

    <button
      @click="toggleCart"
      class="relative flex items-center gap-x-2 border md:border-2 border-[#1c61e7] bg-[#1c61e7] rounded-3xl"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 1200 1200">
        <path
          fill="#fff"
          d="M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0M297.583 253.491l106.787 33.545c14.137 4.643 23.553 17.771 25.195 31.201l6.006 58.812l483.545 53.979c20.763 4.022 35.353 22.769 32.446 42.041l-30.029 169.188c-3.822 17.697-18.479 29.828-34.79 30.029H457.178l-8.423 47.974h407.959c21.332.751 36.957 16.995 37.207 35.962c-.885 21.638-18.325 35.801-37.207 36.035H405.542c-22.756-1.882-39.462-19.915-35.962-41.968l19.189-105.615l-30.029-295.236l-82.764-26.366c-9.6-3.2-16.806-9.219-21.606-18.019c-9.082-19.032-.599-40.104 15.601-49.219c9.246-4.806 18.276-5.405 27.612-2.343m162.598 559.497c31.066 0 56.25 25.184 56.25 56.25s-25.184 56.25-56.25 56.25c-31.064 0-56.25-25.185-56.25-56.25s25.184-56.25 56.25-56.25m330.175 0c31.065 0 56.25 25.184 56.25 56.25s-25.185 56.25-56.25 56.25s-56.25-25.185-56.25-56.25s25.185-56.25 56.25-56.25"
        />
      </svg>
      <span class="absolute -left-3 -top-2 text-xs md:text-sm text-[#1c61e7] font-bold pl-3"
        >0</span
      >
    </button>

    <NavbarCart />
  </div>
</template>
