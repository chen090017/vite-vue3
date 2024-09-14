import { createApp } from 'vue'
import { setupRouter } from '@/router'
import './styles/css/global.css'
import './style.css'
import App from './App.vue'
import { setupStore } from './store';
import "virtual:uno.css"
// import i18n from "@/lang";
import { setupI18n } from "@/lang";

const app = createApp(App);
setupStore(app);
setupRouter(app)
// 国际化
setupI18n(app);
// app.use(i18n)
app.mount('#app')
