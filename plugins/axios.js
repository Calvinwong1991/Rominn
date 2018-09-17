/* @Author: calvin
 * @Date: 2018-09-17 15:58:06
 * @Name: axios plugins
 */

export default ({ $axios, redirect }) => {
  $axios.onRequest(config => {
    console.log('request to' + config.url)
  })
  $axios.onError(error => {
    console.log('error is' + error)
    // redirect('/400')
  })
}
