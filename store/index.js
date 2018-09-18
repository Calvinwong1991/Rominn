/* @Author: calvin
 * @Date: 2018-09-18 15:32:19
 * @Name: store
 */

import vue from 'vue'
import vuex from 'vuex'

import article from './module/artilce'
import communal from './module/communal'

vue.use(vuex)

export default () => {
  return new vuex.Store({
    modules: { article, communal }
  })
}
