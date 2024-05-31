export default defineNuxtPlugin((NuxtApp) => {
    const config = useRuntimeConfig()
  
    // Access baseURL universally
    const EMAILJS_API = config.public.EMAILJS
  })