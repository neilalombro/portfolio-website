import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutMe/AboutMe.vue')
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('../views/WorkExperience/WorkExperience.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/Projects/Projects.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact/Contact.vue')
    },
  ]
})

export default router
