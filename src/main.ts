import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/styles/main.css'
import { API } from './apis'


const app = createApp(App)

app.use(createPinia())
app.use(router)
await API.get(`/auth/csrf-token`, {
  withCredentials: true
}).then((res) => {
  const csrfToken = res.data.csrfToken;
  API.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
}).catch((error) => {
  console.error('Error fetching CSRF token:', error);
});
app.mount('#app')
