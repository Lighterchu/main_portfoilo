// https://nuxt.com/docs/api/configuration/nuxt-config
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  app: {
    head: {
      title: 'Bens Portfoilo',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          property: 'og:title',
          content: 'NuxtApp - Build for production',
        },
        {
          property: 'og:description',
          content: 'An nuxt app build for production testing performance',
        },
        {
          property: 'og:type',
          content: 'aecomapp:nuxt',
        },
        {
          property: 'og:url',
          content: 'https://nuxt.aecomapp.com',
        },
        {
          property: 'og:image',
          content: 'https://nuxt.aecomapp.com/nem.jpeg',
        },
        {
          property: 'og:site_name',
          content: 'NuxtApp',
        },
        {
          property: 'og:locale',
          content: 'vi_VN',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'This is a site that showcase my work and what my skills are',
        },
      ],
    },
  },



  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      EMAILJS: process.env.EMAILJS
    }
  },  

})