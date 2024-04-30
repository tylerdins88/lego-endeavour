import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/minifigs',
      name: 'minifigs',
      component: () => import('../views/MinifigView.vue')
    },
    {
      path: '/sets',
      name: 'sets',
      component: () => import('../views/SetsView.vue')
    },
    {
      path: '/bulklego',
      name: 'bulklego',
      component: () => import('../views/BulkLegoView.vue')
    },
    {
      path: '/unique',
      name: 'unique',
      component: () => import('../views/UniqueView.vue')
    },
    {
      path: '/instructions',
      name: 'instructions',
      component: () => import('../views/InstructionsView.vue')
    },
    {
      path: '/pastitems',
      name: 'pastitems',
      component: () => import('../views/PastItemsView.vue')
    }
  ]
})

export default router
