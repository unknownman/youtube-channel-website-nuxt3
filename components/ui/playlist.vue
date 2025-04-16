<template>
<section class="flex flex-col rounded-xl bg-gradient-to-b from-stone-50 to-stone-100 p-6 shadow-inner dark:from-gray-800 dark:to-gray-850">
        <div class="mb-4 flex items-center justify-between">
            <h2 class="text-xl font-semibold text-stone-800 dark:text-gray-100">{{ t("playlists") }}</h2>
            <Icon name="i-simple-line-icons-playlist" class="h-6 w-6 text-stone-500 dark:text-gray-400" />
        </div>

        <div v-if="pending" class="flex h-48 items-center justify-center text-stone-500 dark:text-gray-400 md:h-auto">
            <Icon name="i-line-md-loading-twotone-loop" class="h-8 w-8 animate-spin" /> 
            <span class="ms-2">{{ t('loading') }}</span>
        </div>

        <div v-else-if="error" class="flex h-48 flex-col items-center justify-center text-red-500 md:h-auto">
             <Icon name="i-heroicons-exclamation-triangle" class="h-8 w-8" />
             <p class="mt-2 text-center text-sm">{{ t('error.fetch') }}</p>
             <UButton @click="refreshPlaylists" color="red" variant="soft" size="xs" class="mt-4">
                {{ t('actions.retry') }}
             </UButton>
        </div>

        <div v-else-if="playlists && playlists.length > 0" 
            class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <NuxtLink v-for="playlist in playlists.value" :key="playlist.id"
                :to="`/playlist/${playlist.id}`"
                class="flex cursor-pointer items-center rounded-lg bg-white p-4 transition-shadow hover:shadow-md dark:bg-gray-800 dark:hover:bg-gray-700/50">
                <div class="flex min-w-0 flex-1 items-center">
                    <Icon name="i-heroicons-list-bullet" class="me-3 h-5 w-5 flex-shrink-0 text-stone-400 dark:text-gray-500" />
                    <div>
                        <h3 class="truncate text-sm font-medium text-stone-700 dark:text-gray-200">
                            {{ playlist.title }}
                        </h3>
                        <UBadge v-if="playlist.itemCount != null" color="gray" variant="subtle" size="xs" class="mt-1">
                            {{ playlist.itemCount }} {{ t('video', playlist.itemCount) }}
                        </UBadge>
                    </div>
                </div>
                <Icon name="i-heroicons-chevron-left" class="ms-3 h-4 w-4 flex-shrink-0 text-stone-400 dark:text-gray-500" />
            </NuxtLink>
        </div>

        <div v-else class="flex h-48 items-center justify-center text-stone-500 dark:text-gray-400 md:h-auto">
            <Icon name="i-heroicons-video-camera-slash" class="h-8 w-8" />
            <span class="ms-2">{{ t('playlists.empty') }}</span>
        </div>

    </section>
    </template>

<script setup>
const {t} = useI18n()
const {getPlaylists} = useYouTube()
const {
    playlists,
    status: pending,
    error,
    refresh: refreshPlaylists
} = getPlaylists()
</script>
