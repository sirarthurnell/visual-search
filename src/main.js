import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './css/main.css';

import Vue from 'vue'
import VueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'

Vue.use(VueResource);
Vue.use(BootstrapVue);
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
