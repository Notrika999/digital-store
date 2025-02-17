<script setup>
import SliderHomeTop from '@/components/SliderHomeTop.vue'
import BestCategoray from '@/components/BestCategoray.vue'
import AdverCart from '@/components/AdverCart.vue'
import TopSection from '@/components/TopSection.vue'
import RecommendedProducts from '@/components/RecommendedProducts.vue'
import NewProducts from '@/components/NewProducts.vue'
import SpecialDiscounts from '@/components/SpecialDiscounts.vue'
import BlogSection from '@/components/BlogSection.vue'
import { onMounted, ref } from 'vue'

const bestProducts = ref([])
const products = ref([])

onMounted(async () => {
  const response = await fetch('../../data/data.json')
  const data = await response.json()

  bestProducts.value = data.products?.filter((product) => product.bestProduct) || []
  products.value = data.products
})
</script>

<template>
  <div>
    <!-- Slider -->
    <SliderHomeTop />
    <!--  -->

    <!-- Categoray -->
    <BestCategoray />
    <!--  -->

    <!-- Advertise -->
    <div
      class="my-16 flex lg:justify-between justify-center items-center flex-wrap gap-y-2 gap-x-4 pr-3 xl:pr-20 pl-3"
    >
      <AdverCart />
    </div>
    <!--  -->

    <!-- Best Products -->
    <div v-if="products.length" class="bg-gradient-to-b from-blue-800 to-blue-500 py-10">
      <TopSection
        sectionTitle="بهترین پیشنهادات"
        color="text-white"
        link="#"
        class="pr-3 xl:pr-20"
      />

      <RecommendedProducts :products="bestProducts" />
    </div>
    <!--  -->

    <!-- New Product -->
    <div v-if="products.length" class="pr-3 xl:pr-20 pl-3 my-24 flex items-center overflow-hidden">
      <div
        class="hidden lg:block w-[18.75rem] py-6 px-2 rounded-md bg-gradient-to-b from-blue-950 to-neutral-800 group"
      >
        <div class="flex flex-col items-center gap-y-3">
          <h3 class="text-xl text-white font-bold">دریک قیمت مناسب</h3>
          <span class="font-bold text-white">ایفون 15</span>
          <button class="block py-1 px-3 my-2 bg-blue-500 text-sm text-white rounded-md">
            خرید
          </button>
        </div>
        <img
          src="../../public/images/products/iPhone 15 Pro Natural titanium.png"
          alt=""
          class="transition-transform duration-500 transform group-hover:scale-110"
        />
      </div>

      <div class="pr-6">
        <TopSection sectionTitle="محصولات جدید" color="text-black" link="#" />

        <NewProducts :products="products" />
      </div>
    </div>
    <!--  -->

    <!-- Offer -->
    <div class="bg-gradient-to-b from-rose-100 to-sky-100 py-10 pr-3 xl:pr-20 pl-3">
      <SpecialDiscounts />
    </div>
    <!--  -->

    <!-- Blog -->
    <div class="my-20 pr-3 xl:pr-20 pl-3">
      <TopSection sectionTitle="از وبلاگ بخوانید" color="text-black" link="#" />

      <BlogSection />
    </div>
    <!--  -->

    <!--  -->
    <div class="my-20 mr-3 xl:mr-20 ml-3 rounded-md bg-white p-4">
      <h2 class="text-xl font-bold">فروشگاه محصولات و تجهیزات الکترونیکی</h2>
      <p class="text-sm text-[#333] mt-3 mb-5">
        یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت
        مناسب را در مدت زمانی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛
        ویژگی‌هایی که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته از این
        طریق مشتریان ثابت خود را داشته باشد.
      </p>
      <h2 class="text-xl font-bold">کدام محصولات در دیجی‌کالا قابل سفارش هستند؟</h2>
      <p class="text-sm text-[#333] mt-3 mb-5">
        تقریبا می‌توان گفت محصولی وجود ندارد که دیجی‌کالا برای مشتریان خود در سراسر کشور فراهم نکرده
        باشد. شما می‌توانید در تمامی روزهای هفته و تمامی شبانه روز یا در روزهای خاصی مثل حراج شگفت
        انگیز دیجی‌کالا که محصولات دارای تخفیف عالی می‌شوند، سفارش خود را به سادگی ثبت کرده و در روز
        و محدوده زمانی مناسب خود، درب منزل تحویل بگیرید. بعضی از گروه‌های اصلی و زیر مجموعه‌های
        پرطرفدار محصولات دیجی‌کالا شامل مواردی می‌شود که در ادامه به معرفی آن‌ها می‌پردازیم.
      </p>
    </div>
    <!--  -->

    <!-- News -->
    <div class="bg-white py-10 px-20 mt-20 flex flex-col xl:flex-row items-center justify-around">
      <div class="border rounded-md">
        <input type="text" placeholder="ایمیل خود را وارد کن..." class="p-2 w-[25rem]" />
        <button class="py-3 px-3 bg-blue-500 text-sm text-white rounded-l-md">
          عضویت در خبرنامه
        </button>
      </div>
      <div class="flex items-center gap-x-3">
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 512 512">
            <path
              fill="#14ef07"
              fill-rule="evenodd"
              d="M414.73 97.1A222.14 222.14 0 0 0 256.94 32C134 32 33.92 131.58 33.87 254a220.6 220.6 0 0 0 29.78 111L32 480l118.25-30.87a223.6 223.6 0 0 0 106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 0 0 414.73 97.1M256.94 438.66h-.08a185.75 185.75 0 0 1-94.36-25.72l-6.77-4l-70.17 18.32l18.73-68.09l-4.41-7A183.46 183.46 0 0 1 71.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 0 1 185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52m101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78s-14.4 18-17.65 21.75s-6.5 4.16-12.07 1.38s-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26s.93-6.94-.46-9.71s-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52c-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 0 0-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38s39.3 59.73 95.21 83.76a323 323 0 0 0 31.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2c10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37s-5.11-3.71-10.69-6.48"
            />
          </svg>
        </a>

        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 1024 1024">
            <path
              fill="#fa1e1e"
              d="M940.736 189.696C912.992 169.728 835.68 143.2 511.728 143.2c-347.152 0-398.656 30.464-415.185 40.432C8.575 236.479.223 470.447-.544 517.887C.512 580.545 10.64 789.008 96.48 840.577c16.497 9.935 67.712 40.223 415.248 40.223c324.16 0 401.376-26.4 429.008-46.288c74.976-53.935 83.6-239.68 83.808-317.439c-.192-62.528-6.752-271.872-83.807-327.376zm-37.376 592.88c-11.152 8.032-75.186 34.223-391.634 34.223c-305.936 0-370.128-23.744-382.256-31.056c-30.88-18.528-63.472-116.88-66.031-268.032c2.528-150.816 35.568-260.912 66.097-279.216c12.16-7.344 76.591-31.28 382.19-31.28c316.192 0 380.4 26.369 391.633 34.433c27.409 19.744 56.752 123.68 57.184 275.632c-.432 154.336-29.968 245.712-57.184 265.296zM720.415 486.83L432.481 310.141a32 32 0 0 0-32.257-.464a32.02 32.02 0 0 0-16.288 27.872v353.44a32.016 32.016 0 0 0 32 32a32 32 0 0 0 16.527-4.592L720.4 541.645c9.6-5.807 15.472-16.19 15.472-27.407s-5.856-21.632-15.456-27.408zM447.953 634.301V394.204l194 120.032z"
            />
          </svg>
        </a>

        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
            <path
              fill="#002cf3"
              d="M13.458 21.696c4.693-.704 8.292-4.753 8.292-9.642c0-5.385-4.365-9.75-9.75-9.75s-9.75 4.365-9.75 9.75c0 4.89 3.599 8.938 8.292 9.642v-6.798h-2.05a.486.486 0 0 1-.486-.486v-1.843c0-.269.218-.486.486-.486h2.05l-.072-1.943c0-.942.175-2.471 1.342-3.307c.816-.583 1.423-.693 2.397-.693c.845 0 1.426.084 1.81.14l.188.025a.193.193 0 0 1 .168.192v2.04c0 .113-.095.2-.205.194h-.038c-.114.004-.71.029-1.216.029c-.89 0-1.458.406-1.458 1.755v1.568h2.192c.3 0 .529.27.48.566l-.28 1.843a.486.486 0 0 1-.479.406h-1.913z"
            />
          </svg>
        </a>

        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 1024 1024">
            <path
              fill="#ef07a1"
              d="M511 4c138 0 155 1 209 3c53 2 90 11 123 24c34 13 62 30 90 58s45 56 58 90c13 33 22 70 24 123c2 54 3 71 3 209s-1 155-3 209c-2 53-11 90-24 123c-13 34-30 62-58 90s-56 45-90 58c-33 13-70 22-123 24c-54 2-71 3-209 3s-155-1-209-3c-53-2-90-11-123-24c-34-13-62-30-90-58s-45-56-58-90C18 810 9 773 7 720c-2-54-3-71-3-209s1-155 3-209c2-53 11-90 24-123c13-34 30-62 58-90s56-45 90-58c33-13 70-22 123-24c54-2 71-3 209-3m0 66c-144 0-161 1-217 3c-52 2-81 12-100 19c-49 20-82 53-102 102c-7 19-17 48-19 100c-2 56-3 73-3 217s1 161 3 217c2 52 12 81 19 100c20 49 53 82 102 102c19 7 48 17 100 19c56 2 73 3 217 3s161-1 217-3c52-2 81-12 100-19c49-20 82-53 102-102c7-19 17-48 19-100c2-56 3-73 3-217s-1-161-3-217c-2-52-12-81-19-100c-20-49-53-82-102-102c-19-7-48-17-100-19c-56-2-73-3-217-3m0 644c112 0 203-91 203-203s-91-203-203-203s-203 91-203 203s91 203 203 203m0-463c144 0 260 116 260 260S655 771 511 771S251 655 251 511s116-260 260-260m332-10c0 34-28 60-62 60s-60-26-60-60s26-62 60-62s62 28 62 62"
            />
          </svg>
        </a>
      </div>
    </div>
    <!--  -->
  </div>
</template>
