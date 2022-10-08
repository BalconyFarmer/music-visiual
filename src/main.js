import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AudioVisual from 'vue-audio-visual'

Vue.config.productionTip = false
Vue.use(AudioVisual)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
