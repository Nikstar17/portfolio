import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// Defer non-critical initialization
// Wait for app to be interactive before initializing analytics
// This improves page load performance
window.addEventListener('load', () => {
  // Dynamically import analytics only when needed
  import('./utils/analytics').then(({ initializeGA }) => {
    // Initialize with a small delay to prioritize app interactivity
    setTimeout(() => initializeGA(), 1000)
  })
})
