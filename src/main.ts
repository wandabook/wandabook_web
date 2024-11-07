import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/main.css'
import { createI18n } from 'vue-i18n';
import messages from '@/lang/index';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const i18n = createI18n({
  legacy: false,
  locale: 'fr', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages,
})
const app = createApp(App)
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(i18n);
app.mount('#app')

const defaultTitle: string = 'Wandabook'

router.beforeEach((data) => {
  document.title = ((data.meta.title && `${data.meta.title}-${defaultTitle}`) ||
    defaultTitle) as string
})
