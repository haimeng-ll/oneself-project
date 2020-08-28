import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入登录路由
import Login from '@/views/Login'
// 导入注册路由
import Register from '@/views/Register'

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login },
  { path: '/register', component: Register }
]

const router = new VueRouter({
  routes
})

export default router
