<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import FilteredProducts from "@/components/FilteredProducts.vue";
import MainCategories from '@/components/MainCategories.vue';
import ProductCard from '@/components/ProductCard.vue';
import SliderHomeTop from '@/components/SliderHomeTop.vue';

// مقدار پیش‌فرض محدوده قیمت
const priceRange = ref([0, 10000000]);

// لیست محصولات
const products = ref([]);
const productsCategories = ref([]);
const isFilterApplied = ref(false);
const isLoading = ref(false);

// دریافت اطلاعات دسته‌بندی از روت
const route = useRoute();
const category = computed(() => route.params.category || null);
const isCategoryPage = computed(() => {
  const categoryType = route.meta.type;
  return categoryType === 'category';
});

// محاسبه محصولات فیلتر شده برای حالت همه محصولات
const filteredProducts = computed(() =>
  products.value.filter(
    (product) =>
      product.price >= priceRange.value[0] && product.price <= priceRange.value[1]
  )
);

// محاسبه محصولات فیلتر شده برای حالت دسته‌بندی خاص
const filteredCategoryProducts = computed(() =>
  productsCategories.value.filter(
    (product) =>
      product.price >= priceRange.value[0] && product.price <= priceRange.value[1]
  )
);

// محصولات نهایی که باید نمایش داده شوند
const displayedProducts = computed(() => {
  if (!isFilterApplied.value) {
    return isCategoryPage.value ? productsCategories.value : products.value;
  }
  return isCategoryPage.value ? filteredCategoryProducts.value : filteredProducts.value;
});

// تابع برای به‌روزرسانی قیمت فیلتر
const updatePriceFilter = (newRange) => {
  priceRange.value = newRange;
  isFilterApplied.value = true;
};

// تابع برای دریافت داده‌ها
async function fetchData(category = null) {
  isLoading.value = true;
  const response = await fetch('/data.json');
  const data = await response.json();

  if (!category) {
    products.value = data.products;
  } else {
    productsCategories.value = data.products.filter((product) => product.category === category);
  }

  isLoading.value = false;
  console.log("kir khar");
}

// هنگام لود اولیه داده‌ها را بارگذاری می‌کند
onMounted(() => {
  fetchData(route.params.category);
});

// هنگام تغییر دسته‌بندی داده‌های جدید را بارگذاری می‌کند
watch(
  () => route.params.category,
  (newCategory) => {
    isFilterApplied.value = false;
    fetchData(newCategory);
  }
);
</script>

<template>
  <div v-if="isLoading">در حال بارگذاری...</div>
  <!-- نمایش صفحه بر اساس وجود یا عدم وجود دسته‌بندی -->
  <div>
    <!-- حالت نمایش همه محصولات -->
    <div v-if="!isCategoryPage">
      <h2 class="my-3 pr-20 pl-3">دسته‌بندی‌های اصلی</h2>
      <MainCategories class="pr-20 pl-3" />
      <div class="flex mt-16 pl-3">
        <!-- سایدبار فیلتر -->
        <div class="w-1/5 ml-4 pr-20 bg-white">
          <FilteredProducts :initialPriceRange="priceRange"
          :onPriceChange="updatePriceFilter" />
        </div>

        <!-- بخش اصلی لیست محصولات -->
        <div class="flex-1">
          <div class="flex flex-wrap justify-between gap-y-4">
            <ProductCard v-for="product in displayedProducts" :key="product.id" :productInfo="product" />
          </div>
        </div>
      </div>
    </div>

    <!-- حالت نمایش دسته‌بندی خاص -->
    <div v-else>
      <h2 class="text-lg font-bold mb-4 pr-20">محصولات دسته‌بندی: {{ category }}</h2>

      <!-- نمایش اسلایدر اگر دسته‌بندی اسلایدر داشته باشد -->
      <div>
        <SliderHomeTop />
      </div>

      <!-- نمایش زیرمجموعه‌های دسته‌بندی -->
      <div v-if="categoryHasSubCategories">
        <h3 class="text-md font-semibold">زیرمجموعه‌های دسته‌بندی</h3>
        <!-- زیرمجموعه‌های دسته‌بندی را اینجا نمایش دهید -->
      </div>

      <!-- سکشن محصولات و فیلتر -->
      <div class="flex mt-16 pl-3">
        <!-- سایدبار فیلتر -->
        <div class="w-1/5 ml-4 pr-24 bg-white">
          <FilteredProducts
            :initialPriceRange="priceRange"
            :onPriceChange="updatePriceFilter"
          />
        </div>

        <!-- بخش اصلی لیست محصولات -->
        <div class="flex-1">
          <div class="flex flex-wrap justify-between gap-y-2">
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
