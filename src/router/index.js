// router fait la corresponce dance entre les url et les compsant a etre charger
import { createRouter, createWebHistory } from 'vue-router'
//history avoir le suivi du router
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/nouveau',
    name: 'Nouveau',
    component: () => import(/* webpackChunkName: "nouveau" */ '../views/Nouveau.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
