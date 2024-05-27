// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["bootstrap/dist/css/bootstrap.min.css"],

  modules: ["@nuxtjs/supabase"],
  supabase: { redirect: false },
  app: {
    head: {
      script: [{
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2/dist/js/bootstrap.bundle.min.js"
      }]
    }
  }
});
