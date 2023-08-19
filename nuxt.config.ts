export default defineNuxtConfig({
  devtools: {
    enabled: false
  },
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['nuxt-icon', '@pinia/nuxt']
})
