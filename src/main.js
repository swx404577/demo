// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './store/store'
import axios from 'axios'
import qs from 'qs'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.prototype.$http =axios //全局注册，使用方法为:this.$axios
Vue.prototype.qs = qs //全局注册，使用方法为:this.qs
/* eslint-disable no-new */
Vue.use(ElementUI)
new Vue({
  el: '#app',
  store,//使用store
  router,
  components: { App },
  template: '<App/>'
})
