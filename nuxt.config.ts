// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],
  tailwindcss: {
    cssPath: 'assets/css/base.css',
    config: {
      theme: {
        extend: {
          colors: {
              primary: '#CD28FF',
              secondary: '#37C3FF',
              background: '#fff'
          }
        }
      }
    }
  },
  css: ['~/assets/css/main.css'],
})