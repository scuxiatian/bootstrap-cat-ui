import Vue from 'vue'
import VueRouter from 'vue-router'
import subRoutes from './subRoutes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home'),
    children: subRoutes
  }
]

const router = new VueRouter({
  routes
})

export default router
