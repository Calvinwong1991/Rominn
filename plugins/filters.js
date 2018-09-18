/* @Author: calvin
 * @Date: 2018-09-18 16:18:53
 * @Name: filters
 */

import Vue from 'vue'

export const formatDate = (date, fmt) => {
  let newDate = new Date(date)
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (newDate.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': newDate.getMonth() + 1,
    'd+': newDate.getDate(),
    'h+': newDate.getHours(),
    'm+': newDate.getMinutes(),
    's+': newDate.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : ('00' + str).substr(str.length))
    }
  }
  return fmt
}

export const trim = (obj = {}) => {
  let temp = obj

  for (let i in temp) typeof temp[i] === 'string' ? temp[i] = temp[i].replace(/(^\s*)|(\s*$)/g, '') : ''

  return temp
}

const filters = { formatDate, trim }

Object.keys(filters).forEach(key => { Vue.filter(key, filters[key]) })

export default filters