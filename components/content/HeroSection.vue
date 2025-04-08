<template>
    <div class="relative py-16 sm:py-24 overflow-hidden rounded-b-xl mb-12 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 dark:from-black dark:via-gray-900 dark:to-purple-900 shadow-2xl">
      <!-- Pattern background -->
      <div class="absolute inset-0 mix-blend-multiply">
         <svg class="absolute inset-0 h-full w-full" width="100%" height="100%" fill="none" viewBox="0 0 100 100" preserveAspectRatio="none">
           <!-- Example simple pattern: Subtle dots -->
           <defs>
             <pattern id="dot-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
               <circle cx="1" cy="1" r="1" class="text-gray-700 dark:text-gray-800 opacity-30" fill="currentColor"/>
             </pattern>
           </defs>
           <rect width="100%" height="100%" fill="url(#dot-pattern)" />
         </svg>
      </div>
  
      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Icon v-if="icon" :name="icon" class="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 text-indigo-400 dark:text-purple-400" />
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 mb-4">
          <slot name="title">عنوان جذاب</slot>
        </h1>
        <p class="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-300 dark:text-gray-400 max-w-2xl mx-auto">
          <slot name="subtitle">یک توضیح کوتاه و گیرا</slot>
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    icon: { type: String, required: false }
  })
  </script>