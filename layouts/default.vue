<template>
    <UApp>
        <div class="flex min-h-screen">
            <ui-sidebar />
            <main class="flex-1 p-4 md:p-8">
                <USlideover class="md:hidden">
                    <UButton color="cool" icon="i-simple-line-icons-menu" variant="subtle" />
                    <template #content>
                        <ui-sidebar-navigation />
                    </template>
                </USlideover>
                <slot />
            </main>
        </div>
    </UApp>
</template>
