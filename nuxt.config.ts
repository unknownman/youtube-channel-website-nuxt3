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
    '@nuxtjs/i18n',
    '@nuxt/content'
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
      featuredId: process.env.FEATURED_VIDEO_ID,
      specialVideoId: process.env.SPECIAL_VIDEO_ID,
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
  },
  app: {
    baseURL: '/youtube-channel-website-nuxt3/', // Match your repository name
    buildAssetsDir: 'assets', // Default is '_nuxt'
  },

  nitro: {
    preset: 'github-pages',
    prerender: {
      failOnError: false
    }
  },

  content: {
    // Add basic content configuration
    documentDriven: true,
    markdown: {
      anchorLinks: false
    }
  },

  app: {
    baseURL: '/youtube-channel-website-nuxt3/',
    buildAssetsDir: 'assets'
  },

  experimental: {
    payloadExtraction: false
  }
})