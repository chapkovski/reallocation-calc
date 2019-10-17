import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import VueGlobalVariable from 'vue-global-var'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false


const params={
  0: {
      A: {
          capacity: 4,
          productivity: 1,
          number: 2
      },
      B: {
          capacity: 4,
          productivity: 1,
          number: 2
      }
  },
  1: {
      A: {
          capacity: 0,
          productivity: 0,
          number: 2
      },
      B: {
          capacity: 4,
          productivity: 4.6,
          number: 2
      }
  }
}
const taxes = [0, 0.3, 0.4348]
Vue.use(VueGlobalVariable, {
  globals: {
  params: params,
  taxes: taxes,
  },
  });

new Vue({
  render: h => h(App),
}).$mount('#app')
