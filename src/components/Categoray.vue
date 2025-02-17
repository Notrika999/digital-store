<script setup>
import { computed, onMounted, ref } from 'vue'
import { useSidebarStore } from '@/stores/sidebarStore'

const emit = defineEmits(['close'])

const categories = ref([])

onMounted(async () => {
  const response = await fetch('../../data/data.json')
  const data = await response.json()

  categories.value = data.categories
})

const sidebarStore = useSidebarStore()

const isHovered = computed(() => sidebarStore.isHovered)
</script>

<template>
  <ul>
    <li v-for="item in categories" :key="item.id" class="pb-6">
      <RouterLink
        :to="`/shop/${item.link}`"
        class="flex items-center gap-x-1 relative text-[#333333] hover:text-sky-700"
        @click="emit('close')"
      >
        <span v-html="item.icon"></span>
        <span
          :class="[
            'transition-all duration-1000 ease-in-out text-sm text-nowrap font-bold absolute -right-10',
            { 'inline-block right-8': isHovered, hidden: !isHovered },
          ]"
          >{{ item.title }}</span
        >
        <span
          :class="[
            'transition-all duration-1000 ease-in-out text-sm text-nowrap font-bold absolute xl:hidden inline-block right-10',
          ]"
          >{{ item.title }}</span
        >
      </RouterLink>
    </li>
  </ul>
</template>
