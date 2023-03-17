import { createApp } from 'vue'
import App from './App.vue'
import store from './components/store.js'
import router from './router/router'

const app=createApp(App)
app.use(store)
// app.mount('#app')
createApp(App).use(router).mount('#app')
