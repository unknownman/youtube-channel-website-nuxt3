<template>
        <section class="overflow-hidden rounded-xl bg-white p-6 shadow-2xl shadow-stone-100 drop-shadow-2xl lg:col-span-2">
          <h2 class="mb-4 text-xl font-semibold text-stone-800">{{ t("featured") }}</h2>
          <div class="flex h-64 items-center justify-center rounded-lg bg-stone-100 text-stone-500 md:h-80">
          </div>
        </section>
</template>

<script setup>
const {t} = useI18n()
</script>
