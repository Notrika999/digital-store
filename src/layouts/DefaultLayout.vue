<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div>
    <!-- Header -->
    <Header />

    <!-- Main Content -->
    <main class="pr-14">
      <slot />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<style scoped></style>
