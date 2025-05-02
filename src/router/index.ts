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
    {
      path: '/contact_us',
      name: 'contact_us',
      component: () => import('@/components/ContactUs.vue'),
      meta: {
        title: '',
      },
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import('@/views/PrivacyPolicy.vue'),
      meta: {
        title: '',
      },
    },
    {
      path: '/about_us',
      name: 'about_us',
      component: () => import('@/components/AboutUs.vue'),
      meta: {
        title: '',
      },
    },
  ],
})
export default router
