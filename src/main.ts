import { createApp } from 'vue'
import { setupRouter } from '@/router'

import './styles/css/global.css'
import './style.css'
import App from './App.vue'
import { setupStore } from './store';
import "virtual:uno.css"
 const app = createApp(App);
setupStore(app);
setupRouter(app)
app.mount('#app')
