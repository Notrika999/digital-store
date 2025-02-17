<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '../stores/productStore'
import FilteredProducts from '@/components/FiltersMain.vue'
import ProductCard from '@/components/ProductCard.vue'
import SliderProductsTop from '@/components/SliderProductsTop.vue'
import SortProducts from '@/components/SortProducts.vue'

const store = useProductStore()
const route = useRoute()
const sliders = ref([])
const isShowMobileFilter = ref(false)

const toggleFilter = () => {
  isShowMobileFilter.value = !isShowMobileFilter.value
}

const category = computed(() => route.params.category || null)
const isCategoryPage = computed(() => route.meta.type === 'category')
const displayedProducts = computed(() => store.filteredProducts || [])
const isLoading = computed(() => store.isLoading)

const fetchSlider = async () => {
  sliders.value = []
  try {
    const response = await fetch('../../public/data/data.json')
    const data = await response.json()
    if (category.value) {
      sliders.value = data.sliders.filter((slider) => slider.category === category.value)
    }
  } catch (error) {
    console.error('Error fetching sliders:', error)
  }
}

onMounted(() => {
  store.fetchProducts(category.value)
  fetchSlider()
})

watch(
  category,
  (newCategory) => {
    store.fetchProducts(newCategory)
    if (newCategory) {
      fetchSlider()
    }
  },
  { immediate: true }, // اجرای فوری هنگام mount شدن کامپوننت
)
</script>

<template>
  <div v-if="isLoading">در حال بارگذاری...</div>
  <div v-else-if="error">خطا در دریافت اطلاعات</div>
  <!-- نمایش صفحه بر اساس وجود یا عدم وجود دسته‌بندی -->
  <div v-else>
    <!-- حالت نمایش همه محصولات -->
    <div v-if="!isCategoryPage" class="mt-6">
      <h2
        class="bg-white text-xl font-bold mb-4 mr-3 xl:mr-20 ml-3 text-[#2A2A2A] py-6 pr-3 rounded-lg"
      >
        همه محصولات
      </h2>

      <div class="flex mt-8 pl-3">
        <!-- سایدبار فیلتر -->
        <div class="ml-4 mr-20 px-6 py-4 rounded-lg bg-white xl:block hidden">
          <FilteredProducts />
        </div>

        <!-- بخش اصلی لیست محصولات -->
        <div class="flex-1 mr-3">
          <SortProducts @sortChanged="store.applySorting" />

          <div v-if="displayedProducts && displayedProducts.length === 0" class="text-gray-500">
            محصولی یافت نشد.
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            <ProductCard
              v-for="product in displayedProducts"
              :key="product.id"
              :productInfo="product"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- حالت نمایش دسته‌بندی خاص -->
    <div v-else class="mt-6">
      <h2
        class="bg-white text-xl font-bold mb-4 mr-3 xl:mr-20 ml-3 text-[#2A2A2A] py-6 pr-3 rounded-lg"
      >
        دسته‌بندی <span class="text-[#4E5252] text-2xl">{{ store.categoryTitle }}</span>
      </h2>

      <!-- نمایش اسلایدر اگر دسته‌بندی اسلایدر داشته باشد -->
      <div v-if="sliders.length">
        <SliderProductsTop :sliders="sliders[0]?.images" />
      </div>

      <!-- سکشن محصولات و فیلتر -->
      <div class="flex mt-8 pl-3">
        <!-- سایدبار فیلتر -->
        <div class="ml-4 mr-20 px-6 py-4 rounded-lg bg-white xl:block hidden">
          <FilteredProducts />
        </div>

        <!-- بخش اصلی لیست محصولات -->
        <div class="flex-1 mr-2">
          <div class="bg-white p-2 mb-4 rounded-md flex items-center justify-between">
            <button @click="toggleFilter" class="xl:hidden inline-block">
              <svg
                class="text-[#00f]"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  d="M10 10h4m-4 2h3M2.5 2.5h10v2L8.864 9v4.5l-2.728-1V9L2.5 4.5z"
                  stroke-width="1"
                />
              </svg>
            </button>

            <div v-if="isShowMobileFilter" class="bg-white">
              <FilteredProducts class="p-8" />

              <!-- دکمه بستن فیلتر -->
              <button @click="toggleFilter" class="xl:hidden inline-block fixed top-8 left-6 z-10">
                بستن x
              </button>
            </div>

            <SortProducts @sortChanged="store.applySorting" />
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            <ProductCard
              v-for="product in displayedProducts"
              :key="product.id"
              :productInfo="product"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
