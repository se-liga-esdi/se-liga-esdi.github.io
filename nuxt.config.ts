// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@vite-pwa/nuxt"],
  imports: {
    dirs: [
      // Scan top-level modules
      "composables",
      // ... or scan modules nested one level deep with a specific name and file extension
      "composables/*/index.{ts,js,mjs,mts}",
      // ... or scan all modules within given directory
      "composables/**",
    ],
  },
  app: {
    head: {
      script: [
        { src: "/assets/js/bootstrap/bootstrap.min.js" },
        { src: "/assets/js/introjs/index.js" },
        { src: "/assets/js/jquery/jquery.min.js" },
      ],

      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0",
        },
      ],
    },
  },
  css: [
    "public/assets/css/bootstrap/bootstrap.min.css",
    "public/assets/css/introjs/intro.min.css",
    "public/assets/css/bootstrap-icons/bootstrap-icons.min.css",
  ],
  pwa: {
    manifest: {
      name: "Se liga app 58",
      short_name: "se liga",
      description: "uerj app",
      icons: [
        {
          src: "assets/images/icons/icon-72x72.png",
          sizes: "72x72",
          type: "image/png",
        },
        {
          src: "assets/images/icons/icon-96x96.png",
          sizes: "96x96",
          type: "image/png",
        },
        {
          src: "assets/images/icons/icon-128x128.png",
          sizes: "128x128",
          type: "image/png",
        },
        {
          src: "assets/images/icons/icon-144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "assets/images/icons/icon-152x152.png",
          sizes: "152x152",
          type: "image/png",
        },
        {
          src: "assets/images/icons/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "assets/images/icons/icon-384x384.png",
          sizes: "384x384",
          type: "image/png",
        },
        {
          src: "assets/images/icons/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workbox: {
      skipWaiting: true,
    },
  },
});
