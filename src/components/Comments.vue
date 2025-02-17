<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({ productID: { type: String, required: true } })

const productComments = ref([])

const replyingTo = ref(null)
const replyText = ref('')

const toggleReplyForm = (commentId) => {
  replyingTo.value = replyingTo.value === commentId ? null : commentId
  replyText.value = ''
}

const fetchComments = async () => {
  const response = await fetch('../../data/data.json')
  const data = await response.json()
  productComments.value = data.productsComments.find((cat) => cat.productId == props.productID)
}

onMounted(() => {
  fetchComments()
})
</script>

<template>
  <div v-if="productComments.comments" class="mx-auto mt-1 p-4 bg-white shadow-lg rounded-lg">
    <h2 class="text-lg font-semibold text-gray-800 mb-4">نظرات کاربران</h2>

    <!-- نمایش لیست نظرات -->
    <div v-for="comment in productComments.comments" :key="comment.id" class="mb-6">
      <div class="p-4 border rounded-lg bg-gray-100">
        <p class="text-gray-800">
          <strong>{{ comment.user }}</strong
          >: {{ comment.text }}
        </p>
        <p v-if="comment.replies.length" class="p-4 text-gray-800">
          <span v-for="rep in comment.replies" :key="rep.id">
            <strong>{{ rep.user }}</strong
            >: {{ rep.text }}
          </span>
        </p>

        <div class="flex items-center gap-2 mt-2">
          <span class="text-sm text-gray-500">⭐ {{ comment.rating }}</span>
          <button @click="toggleReplyForm(comment.id)" class="text-blue-500 text-sm">
            پاسخ دهید
          </button>
        </div>
      </div>

      <!-- فرم پاسخ -->
      <div v-if="replyingTo === comment.id" class="mt-2 ml-6">
        <textarea
          v-model="replyText"
          placeholder="پاسخ خود را بنویسید..."
          class="w-full p-2 border rounded-md focus:ring focus:ring-blue-300 resize-none"
          rows="2"
        ></textarea>
        <button
          @click="submitReply(comment.id)"
          class="mt-2 bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600 transition"
        >
          ارسال پاسخ
        </button>
      </div>

      <!-- نمایش پاسخ‌ها -->
      <div v-if="comment.replies.length" class="ml-6 mt-3">
        <div
          v-for="reply in comment.replies"
          :key="reply.id"
          class="p-3 border-l-4 border-blue-500 bg-gray-50 rounded-lg"
        >
          <p class="text-gray-700">
            <strong>{{ reply.user }}</strong
            >: {{ reply.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
