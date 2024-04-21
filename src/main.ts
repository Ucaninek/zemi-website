import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPotiah } from 'potiah'

const app = createApp(App)
const potiah = createPotiah()

app.use(router)
app.use(potiah)

app.mount('#app')
