<template>
  <div class="home">
    <!-- Section d'accueil -->
    <header class="hero">
      <h1>Je m'appelle Turbé Keylian</h1>
      <h1>Et je suis en 3ème année de BUT Informatique</h1>
      <p class="subtitle">Développeur Web & Logiciel</p>
      <button class="cta" @click="scrollToSection">Découvrir</button>
    </header>

    <!-- Contenu principal -->
    <main class="content" ref="contentSection">
      <!-- Présentation -->
      <section class="section">
        <h2>À Propos de Moi</h2>
        <p>
          Je suis <strong>Turbé Keylian</strong>, j'ai 20 ans et je suis en troisième année de
          <strong>BUT Informatique</strong>. Passionné par l'univers du développement, mon parcours
          m'a permis de réaliser divers projets techniques allant du développement d'API en
          <strong>Node.js</strong> à la création d'applications mobiles avec
          <strong>Flutter</strong>, en passant par la gestion de bases de données.
        </p>
        <p>
          Mon approche est de toujours apprendre de nouvelles choses, d'optimiser mes compétences et
          de comprendre les principes fondamentaux de chaque technologie que j'explore.
        </p>
        <p>
          En dehors de la programmation, j'aime lire des romans comme
          <em>La Nuit Où Les Étoiles Se Sont Éteintes</em> ou encore <em>The Maze Runner</em>. Je
          suis animé par le désir d'apprendre, de créer et de collaborer. Le développement est pour
          moi un moyen de matérialiser mes idées, mais aussi de repousser mes limites.
        </p>
        <p>
          Je suis quelqu'un de patient, généreux, avec un bon esprit d'équipe et une bonne gestion
          de mon emploi du temps.
        </p>
      </section>

      <button @click="goToProjects" class="btn-projects">Voir tous mes projets</button>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const contentSection = ref(null)
const scrollToSection = () => {
  contentSection.value.scrollIntoView({ behavior: 'smooth' })
}

import { useRouter } from 'vue-router'
const router = useRouter()

function goToProjects() {
  router.push('/projets')
}
</script>

<style scoped>
/* Sont présent dans le style global de app.vue : 
  .home
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
  padding: 0 5%;
}

.hero h1 {
  font-size: 4rem;
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
  background-color: var(--color-background-main);
}
</style>
