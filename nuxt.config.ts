// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    google: {
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
  imports: {
    dirs: ["types/*.ts", "@/types/*.d.ts", "store/*.ts", "types/**/*.ts"],
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/supabase", "@vueuse/nuxt"],
  nitro: {
    experimental: {
      websocket: true,
    },
  },
  tailwindcss: {
    config: {
      mode: "jit",
      plugins: [require("daisyui")],
      theme: {},
    },
  },
  supabase: {
    redirect: false,
    redirectOptions: {
      login: "/login",
      callback: "/confirm",
      include: [],
      exclude: [],
      cookieRedirect: false,
    },
  },
});
