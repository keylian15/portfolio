<template>
  <!-- Section d'accueil -->
  <header class="hero">
    <h1>Turbé Keylian</h1>
    <p class="subtitle">Développeur Web & Logiciel</p>
    <p class="subtitle">Site en cours de développement</p>
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

    <button @click="goToProjects" class="btn-projects centered">
      Voir le reste de mes projets
    </button>
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
  description: "Ce projet est un jeu Pygame intégrant de l'IA décisionnelle.",
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
  width: 100%;
  background-color: var(--color-primary);
  color: var(--color-text);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
}

.hero h1 {
  font-size: 6rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
  max-width: 100%;
  word-wrap: break-word;
}

.subtitle {
  font-size: 1.5rem;
  color: var(--color-text-light);
  margin-bottom: 3rem;
  max-width: 90%;
}

/* --- Sections Générales --- */
.content {
  width: 100%;
  padding: 6rem 10%;
  background-color: var(--color-primary);
  border-bottom: var(--color-accent) 1px solid;
  border-top: var(--color-accent) 1px solid;
  box-sizing: border-box;
}

.skills {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 6rem;
  flex-wrap: wrap;
  width: 100%;
}

.skill-card {
  display: flex;
  align-items: flex-start;
  padding: 2rem;
  border-radius: 12px;
  flex: 1;
  min-width: 250px;
  gap: 1rem;
  box-sizing: border-box;
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
  width: 100%;
  max-width: 500px;
  justify-content: center;
}

/* ========================== */
/* RESPONSIVE STYLES          */
/* ========================== */

/* Grands écrans et tablettes larges */
@media screen and (max-width: 1200px) {
  .hero h1 {
    font-size: 5rem;
  }

  .subtitle {
    font-size: 1.3rem;
  }

  .content {
    padding: 5rem 8%;
  }

  .skills {
    gap: 1.5rem;
  }

  .project-wrapper {
    max-width: 600px;
  }
}

/* Tablettes */
@media screen and (max-width: 1024px) {
  .hero h1 {
    font-size: 4.5rem;
  }

  .subtitle {
    font-size: 1.2rem;
    margin-bottom: 2.5rem;
  }

  .content {
    padding: 4rem 6%;
  }

  .skills {
    margin-top: 4rem;
  }

  .skill-card {
    padding: 1.8rem;
    min-width: 220px;
  }

  .skill-card h2 {
    font-size: 1.5rem;
  }

  .skill-card p {
    font-size: 0.95rem;
  }

  .latest-project {
    padding: 3.5rem 6%;
  }

  .section-title {
    font-size: 2.2rem;
  }

  .project-wrapper {
    max-width: 700px;
  }
}

/* Petites tablettes et grands mobiles */
@media screen and (max-width: 768px) {
  .hero {
    height: 80vh;
  }

  .hero h1 {
    font-size: 3.5rem;
  }

  .subtitle {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }

  .content {
    padding: 3rem 4%;
  }

  .skills {
    flex-direction: column;
    margin-top: 3rem;
    gap: 1.5rem;
  }

  .skill-card {
    padding: 1.5rem;
    min-width: auto;
    width: 100%;
  }

  .skill-card h2 {
    font-size: 1.4rem;
  }

  .skill-card p {
    font-size: 0.9rem;
  }

  .latest-project {
    padding: 3rem 4%;
  }

  .section-title {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  .project-wrapper {
    max-width: 100%;
  }

  .btn-projects {
    padding: 0.8rem 2.5rem;
    font-size: 0.95rem;
  }
}

/* Mobiles */
@media screen and (max-width: 480px) {
  .hero {
    height: 70vh;
  }

  .hero h1 {
    font-size: 2.5rem;
    padding: 0 1rem;
  }

  .subtitle {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    padding: 0 1rem;
  }

  .content {
    padding: 2.5rem 3%;
  }

  .skills {
    margin-top: 2rem;
    gap: 1.2rem;
  }

  .skill-card {
    padding: 1.2rem;
  }

  .skill-card h2 {
    font-size: 1.3rem;
  }

  .skill-card p {
    font-size: 0.85rem;
    line-height: 1.5;
  }

  .latest-project {
    padding: 2.5rem 3%;
    gap: 1.5rem;
  }

  .section-title {
    font-size: 1.7rem;
    margin-bottom: 1.2rem;
  }

  .btn-projects {
    padding: 0.7rem 2rem;
    font-size: 0.9rem;
  }
}

/* Très petits mobiles */
@media screen and (max-width: 360px) {
  .hero h1 {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .content {
    padding: 2rem 3%;
  }

  .skills {
    margin-top: 1.5rem;
    gap: 1rem;
  }

  .skill-card {
    padding: 1rem;
  }

  .skill-card h2 {
    font-size: 1.2rem;
  }

  .skill-card p {
    font-size: 0.8rem;
  }

  .latest-project {
    padding: 2rem 3%;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .btn-projects {
    padding: 0.6rem 1.5rem;
    font-size: 0.85rem;
  }
}
</style>