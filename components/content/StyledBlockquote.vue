<template>
    <blockquote class="relative p-6 my-8 border-l-4 border-indigo-500 dark:border-purple-500 bg-gradient-to-r from-gray-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900/50 rounded-r-lg shadow-inner">
      <Icon name="fa6-solid:quote-left" class="absolute top-2 left-2 w-8 h-8 text-indigo-200 dark:text-purple-700 opacity-50" />
      <div class="relative z-10 text-lg italic text-gray-700 dark:text-gray-300 leading-relaxed">
        <slot />
      </div>
      <cite v-if="author" class="block text-right mt-4 text-sm font-medium text-gray-500 dark:text-gray-400">- {{ author }}</cite>
    </blockquote>
  </template>
  
  <script setup>
   defineProps({
     author: { type: String, required: false }
   })
  </script>