import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PanelType from '../views/PanelType.vue'
import OperatingSystem from '../views/OperatingSystem.vue'
import CheckList from '../views/CheckList.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/:user',
    name: 'panel',
    component: PanelType
  },
  {
    path: '/:user/:panel',
    name: 'operatingsystem',
    component: OperatingSystem
  },
  {
    path: '/:user/:panel/:os',
    name: 'checklist',
    component: CheckList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
