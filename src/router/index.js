import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Posts from '../views/Posts.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/login', component: Login},
  {path: '/register', component: Register},
  {path: '/posts', component: Posts},
  {path: '/profile', component: Profile}
]

const router = new VueRouter({
  routes
})

export default router
