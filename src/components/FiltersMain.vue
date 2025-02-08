<script setup>
import { ref, watch, computed, onMounted, defineProps, defineEmits, nextTick  } from 'vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '../stores/productStore'

const store = useProductStore()
const route = useRoute()
const props = defineProps({
  modelValue: Boolean, // مقدار باید بولی باشد
});
// const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const filters = computed(() => store.filters || {})
const selectedFilters = computed(() => store.selectedFilters)

const priceRange = ref(props.modelValue ? [...props.modelValue] : [0, 10000000])

const applyFilter = (key, value) => {
  if (value) store.applyFilter(key, value)
}

const removeFilter = (key, value) => {
  if (selectedFilters.value[key] === value) {
    Reflect.deleteProperty(selectedFilters.value, key)
  }
};

// دریافت دسته‌بندی از مسیر و لود فیلترها از JSON
onMounted(() => {
  store.fetchFilters(route.params.category)
})

watch(
  () => route.params.category,
  (newCategory) => {
    store.fetchFilters(newCategory)
  },
)

watch(priceRange, (newValue) => {
  emit('update:modelValue', newValue)
})

</script>

<template>
  <div class="filter-container lg:static fixed  inset-0 bg-white z-10">
    <h2 class="text-lg text-[#2A2A2A] font-semibold mb-4">فیلترها</h2>

    <!-- بررسی مقدار filters قبل از نمایش -->
    <div v-if="filters && Object.keys(filters).length">
      <div v-for="(options, filterKey) in filters" :key="filterKey">
        <label class="block font-medium text-gray-700 pt-2 mt-8 ">{{ filterKey }}</label>
        <select
          v-model="selectedFilters[filterKey]"
          @change="(e) => applyFilter(filterKey, e.target.value)"
          class="w-full px-2 border-b outline-none"
        >
          <option value="انتخاب کنید">
            ---
          </option>
          <option v-for="option in options" :key="option" :value="option">
            {{ option }}
          </option>
        </select>
      </div>
    </div>

    <div v-else>
      <p>دریافت اطلاعات فیلتر...</p>
    </div>

    <div class="mt-4">
      <h3 class="text-sm font-medium">فیلترهای انتخاب‌شده:</h3>
      <div class="flex flex-col items-start gap-2 mt-2">
        <span
          v-for="(values, key) in selectedFilters"
          :key="key"
          class="bg-blue-500 text-white px-3 py-1 rounded-md cursor-pointer"
          @click="removeFilter(key, values)"
        >
          {{ values }} ×
        </span>
      </div>
    </div>
  </div>
</template>
