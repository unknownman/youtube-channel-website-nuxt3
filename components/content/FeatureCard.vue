<template>
    <div class="group relative p-6 bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:border-indigo-500 dark:hover:border-purple-500 overflow-hidden">
      <!-- Subtle animated background element on hover -->
      <div class="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500 group-hover:duration-200 animate-tilt"></div>
  
      <div class="relative">
        <div class="flex items-center mb-4">
          <span v-if="icon" class="inline-flex justify-center items-center w-10 h-10 rounded-lg bg-indigo-100 dark:bg-purple-900/50 mr-4">
            <Icon :name="icon" class="w-6 h-6 text-indigo-600 dark:text-purple-400" />
          </span>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            <slot name="title">ویژگی</slot>
          </h3>
        </div>
        <div class="text-gray-600 dark:text-gray-400 prose prose-sm dark:prose-invert max-w-none">
          <slot />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    icon: { type: String, required: false }
  })
  </script>
  
  <style scoped>
   /* Animation for the tilt effect background */
   @keyframes tilt {
      0%, 50%, 100% { transform: rotate(0deg); }
      25% { transform: rotate(0.5deg); }
      75% { transform: rotate(-0.5deg); }
    }
   .animate-tilt {
      animation: tilt 5s ease-in-out infinite;
    }
  </style>