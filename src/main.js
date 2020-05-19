import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './components'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/index.css'
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
