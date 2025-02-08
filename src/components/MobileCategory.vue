<script setup>
import Categoray from "./Categoray.vue";

defineEmits(['close']);
</script>

<template>
  <div
    class="fixed top-0 right-0 bottom-0 left-0 z-50 border border-l bg-white duration-200"
  >
      <div class="sidbar-menu mt-3 px-2">
        <Categoray @close="$emit('close')" />
      </div>

  </div>
</template>
