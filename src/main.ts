import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/styles/main.css'
import { fetchCsrfToken } from './apis/csrf'


const app = createApp(App)

app.use(createPinia())
app.use(router)
await fetchCsrfToken();
app.mount('#app')
