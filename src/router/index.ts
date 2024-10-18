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
      path: '/create_account',
      name: 'signup',
      component: () => import('@/views/SignUpView.vue'),
      meta: {
        title: '',
      },
    },
  ],
})

export default router
