module.exports = {
  loading: { color: 'cyan' },
  server: {
    port: 8081
  },
  router: {
    middleware: 'i18n'
  },
  plugins: ['~/plugins/i18n.js'],
  generate: {
    routes: ['/', '/about', '/fr', '/fr/about']
  }
}
