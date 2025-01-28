<script setup>
import { computed, watch } from "vue";
import { useProductStore } from "@/stores/productStore";

// مقداردهی اولیه استور
const productStore = useProductStore();

// پراپ‌ها
const props = defineProps({
  category: {
    type: String,
    default: null,
  },
  isCategoryPage: {
    type: Boolean,
    default: false,
  },
});

// فیلتر محصولات براساس دسته‌بندی (یا نمایش همه)
const filteredProducts = computed(() => {
  if (props.category) {
    // نمایش محصولات مرتبط با دسته‌بندی
    return productStore.allProducts.filter(
      (product) => product.category === props.category
    );
  }
  // اگر دسته‌بندی انتخاب نشده باشد، تمام محصولات را برگرداند
  return productStore.products;
});

// نظارت بر تغییرات دسته‌بندی یا ورود مستقیم از نوبار
watch(
  () => props.category,
  (newCategory) => {
    if (!newCategory) {
      // اگر دسته‌بندی مشخص نشده باشد، تمام محصولات را دریافت کن
      productStore.fetchProducts();
    } else {
      // دریافت محصولات مربوط به دسته‌بندی مشخص
      productStore.fetchProducts(newCategory);
    }
  },
  { immediate: true } // اجرا در بارگذاری اولیه
);
</script>

<template>
  <div>
    <!-- عنوان صفحه -->
    <h1 v-if="props.isCategoryPage && props.category">
      نمایش محصولات دسته‌بندی: {{ props.category }}
    </h1>
    <h1 v-else>تمام محصولات</h1>

    <!-- لیست محصولات -->
    <ul>
      <li v-for="product in filteredProducts" :key="product.id">
        <h2>{{ product.title }}</h2>
        <p>{{ product.description }}</p>
        <span>قیمت: {{ product.price }} تومان</span>
      </li>
    </ul>
  </div>
</template>
