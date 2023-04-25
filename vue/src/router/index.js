import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/BarChart',
      name: 'BarChart',
      component: () => import('../views/BarChart.vue')
    },
    {
      path: '/PieChart',
      name: 'PieChart',
      component: () => import('../views/PieChart.vue')
    }
  ]
})

export default router
