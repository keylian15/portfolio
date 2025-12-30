import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjetsView from '@/views/ProjetsView.vue'
import AProposView from '@/views/AProposView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/projets',
      component: ProjetsView,
    },
    {
      path: '/about',
      component: AProposView,
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

export default router
