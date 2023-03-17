import { createRouter, createWebHistory } from 'vue-router'
import Counter from '@/components/Counter.vue'
import NotFound from '@/components/NotFound.vue'
import Home from '@/components/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/counter', component: Counter },
  { path: '/:catchAll(.*)', name: 'NotFound',component: NotFound }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
