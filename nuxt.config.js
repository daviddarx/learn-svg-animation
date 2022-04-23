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

  plugins: ['@/plugins/mixins'],

  components: true,

  loading: false,

  buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss'],

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
}
