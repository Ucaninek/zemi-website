// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    cssPath: 'assets/css/base.css',
    config: {
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