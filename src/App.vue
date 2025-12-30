<script setup lang="ts">
import NavbarComponents from './components/NavbarComponents.vue';

</script>

<template>
  <NavbarComponents />
  <div class="navbar-spacer"></div>
  <router-view />
</template>

<style>
.navbar-spacer {
  height: 80px;
}

/* ========================================= */
/* GENERAL.CSS - Styles de base globaux     */
/* ========================================= */

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

.home,
.projets-view {
  font-family: var(--font-family-main);
  color: var(--color-text);
  line-height: 1.6;
  background-color: var(--color-background-main);
  min-height: 100vh;
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

/* --- Section Hero (Accueil) --- */
.hero {
  height: 100vh;
  background-color: var(--color-secondary);
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

/* --- Boutons CTA --- */
.cta,
.btn-projects {
  background-color: var(--color-accent);
  color: var(--color-primary);
  padding: 0.8rem 2.5rem;
  border-radius: 50px;
  border: 2px solid var(--color-border);
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-projects {
  padding: 0.8rem 2rem;
}

/* Hover général pour les éléments interactifs */
.cta:hover,
.btn-projects:hover,
.github-link:hover,
.tech-list li:hover,
.projet-card:hover {
  background-color: var(--color-secondary);
  color: var(--color-accent);
  transform: translateY(-5px) scale(1.02);
  box-shadow: var(--shadow-hover);
  border-color: var(--color-accent);
}

/* --- Sections Générales --- */
.content {
  padding: 6rem 10%;
  background-color: var(--color-background-main);
}

.section {
  margin-bottom: 6rem;
}

/* --- Grille pour les catégories de compétences --- */
.skills-category {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.skills-category .skills-subcategory:last-child {
  grid-column: 1 / -1;
}

/* Pour la section outils : 2 colonnes puis 1 pleine largeur */
.tools .skills-category {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.tools .skills-category .skills-subcategory:last-child {
  grid-column: 1 / -1;
}

/* Style des sous-catégories */
.skills-subcategory {
  background: var(--color-background-card);
  border: 2px solid var(--color-border);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 8px var(--color-primary);
  transition: all 0.3s ease;
}

.skills-subcategory:hover {
  border-color: var(--color-accent);
  box-shadow: 0 0 15px rgba(92, 251, 228, 0.3);
}

.skills-subcategory h4 {
  color: var(--color-accent);
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.skills-subcategory p {
  color: var(--color-text-light);
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

/* --- Compétences (Tech List) --- */
.tech-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.tech-list li {
  background: var(--color-primary);
  border: 2px solid var(--color-border);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  color: var(--color-text);
  min-height: 100px;
}

.tech-list .icon {
  font-size: 3rem;
  color: var(--color-accent);
}

/* --- Media Queries (Adaptabilité) --- */
@media (max-width: 900px) {
  .hero h1 {
    font-size: 3rem;
  }

  .content {
    padding: 4rem 5%;
  }

  .skills-category,
  .tools .skills-category {
    grid-template-columns: 1fr;
  }

  .skills-category .skills-subcategory:last-child,
  .tools .skills-category .skills-subcategory:last-child {
    grid-column: 1;
  }
}

@media (max-width: 600px) {
  .hero h1 {
    font-size: 2rem;
  }

  .tech-list {
    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
  }

  .tech-list .icon {
    font-size: 2.5rem;
  }
}
</style>