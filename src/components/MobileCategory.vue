<script setup>
import Categoray from "./Categoray.vue";

defineEmits(['close']);
</script>

<template>
  <div
    class="fixed inset-0 z-50 border border-l bg-white duration-200"
  >
      <div class="sidbar-menu mt-3 px-2">
        <Categoray @close="$emit('close')" />
      </div>

  </div>
</template>
