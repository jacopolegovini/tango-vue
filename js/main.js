import { createApp } from 'vue'
import { router } from './router'
import App from '../src/App.vue'
import 'bootstrap/dist/css/bootstrap.css'

createApp(App).use(router).mount('#app')
