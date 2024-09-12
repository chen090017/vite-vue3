import { createApp } from 'vue'
import './style.css'
import './styles/css/global.css'
import App from './App.vue'
import { setupStore } from './store';
import "virtual:uno.css"
 const app = createApp(App);
setupStore(app);
app.mount('#app')
