<script setup>
const route = useRoute()
const { data:page } = await useAsyncData(route.path, () => {
    return queryCollection("content").path(route.path).first()

})
</script>

<template>
    <div dir="rtl">
        <ContentRenderer v-if="page" :value="page" />
    </div>

</template>