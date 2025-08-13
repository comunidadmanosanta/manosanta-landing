import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
  i18n: {
    locales: [
      { code: "es", iso: "es-ES", file: "es.json", name: "Español" },
      { code: "en", iso: "en-US", file: "en.json", name: "English" },
    ],
    defaultLocale: "es",
    langDir: "locales/",
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  app: {
    head: {
      title: "Manosanta - Comunidad viajera", // default fallback title
      htmlAttrs: {
        lang: "es",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      meta: [
        {
          name: "ManoSanta",
          content:
            "**Manosanta** es una iniciativa de bienestar para viajeros conscientes, liderada por Shay, una caminante del alma que ahora siembra cuidado y conexión en Medellín, Colombia.",
        },
      ],
    },
  },
});
