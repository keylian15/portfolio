import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjetsView from '@/views/ProjetsView.vue'
import AProposView from '@/views/AProposView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Accueil' },
    },
    {
      path: '/projets',
      name: 'projets',
      component: ProjetsView,
      meta: { title: 'Projets' },
    },
    {
      path: '/about',
      name: 'about',
      component: AProposView,
      meta: { title: 'A propos' },
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: { title: 'Contact' },
    },
    {
      path: '/:pathMatch(.*)*', // 404 ->
      redirect: '/',
    },
  ],
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    // sinon scroll en haut
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = to.meta.title || 'Portfolio - Keylian'
})

export default router
