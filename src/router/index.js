import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/PortfolioView.vue'),
      meta: { title: 'Portfolio Stage BUT2 Informatique par Nathan MARECHAL' }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
