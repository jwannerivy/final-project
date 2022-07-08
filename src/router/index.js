import { createRouter, createWebHistory } from 'vue-router'
import MainHome from '../components/MainHome.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainHome
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/MainHome.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
