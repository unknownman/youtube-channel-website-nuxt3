<template>
    <UApp>
    <div class="flex min-h-screen">
    <ui-sidebar />
    <main class="flex-1 p-4 md:p-8"> 
        <slot />
    </main>
    </div>
    </UApp>
</template>
