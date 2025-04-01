<template>
    <section class="flex flex-col rounded-xl bg-white p-6">
        <h2 class="mb-4 text-xl font-semibold text-stone-800">{{t("special")}}</h2>
        <div class="aspect-w-16 aspect-h-9 mt-auto flex-1">
            <iframe class="h-full w-full rounded-lg" src="https://www.youtube.com/embed/[VIDEO_ID]"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen> </iframe>
        </div>
    </section>
</template>

<script setup>
    const {t} = useI18n()
</script>
