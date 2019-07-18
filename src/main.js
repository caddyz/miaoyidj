import Vue from 'vue'
import MpvueRouterPatch from 'mpvue-router-patch'
import App from '@/App'
import store from '@/store'
import fly from '@/utils/request'

Vue.use(MpvueRouterPatch)
Vue.config.productionTip = false
Vue.prototype.$http = fly

const app = new Vue({
  mpType: 'app',
  store,
  ...App
})
app.$mount()
