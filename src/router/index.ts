import { createRouter, createWebHistory } from 'vue-router'
import AboutMe from '@/views/AboutMe.vue'
import EditorFolio from '@/views/EditorFolio.vue'
import Impressum from '@/views/ImpressumView.vue'
import Datenschutz from '@/views/DatenschutzView.vue'
import Kontakt from '@/views/KontaktView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about-me',
      component: AboutMe,
      meta: { transition: 'fade' },
    },
    {
      path: '/editorfolio',
      name: 'editorfolio',
      component: EditorFolio,
      meta: { transition: 'fade' },
    },
    {
      path: '/impressum',
      name: 'impressum',
      component: Impressum,
      meta: { transition: 'fade' },
    },
    {
      path: '/datenschutz',
      name: 'datenschutz',
      component: Datenschutz,
      meta: { transition: 'fade' },
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: Kontakt,
      meta: { transition: 'fade' },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  },
})

export default router
