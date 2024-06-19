// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],
  tailwindcss: {
    cssPath: 'assets/css/base.css',
    config: {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
              primary: '#CD28FF',
              secondary: '#37C3FF',
              background: '#140d24'
          }
        }
      }
    }
  },
  css: ['~/assets/css/main.css'],
})