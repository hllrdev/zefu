export default defineNuxtConfig({
  devtools: {
    enabled: false
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
