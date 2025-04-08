<template>
    <div class="mb-12 text-center">
      <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl mb-4">
        <slot name="title">
          عنوان پیش‌فرض
        </slot>
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
        <slot name="description">
          توضیحات پیش‌فرض
        </slot>
      </p>
      <!-- Optional: Add an image or icon -->
       <Icon v-if="icon" :name="icon" class="w-16 h-16 mx-auto mt-6 text-primary-500" />
    </div>
  </template>
  
  <script setup>
  defineProps({
    icon: {
      type: String,
      required: false
    }
  })
  </script>