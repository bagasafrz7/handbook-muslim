import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './main.css'
import Unicon from 'vue-unicons/dist/vue-unicons-vue2.umd'
import { uniArrow, uniHeart, uniQuestionCircle, uniSearch, uniEstate, uniNewspaper, uniImages, uniSetting } from 'vue-unicons/dist/icons'

Unicon.add([uniArrow, uniHeart, uniQuestionCircle, uniSearch, uniEstate, uniNewspaper, uniImages, uniSetting])
Vue.use(Unicon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
