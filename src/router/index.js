import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Pages/index.vue'
import News from '@/components/Pages/Studies.vue'
import About from '@/components/Pages/About.vue'
import Guide from '@/components/Pages/Guide.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/guide',
      name: 'guide',
      component: Guide
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

export default router
