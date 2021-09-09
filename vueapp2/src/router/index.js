import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
// import VeeValidate from 'vee-validate';

// validate plugins
Vue.use(VueRouter)
// Vue.use(VeeValidate);

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
  {
    path: '/product',
    name: 'product',
    // lazy load page
    component: () => import('../components/Product.vue')
  },
  // { path: '/product/:id/:category', 
  //   // lazy load page
  //   component: () => import('../components/Product.vue')
  // },
  {
    path: '/about',
    name: 'About',
    // lazy load page
    component: () => import('../views/About.vue')
  },
  {
    path: '/todoslist',
    name: 'ToDosList',
    // lazy load page
    component: () => import('../components/todos/ToDosList.vue')
  },
  {
    path: '/todoscreate',
    name: 'ToDosCreate',
    // lazy load page
    component: () => import('../components/todos/ToDosCreate.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
