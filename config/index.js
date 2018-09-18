/* @Author: calvin
 * @Date: 2018-09-17 17:48:48
 * @Name: config
 */
const en = require('../locales/en-US.js')
const cn = require('../locales/cn-CN.js')
const I18n = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English'
    }, {
      code: 'cn',
      iso: 'cn-CN',
      name: '中文'
    }
  ],
  defaultLocale: 'cn',
  lazy: true,
  seo: true,
  parsePages: false,
  vueI18n: {
    fallbackLocale: 'cn',
    messages: { en, cn }
  },
  vuex: {
    moduleName: 'I18n',
    mutations: {
      setLocale: 'I18N_SET_LOCALE'
    }
  }
}

module.exports = { I18n }
