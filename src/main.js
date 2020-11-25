/*
 * @Description: 
 * @Author: Lewis
 * @Date: 2020-11-20 02:50:18
 * @LastEditTime: 2020-11-25 02:30:41
 * @LastEditors: Lewis
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import {firestorePlugin} from 'vuefire'

Vue.use(firestorePlugin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
