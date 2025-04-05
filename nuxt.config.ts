// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  debug:true,
  css: [
    "~/assets/css/main.css"
  ],
  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@nuxtjs/i18n'
  ],
  fonts:{
    families: [
      { 
        name: "IBM Plex Sans Arabic",
        provider: "google"
      }
    ]
  },
  runtimeConfig: {
    youtubeApiKey: process.env.YOUTUBE_API_KEY,
    youtubeChannelId: process.env.YOUTUBE_CHANNEL_ID,
    public: {
      publicKey: "this is a public key" // useRuntimeConfig().public
    }
  },
  i18n: {
    locales:[
      {
        code: "fa",
        file: "fa.json"
      },
      {
        code: "en", 
        file: "en.json"
      },
    ],
    defaultLocale: process.env.DEFAULT_LOCALE || 'en',
    lazy: true,
  }
})