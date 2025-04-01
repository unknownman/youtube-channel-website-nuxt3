<template>
    <section
        class="flex flex-col rounded-md bg-gradient-to-br from-stone-50 to-stone-200 p-6 shadow-inner inset-shadow-2xs inset-shadow-zinc-200">
        <h2 class="mb-4 text-xl font-semibold text-stone-800">{{t("shorts")}}</h2>
        <div class="-mr-2 h-60 flex-1 space-y-3 overflow-y-auto pr-2 md:h-auto">
            <div
                class="flex cursor-pointer items-center rounded-lg bg-stone-50 p-2 transition-colors hover:bg-stone-100">
                <img src="https://picsum.photos/200" alt="Short 1"
                    class="mr-3 h-20 w-14 flex-shrink-0 rounded-md object-cover" />
                <div class="min-w-0">
                    <h3 class="truncate text-sm font-medium text-stone-800">عنوان ویدیوی کوتاه اول که ممکن است طولانی
                        باشد</h3>
                    <p class="text-xs text-stone-500">1.2 هزار بازدید</p>
                </div>
            </div>
            <div
                class="flex cursor-pointer items-center rounded-lg bg-stone-50 p-2 transition-colors hover:bg-stone-100">
                <img src="https://picsum.photos/202" alt="Short 2"
                    class="mr-3 h-20 w-14 flex-shrink-0 rounded-md object-cover" />
                <div class="min-w-0">
                    <h3 class="truncate text-sm font-medium text-stone-800">عنوان شورت دوم</h3>
                    <p class="text-xs text-stone-500">870 بازدید</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const {t} = useI18n()
</script>
