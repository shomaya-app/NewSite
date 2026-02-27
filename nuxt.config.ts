// https://nuxt.com/docs/api/configuration/nuxt-config
import { SERVICE_NAME } from './app/constants'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  vite: {
    plugins: [tailwindcss()]
  },

  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY,
    public: {
      NUXT_PUBLIC_APP_ENV: process.env.NUXT_PUBLIC_APP_ENV
    }
  },

  spaLoadingTemplate: false,
  css: ['~/assets/css/main.css'],

  nitro: {
    prerender: {
      failOnError: true,
      autoSubfolderIndex: false
    }
  },

  components: ['~/components'],

  app: {
    head: {
      title: SERVICE_NAME,
      meta: [{ name: 'robots', content: 'noindex, nofollow' }],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap'
        }
      ]
    }
  },

  modules: ['dayjs-nuxt', '@nuxt/eslint'],

  dayjs: {
    plugins: ['utc', 'timezone', 'isBetween'],
    locales: ['ja'],
    defaultLocale: 'ja',
    defaultTimezone: 'Asia/Tokyo'
  },

  imports: {
    dirs: ['composables/**']
  },

  sourcemap: {
    server: true,
    client: 'hidden'
  }
})
