<template>
    <nav>
        <ul class="space-y-3">
            <li>
                <nuxt-link to="/" class="flex items-center justify-center rounded-lg bg-cool-200 p-3 text-cool-600"
                    title="خانه" aria-label="خانه">
                    <Icon name="i-simple-line-icons-home" />
                </nuxt-link>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center rounded-lg p-3 text-cool-600 hover:bg-cool-100"
                    title="پلی لیست ها" aria-label="پلی لیست ها">
                    <Icon name="i-simple-line-icons-playlist"></Icon>
                </a>
            </li>
            <li>
                <nuxt-link to="/page/contact" class="flex items-center justify-center rounded-lg p-3 text-cool-600 hover:bg-cool-100"
                    title="ارتباط با ما" aria-label="ارتباط با ما">
                    <Icon name="i-simple-line-icons-envelope"></Icon>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/page/about" class="flex items-center justify-center rounded-lg p-3 text-cool-600 hover:bg-cool-100"
                    title="درباره ما" aria-label="درباره ما">
                    <Icon name="i-simple-line-icons-exclamation"></Icon>
                </nuxt-link>
            </li>
        </ul>
    </nav>
</template>
