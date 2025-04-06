<template>
    <section
        class="flex flex-col rounded-md bg-gradient-to-br from-stone-50 to-stone-200 p-6 shadow-inner inset-shadow-2xs inset-shadow-zinc-200">
        <h2 class="mb-4 text-xl font-semibold text-stone-800">{{t("shorts")}}</h2>
        <div v-if="loading" class="flex justify-center items-center h-60">
            <span class="text-stone-500">در حال بارگذاری...</span>
        </div>
        <div v-else-if="error" class="flex justify-center items-center h-60">
            <span class="text-red-500">خطا در بارگذاری ویدیوها</span>
        </div>
        <div v-else class="-mr-2 h-60 flex-1 space-y-3 overflow-y-auto pr-2 md:h-auto">
            <div v-for="short in latestShorts" :key="short.videoId"
                class="flex cursor-pointer items-center rounded-lg bg-stone-50 p-2 transition-colors hover:bg-stone-100">
                <img :src="short.thumbnail" :alt="short.title"
                    class="mr-3 h-20 w-14 flex-shrink-0 rounded-md object-cover" />
                <div class="min-w-0">
                    <h3 class="truncate text-sm font-medium text-stone-800">{{ short.title }}</h3>
                    <p class="text-xs text-stone-500">{{ short.views }} بازدید</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const {t} = useI18n()
const { getLatestShorts } = useYouTube();
const { shorts, error, status } = getLatestShorts();
const latestShorts = computed(() => {
    let selected = shorts.value.slice(0, 6);
    return selected;
});

</script>
