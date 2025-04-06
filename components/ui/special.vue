<template>
    <section class="flex flex-col rounded-xl bg-white p-6">
        <h2 class="mb-4 text-xl font-semibold text-stone-800">{{ t("special") }}</h2>
        <div class="aspect-w-16 aspect-h-9 mt-auto flex-1">
            <ScriptYouTubePlayer :video-id="useRuntimeConfig().public.specialVideoId">
                <template #loading>
                    <div class="bg-blue-500 text-white p-5">
                        {{ t('loading') }} ...
                    </div>
                </template>
            </ScriptYouTubePlayer>
        </div>
    </section>
</template>

<script setup>
const { t } = useI18n()
</script>
