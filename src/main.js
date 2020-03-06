import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'
Vue.config.productionTip = false

import 'buefy/dist/buefy.css'
import Buefy from 'buefy'
Vue.use(Buefy)

import vueResource from 'vue-resource'
Vue.use(vueResource)

import Ping from './components/Ping'
Vue.use(Ping)

import Dashboard from './components/Dashboard'
Vue.use(Dashboard)

new Vue({
  store,
  render: h => h(App),
  
}).$mount('#app')
