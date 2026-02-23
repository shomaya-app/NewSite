// https://nuxt.com/docs/api/configuration/nuxt-config
import { SERVICE_NAME } from './app/constants'
import legacy from '@vitejs/plugin-legacy'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  vite: {
    plugins: [
      tailwindcss(),
      legacy({
        targets: ['defaults', 'not IE 11'],
        modernPolyfills: true
      })
    ],
    build: {
      target: ['es2020', 'safari15']
    }
  },

  runtimeConfig: {
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
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&family=Roboto:wght@100..900&display=swap',
          crossorigin: '',
          onload: 'this.media=all',
          media: 'print'
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
    dirs: ['composables']
  },

  sourcemap: {
    server: true,
    client: 'hidden'
  }
})
