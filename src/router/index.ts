import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/HomeView.vue'),
      meta: {
        title: '',
      },
    },
    {
      path: '/common_questions',
      name: 'common-questions',
      component: () => import('@/views/FAQView.vue'),
      meta: {
        title: '',
      },
    },
  ],
})
export default router
