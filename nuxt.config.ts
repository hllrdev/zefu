export default defineNuxtConfig({
  devtools: {
    enabled: false
  },
  runtimeConfig: {
    public: {API_URL: process.env.API_URL}
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['nuxt-icon', '@pinia/nuxt'],
  app: {
    head: {
      title: 'Zefu - Site oficial',
      meta: [
        // { 'http-equiv': 'Content-Security-Policy', content: 'upgrade-insecure-requests' }
      ]
    }
  }
})
