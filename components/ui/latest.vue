<template>
    <section class="overflow-hidden rounded-xl bg-white p-6 shadow-stone-100 drop-shadow-2xl">
        <h2 class="mb-4 text-xl font-semibold text-stone-800">{{ t("latest") }}</h2>
        <div v-if="status === 'pending'"
            class="flex h-64 items-center justify-center rounded-lg bg-stone-100 text-stone-500 md:h-80">
            <span>در حال بارگذاری...</span>
        </div>
        <div v-else-if="error"
            class="flex h-64 items-center justify-center rounded-lg bg-stone-100 text-red-500 md:h-80">
            <span>خطا در بارگذاری ویدیوها</span>
        </div>
        <div v-else class="space-y-4">
            <div v-for="video in latestVideos" :key="video.videoId" class="relative rounded-lg overflow-hidden shadow-lg group">
                <img :src="video.thumbnail" :alt="video.title" class="w-full h-64 object-contain object-top" />
                <div class="absolute top-0 left-0 w-full bg-gradient-to-b from-black via-transparent to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 class="text-lg font-semibold text-white">{{ video.title }}</h3>
                    <p class="text-sm text-gray-300">{{ video.publishedAt | formatDate }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const { t } = useI18n();
const { getLatestVideos } = useYouTube();

const loading = ref(true);
const error = ref(null);

const { videos: fetchedVideos, status, refresh } = getLatestVideos();

const latestVideos = computed(() => {
    let selected = fetchedVideos.value.slice(0, 6);
    return selected;
});
</script>

<script>
// Define the 'formatDate' filter
export default {
    filters: {
        formatDate(value) {
            if (!value) return '';
            const date = new Date(value);
            return date.toLocaleDateString('fa-IR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            });
        },
    },
};
</script>