import Vue from 'vue'
import ECharts from 'echarts'
import VueEcharts from 'vue-echarts'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './style/index.scss'

Vue.component('v-echarts', VueEcharts)
Vue.config.productionTip = false
Vue.prototype.$echarts = ECharts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
