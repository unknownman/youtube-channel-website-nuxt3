<template>
    <UCard :ui="{ ring: 'ring-1 ring-gray-200 dark:ring-gray-700 hover:ring-primary-500 dark:hover:ring-primary-400 transition-all', divide: 'divide-y-0' }">
      <template #header>
        <div class="flex items-center">
          <Icon :name="icon" class="w-6 h-6 mr-3 text-primary-500" />
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ title }}</h3>
        </div>
      </template>
  
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        <slot />
      </p>
  
      <UButton
        :icon="buttonIcon || 'i-heroicons-arrow-top-right-on-square-20-solid'"
        :label="buttonLabel"
        :color="buttonColor || 'primary'"
        variant="soft"
        href="url"
        target="_blank"
        block
        size="md"
      />
    </UCard>
  </template>
  
  <script setup>
  defineProps({
    icon: String,
    title: String,
    url: String,
    buttonLabel: String,
    buttonIcon: String,
    buttonColor: String,
  })
  </script>