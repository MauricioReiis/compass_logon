import Vue from 'vue'
import VueRouter from 'vue-router'
import loginPage from '@/views/loginPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: loginPage,
  },
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/home',
    name: 'home',
    
    component: () => import('@/components/erro401')
  },
  {
    path: '/home',
    name: 'homePage',

    component: () => import('@/views/homePage.vue')
  },
  {
    path: '*',
    name: 'erro404',

    component: () => import('@/components/erro404')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
