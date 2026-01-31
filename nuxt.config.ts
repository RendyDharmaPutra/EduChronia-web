// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxt/ui", "@pinia/nuxt"],

  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  css: ["~/assets/css/main.css"],

  ssr: false,
  routeRules: {
    // TODO: make SSG for landing page
    // "/": { prerender: true },
  },
  app: {
    head: {
      title: "EduChronia",
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    },
  },

  compatibilityDate: "2025-01-15",

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },

  runtimeConfig: {
    public: {
      hostApiBaseUrl: process.env.NUXT_PUBLIC_HOST_API_BASE_URL,
    },
  },
});
