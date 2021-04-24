import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes.js'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
   routes,
   mode: 'history'
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
