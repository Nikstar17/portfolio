import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { initializeGA } from './utils/analytics'

// Initialize Google Analytics 4 with Consent Mode v2
initializeGA()

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
