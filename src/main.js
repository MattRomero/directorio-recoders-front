import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import makeServer from "./mirage_api/server";

makeServer();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
