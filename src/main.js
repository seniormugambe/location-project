import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueGeolocation from 'vue-geolocation-api'
const app = createApp(App)

app.use(router)
app.use(VueGeolocation)
app.mount('#app')
