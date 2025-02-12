<script setup></script>

<template>
  <div class="flex items-center pr-3 lg:pr-20 pl-3 py-4 flex items-center bg-white">
    <div class="w-[3.2rem] h-[3rem] rounded-full overflow-hidden">
      <img src="../assets/logo.jpg" alt="logo" class="h-full">
    </div>
    <div class="search inline-block border rounded-3xl sm:w-6/12 w-full mx-4 overflow-hidden flex">
      <input type="text" placeholder="سرچ ..." class="p-2 grow" />
      <button class="pl-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="m21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607"
          />
        </svg>
      </button>
    </div>
    <span class="mr-auto text-sm sm:inline hidden "> پشتیبنانی 24/7 1111-111-011 </span>
  </div>
</template>
