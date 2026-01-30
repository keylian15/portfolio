<script setup lang="ts">
import NavbarComponents from './components/NavbarComponents.vue';
import FooterComponents from './components/FooterComponents.vue';
</script>

<template>
  <NavbarComponents />
  <div class="navbar-spacer"></div>
  <router-view />
  <FooterComponents />
</template>

<style scoped>
.navbar-spacer {
  height: 5vh;
}
</style>

<style>
/* ========================== */
/* Styles de base globaux     */
/* ========================== */

/* --- Variables CSS --- */
:root {
  /* COULEURS (Bleu Profond & Émeraude Lumineux) */
  --color-primary: #071321;
  --color-secondary: #0d2035;
  --color-accent: #5cfbe4;
  --color-text: #ccd6f6;
  --color-text-light: #98a4c2;

  /* Arrière-plans des sections/cartes */
  --color-background-main: var(--color-primary);
  --color-background-card: var(--color-secondary);
  --color-border: #1a3554;
  --color-button-text-dark: var(--color-primary);

  /* Police */
  --font-family-main: 'Poppins', sans-serif;

  /* Ombres */
  --shadow-hover: 0 0 12px rgba(92, 251, 228, 0.9), 0 0 25px rgba(92, 251, 228, 0.5);
  --shadow-text-hero: 0 0 10px rgba(92, 251, 228, 0.5);
}

/* --- Reset & Base --- */
html,
body {
  margin: 0;
  padding: 0;
}

.centered {
  text-align: center;
  margin-top: 2rem;
}

.colored {
  color: var(--color-accent);
}

/* Scroll global */

/* Chrome / Edge / Safari */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: var(--color-background-main);
}

::-webkit-scrollbar-thumb {
  background-color: var(--color-accent);
  border-radius: 10px;
  border: 2px solid var(--color-background-main);
}

::-webkit-scrollbar-thumb:hover {
  background-color: var(--color-secondary);
}

/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: var(--color-accent) var(--color-background-main);
}

/* Couleur de sélection du texte */
::selection {
  background-color: var(--color-accent);
  color: var(--color-primary);
}

/* Firefox */
::-moz-selection {
  background-color: var(--color-accent);
  color: var(--color-primary);
}



.projets-view,
.about-view {
  font-family: var(--font-family-main);
  color: var(--color-text);
  line-height: 1.6;
  background-color: var(--color-background-main);
  min-height: 100vh;
  margin: 0 auto;
  padding: 4rem 5%;

}

/* --- Typographie --- */
.section h2,
.projets-header h1 {
  font-size: 2.5rem;
  color: var(--color-accent);
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.section {
  margin-bottom: 6rem;
}

/* --- Boutons CTA --- */
.cta,
.btn-projects,
.github-link {
  background-color: var(--color-accent);
  color: var(--color-primary);
  padding: 0.8rem 2.5rem;
  border-radius: 50px;
  border: 2px solid var(--color-border);
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

/* Hover général pour les éléments interactifs */
.cta:hover,
.btn-projects:hover,
.github-link:hover {
  background-color: var(--color-secondary);
  border-color: var(--color-accent);
  box-shadow: var(--shadow-hover);
  color: var(--color-accent);
  transform: translateY(-5px) scale(1.02);
}
</style>