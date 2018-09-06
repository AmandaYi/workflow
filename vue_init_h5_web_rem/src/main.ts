import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './vuex/store'
import './registerServiceWorker'
import 'lib-flexible/flexible.js'
import './assets/scss/index.scss';  
import './assets/iconfont/iconfont.css';
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
