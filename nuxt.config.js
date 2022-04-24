export default {
  target: 'static',
  head: {
    title: 'boilerplate-nuxtjs',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['@/assets/css/main.pcss'],

  plugins: [
    { src: '@/plugins/mixins' },
    { src: '@/plugins/actions', mode: 'server' },
  ],

  components: true,

  loading: false,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],

  modules: ['@nuxt/content'],

  build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        'postcss-for': {},
        'tailwindcss/nesting': {},
      },
    },
  },

  googleFonts: {
    families: {
      'Azeret+Mono': {
        wght: [500, 800],
        // ital: [100],
      },
    },
    display: 'swap',
    // prefetch: true,
    // preconnect: true,
    // preload: true,
  },
}
