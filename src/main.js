import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入路由
import './main'
// 导入自适应  rem
import 'amfe-flexible'
// 导入全局的 vant
import Vant from 'vant'
import 'vant/lib/index.css'
// 导入字体图标
import './styles/iconfont.css'
// 导入 less
import './styles/base.less'
// 导入全局头部组件
import HmHeader from '@/components/HmHeader'
// 导入logo组件
import HmLogo from '@/components/Hm-Logo'
// 导入 axios
import axios from 'axios'
// 将 axios 放到 vue 父类上
Vue.prototype.$axios = axios
// 配置全局的 url
axios.defaults.baseURL = 'http://localhost:3000'
//  注册全局头部组件
Vue.component('hm-header', HmHeader)
// 注册全局logo组件
Vue.component('hm-logo', HmLogo)
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
