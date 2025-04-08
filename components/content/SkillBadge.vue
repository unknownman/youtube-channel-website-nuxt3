<template>
    <UBadge :color="color" variant="soft" size="lg" class="font-semibold tracking-wide transform hover:scale-105 transition-transform duration-200 cursor-default">
      <slot />
    </UBadge>
  </template>
  
  <script setup>
  defineProps({
    color: {
      type: String,
      default: 'primary' // Nuxt UI colors: primary, gray, blue, red, etc.
    }
  })
  </script>