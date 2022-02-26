import { createApp } from 'vue'
import App from './pages/Home.vue'
import store from './store'

createApp(App).use(store).mount('#app')
