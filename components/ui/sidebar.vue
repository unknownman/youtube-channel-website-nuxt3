<template>
<aside class="hidden w-20 flex-col justify-between bg-white bg-gradient-to-b from-slate-50 to-cool-100 p-4 shadow-zinc-200 drop-shadow-2xl md:sticky md:top-0 md:flex md:h-screen">
      <div>
        <div class="mb-8 flex justify-center">
          <div v-if="status === 'pending'" class="h-10 w-10 animate-pulse rounded-full bg-cool-200 dark:bg-gray-700" />
          <nuxt-link v-else-if="channelInfo?.logoUrl" to="/" >
            <nuxt-img 
              :src="channelInfo.logoUrl"
              :alt="channelInfo.title || 'channel logo'"
              class="h-10 w-10 rounded object-cover"
              width="40"
              height="40"
              format="webp"
              loading="lazy"
              />
          </nuxt-link>
          
        </div>
       <ui-sidebar-navigation />
      </div>
      <div class="mt-auto flex flex-col justify-center place-content-between place-items-center gap-y-2">
        <span class="text-lg font-thin drop-shadow-sm rotate-90 w-32 mb-5 text-cool-600 transform">{{channelInfo.title }}</span>
        <a href="[Your YouTube Channel Link]" target="_blank" class="flex items-center justify-center rounded-lg p-3 text-red-600 hover:bg-red-100" title="کانال یوتیوب" aria-label="کانال یوتیوب">
          <svg class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
        </a>
      </div>
    </aside>
    </template>

<script setup>
const {getChannelInfo} = useYouTube()

const {channelInfo, status, error: errorLogo} = getChannelInfo()


</script>
