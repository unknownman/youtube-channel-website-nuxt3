<template>
    <div class="space-y-8" :dir="isRTL ? 'rtl' : 'ltr'">
        <header class="relative overflow-hidden rounded-xl bg-gradient-to-br from-stone-800 to-stone-900 p-8">
            <div class="absolute inset-0 bg-pattern opacity-10"></div>
            <div class="relative z-10">
                <div class="flex items-center gap-4">
                    <Icon name="i-heroicons-play-circle" class="h-12 w-12 text-stone-200" 
                        :class="isRTL ? 'ml-3' : 'mr-3'" />
                    <div>
                        <h1 class="text-3xl font-bold text-white">{{ t('playlist.title') }}: {{ playlist?.title }}</h1>
                        <p v-if="playlist?.description" class="mt-2 text-lg text-stone-300">
                            {{ t('playlist.description') }}: {{ playlist?.description }}
                        </p>
                    </div>
                </div>
                <UBadge color="white" class="mt-4">
                    {{ playlist?.itemCount }} {{ t('video', playlist?.itemCount) }}
                </UBadge>
            </div>
        </header>

        <section class="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800">
            <div v-if="status === 'pending'" class="flex h-64 items-center justify-center">
                <ULoadingIcon class="h-8 w-8 text-stone-500" />
                <span :class="isRTL ? 'mr-3' : 'ml-3'" class="text-stone-500">{{ t('loading') }}...</span>
            </div>
            
            <div v-else-if="error" class="flex h-64 flex-col items-center justify-center">
                <Icon name="i-heroicons-exclamation-circle" class="h-12 w-12 text-red-500" />
                <p class="mt-4 text-red-500">{{ t('error.fetch') }}</p>
                <UButton @click="refresh" color="red" variant="soft" size="sm" class="mt-4">
                    <Icon name="i-heroicons-arrow-path" 
                        :class="[isRTL ? 'ml-1' : 'mr-1', 'h-4 w-4']" />
                    {{ t('actions.retry') }}
                </UButton>
            </div>

            <div v-else class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <UCard v-for="video in videos" :key="video.videoId" 
                    class="group transition-transform hover:-translate-y-1">
                    <template #header>
                        <div class="relative aspect-video overflow-hidden rounded-t-xl">
                            <img :src="video.thumbnail" :alt="video.title" 
                                class="h-full w-full object-cover transition-transform group-hover:scale-105" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                            <Icon name="i-heroicons-play-circle" 
                                class="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition-opacity group-hover:opacity-100" />
                        </div>
                    </template>

                    <h3 class="line-clamp-2 text-lg font-semibold text-stone-800 dark:text-white">
                        {{ video.title }}
                    </h3>
                    
                    <template #footer>
                        <div class="flex items-center justify-between text-sm text-stone-500 dark:text-gray-400">
                            <time :datetime="video.publishedAt">
                                {{ t('playlist.publishDate') }}: {{ formatDate(video.publishedAt, locale) }}
                            </time>
                            <UBadge color="gray" variant="subtle" size="xs">
                                <Icon name="i-heroicons-clock" 
                                    :class="[isRTL ? 'ml-1' : 'mr-1', 'h-3 w-3']" />
                                {{ t('playlist.duration') }}: {{ video.duration || 'N/A' }}
                            </UBadge>
                        </div>
                    </template>
                </UCard>
            </div>
        </section>
    </div>
</template>

<script setup>
const route = useRoute();
const { t, locale } = useI18n();
const { isRTL } = useDirection();
const { getPlaylistVideos, getPlaylists } = useYouTube();

const { playlists } = getPlaylists();
const { videos, status, error, refresh } = getPlaylistVideos(route.params.id);

const playlist = computed(() => {
    return playlists.value?.find(p => p.id === route.params.id);
});

function formatDate(date, locale) {
    return new Date(date).toLocaleDateString(locale === 'fa' ? 'fa-IR' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}
</script>

<style>
.bg-pattern {
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm5.656 0L19.515 8.485 17.343 10.657l7.9-7.9h2.757zm5.656 0l-6.485 6.485L25.515 8.14l7.9-7.9h-.714zm5.657 0l-4.243 4.242L33.414 5.656 41.313 0h-2.656zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm5.656 0L19.515 8.485 17.343 10.657l7.9-7.9h2.757zm5.656 0l-6.485 6.485L25.515 8.14l7.9-7.9h-.714zm5.657 0l-4.243 4.242L33.414 5.656 41.313 0h-2.656zM45.657 0l-2 2L41.9 0h3.757zM14.343 0l2 2L18.1 0h-3.757zM8.687 0L0 8.687v2.656L11.343 0H8.687zm37.97 0l-8.686 8.686v2.656L49.313 0h-2.656zM0 14.343v2.656L16.97 0h-2.656L0 14.343zM47.03 0L60 12.97v2.656L44.373 0h2.657zm12.97 47.03L47.03 60h2.657L60 49.687v-2.657zm0-9.657L38.686 60h2.657L60 40.03v-2.657z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
}
</style>