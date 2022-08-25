import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Posts from '../components/Posts.vue'
import Profile from '../components/Profile.vue'

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
