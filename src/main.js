import Vue from 'vue'
import { Lazyload, Toast } from 'vant';
import App from './App.vue'
import router from './router'
import store from './store'
import ajax from './utils/ajax'
import ajax_download from './utils/uploadAndDownload'

import '@/assets/styles/global.less'
Vue.config.productionTip = false
Vue.prototype.$post = ajax.post
Vue.prototype.$get = ajax.get
Vue.prototype.$post_download = ajax_download.post
Vue.prototype.$post_upload = ajax_download.post
Vue.prototype.wechat = function () {
  return navigator.userAgent.toLowerCase().indexOf('micromessenger') === -1
}
Vue.use(Lazyload)
Vue.use(Toast)

new Vue({
  router,
  store,
  render: h => h(App),

}).$mount('#app')
