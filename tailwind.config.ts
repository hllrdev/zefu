module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [
    require('@tailwindcss/typography'),require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        customtheme: {
          "primary": "#96c2f8",
          "secondary": "#659fe6",
          "accent": "#3968a2"
        }
      }
    ]
  }
}

