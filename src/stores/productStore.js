// stores/productStore.js
import { defineStore } from 'pinia';
import { ref, watch } from "vue";

export const useProductStore = defineStore("productStore", () => {
  // ذخیره فیلترها، فیلترهای انتخاب‌شده و محصولات
  const categoryTitle = ref("")
  const subCategories = ref([])
  const filters = ref({});
  const selectedFilters = ref({});
  const products = ref([]);
  const filteredProducts = ref([]);
  const isLoading = ref(false);

  // دریافت فیلترها بر اساس دسته‌بندی
  const fetchFilters = async (category) => {
    try {
      const response = await fetch("../../data.json");
      const data = await response.json();
      const categoryData = data.categories.find((cat) => cat.link === category);
      filters.value = categoryData ? categoryData.filters : {};
      categoryTitle.value = categoryData ? categoryData.title : {};
      subCategories.value = categoryData ? categoryData.subCategories : [];
      console.log("Fetched filters:", filters.value);
    } catch (error) {
      console.error("Error fetching filters:", error);
    }
  };

  // دریافت محصولات بر اساس دسته‌بندی
  const fetchProducts = async (category = null) => {
    isLoading.value = true;
    try {
      const response = await fetch("../../data.json");
      const data = await response.json();
      products.value = category
        ? data.products.filter((product) => product.category === category)
        : data.products;
      applyFilters(); // اعمال فیلترها بعد از دریافت محصولات
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      isLoading.value = false;
    }
  };

  // اعمال فیلترها بر روی محصولات
  const applyFilters = () => {
    filteredProducts.value = products.value.filter((product) =>
      Object.entries(selectedFilters.value).every(([key, values]) => {
        const productValue = key in product ? product[key] : product.technicalSpecifications?.[key];
        return values.length === 0 || values.includes(productValue);
      })
    );
  };

  // اضافه کردن فیلتر
  const applyFilter = (key, value) => {
    if (value === "انتخاب کنید") {
      Reflect.deleteProperty(selectedFilters.value, key)
    } else {
      selectedFilters.value[key] = value; // مقداردهی با مقدار جدید
    }
    applyFilters(); // اعمال فیلترها
  };

  const applySorting = (sortType) => {
    if (sortType === "latest") {
      products.value.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sortType === "priceHigh") {
      products.value.sort((a, b) => b.price - a.price);
    } else if (sortType === "priceLow") {
      products.value.sort((a, b) => a.price - b.price);
    } else if (sortType === "rating") {
      products.value.sort((a, b) => b.rating - a.rating);
    }
  };


  // حذف فیلتر
  const removeFilter = (key, value) => {
    selectedFilters.value[key] = selectedFilters.value[key].filter((v) => v !== value);
    if (selectedFilters.value[key].length === 0) {
      delete selectedFilters.value[key];
    }
    applyFilters();
  };

  // نظارت بر تغییرات فیلترها و اعمال آنها
  watch(selectedFilters, applyFilters, { deep: true });

  return {
    categoryTitle,
    subCategories,
    filters,
    selectedFilters,
    products,
    filteredProducts,
    isLoading,
    fetchFilters,
    fetchProducts,
    applyFilter,
    applySorting,
    removeFilter
  };
});
