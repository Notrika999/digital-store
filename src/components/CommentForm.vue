<script setup>
import { ref } from 'vue'

const rating = ref(0)
const hoverRating = ref(0)
const comment = ref('')

const setRating = (value) => {
  rating.value = value
}

const submitReview = () => {
  if (!rating.value || !comment.value.trim()) {
    alert('لطفاً امتیاز داده و نظر خود را وارد کنید.')
    return
  }

  const review = {
    rating: rating.value,
    comment: comment.value,
  }

  console.log('نظر ارسال شد:', review)
  alert('نظر شما با موفقیت ثبت شد!')

  // پاک کردن فیلدها بعد از ارسال
  rating.value = 0
  comment.value = ''
}
</script>

<template>
  <div class="mx-auto p-4 bg-white shadow-lg rounded-lg">
    <h2 class="text-lg font-semibold text-gray-800 mb-4">نظر خود را ثبت کنید</h2>

    <!-- امتیازدهی -->
    <div class="flex items-center mb-4">
      <span
        v-for="star in 5"
        :key="star"
        @click="setRating(star)"
        @mouseover="hoverRating = star"
        @mouseleave="hoverRating = 0"
        class="cursor-pointer text-3xl transition-colors duration-200"
        :class="star <= (hoverRating || rating) ? 'text-yellow-500' : 'text-gray-300'"
      >
        ★
      </span>
    </div>

    <!-- کادر متن نظر -->
    <textarea
      v-model="comment"
      placeholder="نظر خود را بنویسید..."
      class="w-full p-2 border rounded-md resize-none outline-none focus:border"
      rows="6"
    ></textarea>

    <!-- دکمه ارسال -->
    <button
      @click="submitReview"
      class="mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
    >
      ارسال نظر
    </button>
  </div>
</template>

<style scoped>
/* استایل اضافی در صورت نیاز */
</style>
