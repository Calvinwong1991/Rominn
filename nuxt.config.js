/* @Author: calvin
 * @Date: 2018-09-17 17:20:37
 * @Name: nuxt.config
 */

 const { I18n } = require('./config')

 module.exports = {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1'},
      { name: 'renderer', content: 'webkit' },
      { hid: 'keywords', name: 'keywords', content: 'calqinBlog, vue, nodejs, ssr, i18n, calvin' },
      { hid: 'description', name: 'description', content: 'calqinBlog是一个小型私人博客，用于记录文章，日记，相册，个人资料的web应用。' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' } // rss
    ]
  },
  css: ['~assets/css/index.scss'],
  loading: { color: '#ff6e36' },
  server: {
    port: 8081
  },
  router: {
    middleware: 'i18n'
  },
  build: {
    analyze: true,
    extends (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
  },
  modules: ['@nuxtjs/pwa', '@nuxtjs/axios', ['nuxt-i18n', I18n]],
  plugins: ['~/plugins/axios']
  // plugins: ['~/plugins/i18n', '~/plugins/axios'] //axios proxy configuration
}
