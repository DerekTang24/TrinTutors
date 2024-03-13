// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/supabase"],
  supabase: {
    redirectOptions: {
      login: "/",
      callback: "/confirm",
      include: ["/admin(/*)?"],
      exclude: [],
      cookieRedirect: false,
    },
  },
});
