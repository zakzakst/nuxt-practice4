// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/styles/style.scss"],
  modules: ["@nuxt/image"],
  // https://image.nuxt.com/get-started/configuration
  // image: {},
});
