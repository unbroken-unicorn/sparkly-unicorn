import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/users',
    name: 'Users',
     // lazy load page
    //  This lazy loading is being done through Webpack’s code splitting feature
    component: () => import('../views/Users.vue')
  },
  {
    path: '/posts',
    name: 'posts',
    // lazy load page
    component: () => import('../views/Posts.vue')
  },
  { path: '/product/:id/:category', 
    // lazy load page
    component: () => import('../views/Product.vue')
  },
  {
    path: '/about',
    name: 'About',
    // lazy load page
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
