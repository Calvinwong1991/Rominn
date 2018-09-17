/* @Author: calvin
 * @Date: 2018-09-17 17:48:48
 * @Name: config
 */
const en = require('../locales/en.js')
const cn = require('../locales/cn.js')
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
  vueI18n: {
    fallbackLocale: 'cn',
    messages: { en, cn }
  }
}

module.exports = {
  I18n
}