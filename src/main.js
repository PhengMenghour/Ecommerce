import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useUserStore } from './stores/User'

const app = createApp(App)

app.use(createPinia())

window.addEventListener('storage', () => {
    const userStore = useUserStore();
    userStore.syncUserFromStorage();
});

app.use(router).mount('#app')