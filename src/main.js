import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import router from './router'
import http from './utils/api'
Vue.prototype.$http = http

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
