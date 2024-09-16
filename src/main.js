import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import "aos/dist/aos.css"
import router from "./routes/route";

const app = createApp(App);
app.use(router);
//app.use(i18n);

app.mount('#app')
