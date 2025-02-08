<script setup>
import { computed, ref } from 'vue';
import { useSidebarStore } from "@/stores/sidebarStore";
import Categoray from "./Categoray.vue";

const sidebarStore = useSidebarStore();

const handleMouseEnter = () => {
  sidebarStore.setHovered(true)
}

const handleMouseLeave = () => {
  sidebarStore.setHovered(false)
}

const isHovered = computed(() => sidebarStore.isHovered)
</script>

<template>
  <div
    class="w-16 fixed top-0 right-0 bottom-0 z-50 border border-l bg-white hover:w-60 duration-200 xl:inline-block hidden"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div class="flex flex-col items-start px-2">
      <div :class="['sidbar-top flex items-center gap-x-1 w-11 h-11 p-2 my-2 rounded-full bg-[#1c61e7] transition-all duration-200', { 'w-full justify-start': isHovered, 'justify-center': !isHovered }]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#fff" d="M4 7q-.425 0-.712-.288T3 6t.288-.712T4 5h16q.425 0 .713.288T21 6t-.288.713T20 7zm0 12q-.425 0-.712-.288T3 18t.288-.712T4 17h16q.425 0 .713.288T21 18t-.288.713T20 19zm0-6q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13z"/></svg> <span :class="{ 'block': isHovered, 'hidden': !isHovered }" class="duration-1000 text-white text-sm font-bold">
      همه دسته بندی ها
    </span>
      </div>
      <div class="sidbar-menu mt-3 px-2">
        <Categoray />
      </div>
    </div>

  </div>
</template>
