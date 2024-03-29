import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Shoplist from './views/Shoplist.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/',   name: 'home', component: Home},
    {path: '/login',   name: 'login', component: Login},
    {path: '/shoplist',   name: 'Shoplist', component: Shoplist},
  ]
})
