<script setup></script>

<template>
  <section>
    <div class="flex flex-col items-center justify-center py-10">
      <div class="w-full bg-white rounded-lg shadow sm:max-w-md">
        <div class="p-6 flex flex-col gap-y-5 items-center">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-primary-700"
          >
            ورود
          </h1>

          <input
            type="email"
            name="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 text-primary-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="شماره موبایل"
            required=""
          />

          <button
            type="submit"
            class="py-3 px-12 mx-auto my-2 bg-blue-500 hover:bg-blue-600 text-sm text-white rounded-md"
          >
            ورود
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
