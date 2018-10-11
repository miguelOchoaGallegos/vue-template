import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Home from '@/components/Home'
import PageNotFound from '@/components/PageNotFound'
import Inicio from '@/components/Inicio'

Vue.use(Router)

export default new Router({
  routes: [
    /*{
      path: '/',
      name: 'Hello',
      component: Hello
    }*/
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/inicio',
      name: 'Inicio',
      component: Inicio
    },
    { path: "*", component: PageNotFound }
  ]
})
