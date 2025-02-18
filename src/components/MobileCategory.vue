<script setup>
import Categoray from "./Categoray.vue";

defineEmits(['close']);
</script>

<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-end"
  >
      <div class="sidbar-menu mt-3 px-2 bg-white w-full rounded-t-lg p-4">
        <button @click="$emit('close')" class="text-gray-500 text-xl float-left">✖</button>

        <Categoray @close="$emit('close')" />
      </div>

  </div>
</template>
