import Aura from '@primevue/themes/aura'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    'unplugin-icons/nuxt',
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
    betterAuthSecret: '',
    public: {
      betterAuthUrl: '',
      tmdbReadToken: ''
    }
  },
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          cssLayer: ' primevue',
          order: 'tailwind-base, primevue, tailwind-utilities'
        }
      }
    }
  }
})