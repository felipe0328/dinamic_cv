import { createRouter, createWebHashHistory } from 'vue-router'
import LandingPageView from '../views/LandingPageView.vue'
import AboutMeView from '../views/AboutMeView.vue'
import ExperienceView from '@/views/ExperienceView.vue'
import ContactView from '@/views/ContactView.vue'
import ProjectsView from '@/views/ProjectsView.vue'

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
  },
  {
    path: '/experience',
    name: 'Experience',
    component: ExperienceView
  },
  {
    path: '/contact-me',
    name: 'ContactMe',
    component: ContactView
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
