import { createRouter, createWebHashHistory } from 'vue-router'
import LandingPageView from '../views/LandingPageView.vue'
import AboutMeView from '../views/AboutMeView.vue'

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPageView
  },
  {
    path: '/about-me',
    name: 'AboutMe',
    component: AboutMeView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
