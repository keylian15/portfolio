<template>
  <!-- Section d'accueil -->
  <header class="hero">
    <h1>Turbé Keylian</h1>
    <p class="subtitle">Développeur Web & Logiciel</p>
  </header>

  <!-- Contenu principal -->
  <ParcoursComponent />
  <div class="content">

    <section class="section skills">
      <div class="skill-card">
        <div class="skill-text">
          <h2>Backend</h2>
          <p>Développement de panels administratifs et d'API sécurisées et performantes.</p>
        </div>
      </div>

      <div class="skill-card">
        <div class="skill-text">
          <h2>Frontend</h2>
          <p>Création de sites web interactifs et vitrines modernes et responsives.</p>
        </div>
      </div>

      <div class="skill-card">
        <div class="skill-text">
          <h2>Application</h2>
          <p>Développement d'un jeu 2D avec logique gameplay et mécaniques interactives.</p>
        </div>
      </div>
    </section>

  </div>
  <div class="content latest-project">
    <h2 class="section-title">Dernier projet publié</h2>

    <div class="project-wrapper">
      <ProjetCard :key="projet.id" :projet="projet" />
    </div>

    <button @click="goToProjects" class="btn-projects centered">Voir le reste de mes projets</button>
  </div>

</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function goToProjects() {
  router.push('/projets')
}

import ProjetCard from '@/components/ProjetCard.vue'
import ParcoursComponent from '@/components/ParcoursComponent.vue'
import logoBF from '@/assets/logo_BF.png'

const projet = {
  nom: 'Blue Frontline',
  description:
    "Dans un monde moderne bouleversé par la chute d'une météorite, l'environnement s'est transformé en un archipel d'îles quantiques. Deux grandes puissances s'affrontent pour contrôler cette zone et y mener des recherches. Votre objectif: détruire la base adverse. Combattez vous contre un joueur, une IA ou même en temps que spéctateur ? C'est à vous de décider ! ",
  github: 'https://github.com/keylian15/Blue_Frontline',
  nombreMembres: 6,
  duree: '3 mois',
  annee: 3,
  langages: ['Python'],
  image: logoBF,
  scolaire: true,
}
</script>

<style scoped>
/* Sont présent dans le style global de app.vue : 
  .cta
  .section
  .btn-projects
*/

/* --- Section Hero --- */
.hero {
  height: 100vh;
  background-color: var(--color-primary);
  color: var(--color-text);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.hero h1 {
  font-size: 6rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

.subtitle {
  font-size: 1.5rem;
  color: var(--color-text-light);
  margin-bottom: 3rem;
}

/* --- Sections Générales --- */
.content {
  padding: 6rem 10%;
  background-color: var(--color-primary);
  border-bottom: var(--color-accent) 1px solid;
  border-top: var(--color-accent) 1px solid;
}

.skills {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 6rem;
  flex-wrap: wrap;
}

.skill-card {
  display: flex;
  align-items: flex-start;
  padding: 2rem;
  border-radius: 12px;
  flex: 1;
  min-width: 250px;
  gap: 1rem;
}

.skill-card .icon {
  font-size: 2.5rem;
  color: var(--color-accent);
}

.skill-card h2 {
  margin: 0 0 0.5rem 0;
  color: var(--color-accent);
}

.skill-card p {
  margin: 0;
  color: var(--color-text-light);
  line-height: 1.4;
}

.latest-project {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 4rem 10%;
  background-color: var(--color-background-main);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: var(--color-accent);
  text-align: center;
}

.project-wrapper {
  width: 33%;
  justify-content: center;
}
</style>
