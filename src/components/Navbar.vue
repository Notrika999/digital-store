<script setup>
import { onMounted, ref } from 'vue'
import { useCartStore } from '@/stores/cartStore'
import NavbarNav from './NavbarNav.vue'
import NavbarCart from './NavbarCart.vue'
import MobileCategory from '@/components/MobileCategory.vue'
import UserMenu from '@/components/UserMenu.vue'

const isUserMenuOpen = ref(false)
// مقدار اولیه نمایش کامپوننت را False قرار می‌دهیم
const isMobileCategoryOpen = ref(false)

const cartStore = useCartStore()

const toggleUserMenu = () => {
  isUserMenuOpen.value = !isUserMenuOpen.value;
};

const closeUserMenu = () => {
  isUserMenuOpen.value = false;
};

const toggleCart = () => {
  cartStore.toggleCart()
}

// بستن منو در حالت دسکتاپ وقتی بیرون کلیک می‌شود
const handleClickOutside = (event) => {
  if (!event.target.closest('.relative')) {
    isUserMenuOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});
</script>

<template>
  <div class="lg:flex hidden items-center justify-between pr-5 xl:pr-16 pl-5 bg-[#e6effd]">
    <div class="pr-3 flex-1">
      <ul class="flex items-center gap-x-2 py-4">
        <button
          @click="isMobileCategoryOpen = !isMobileCategoryOpen"
          class="xl:hidden inline-block"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
            <path
              fill="#00f"
              d="M4 7q-.425 0-.712-.288T3 6t.288-.712T4 5h16q.425 0 .713.288T21 6t-.288.713T20 7zm0 12q-.425 0-.712-.288T3 18t.288-.712T4 17h16q.425 0 .713.288T21 18t-.288.713T20 19zm0-6q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13z"
            />
          </svg>
        </button>
        <MobileCategory v-if="isMobileCategoryOpen" @close="isMobileCategoryOpen = false" />

        <NavbarNav navTitle="خانه" to="/" />
        <NavbarNav navTitle="محصولات" to="/shop" />
        <NavbarNav navTitle="تماس با ما" to="#" />
      </ul>
    </div>

    <div class="flex items-center justify-end">
      <div class="relative">
      <button @click="toggleUserMenu" class="relative">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 md:w-8 md:h-8" viewBox="0 0 24 24">
          <path fill="#333" d="M15.71 12.71a6 6 0 1 0-7.42 0a10 10 0 0 0-6.22 8.18a1 1 0 0 0 2 .22a8 8 0 0 1 15.9 0a1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1a10 10 0 0 0-6.25-8.19M12 12a4 4 0 1 1 4-4a4 4 0 0 1-4 4"/>
        </svg>
      </button>

      <!-- نمایش کامپوننت UserMenu -->
      <UserMenu :isOpen="isUserMenuOpen" @closeMenu="closeUserMenu" />
    </div>

      <div class="cart mr-2">
        <button
          @click="toggleCart"
          class="relative flex items-center gap-x-2 border md:border-2 border-[#1c61e7] bg-[#1c61e7] rounded-3xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 md:w-8 md:h-8"
            viewBox="0 0 1200 1200"
          >
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
    </div>
  </div>
</template>
