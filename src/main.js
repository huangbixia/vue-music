import 'babel-polyfill'// 转义ESAPI
import Vue from 'vue'
import App from './App'
import router from './router'

import fastclick from 'fastclick'// 解决移动端点击延迟300毫秒

import 'common/stylus/index.styl'

fastclick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
