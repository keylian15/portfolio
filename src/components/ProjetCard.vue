<template>
  <div class="projet-card">
    <div class="projet-image">
      <img :src="projet.image" :alt="projet.nom" />
    </div>
    <div class="projet-content">
      <h3 class="projet-nom">{{ projet.nom }}</h3>
      <p class="projet-description">{{ projet.description }}</p>

      <div class="projet-details">
        <div class="detail-item">
          <span class="detail-label">Membres: </span>
          <span class="detail-value">{{ projet.nombreMembres }}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Durée: </span>
          <span class="detail-value">{{ projet.duree }}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Année BUT: </span>
          <span class="detail-value">{{ projet.annee }}</span>
        </div>
        <div class="detail-item detail-item-full">
          <span class="detail-label">Langage: </span>
          <span v-for="(langage, index) in projet.langages" :key="langage">
            {{ langage }}<span v-if="index < projet.langages.length - 1">, </span>
          </span>
        </div>
      </div>

      <div class="centered">
        <a :href="projet.github" target="_blank" rel="noopener noreferrer" class="github-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          Voir sur GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  projet: {
    type: Object,
    required: true
  }
})
</script>


<style scoped>
/* Sont présent dans le style global de app.vue : 
  .github-link
  .centered
*/
/* ============================= */
/* Composant carte de projet     */
/* ============================= */

/* --- Carte de Projet --- */
.projet-card {
  background: var(--color-background-card);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 12px var(--color-primary);
  transition: all 0.3s ease;
  border: 2px solid var(--color-border);
}

.projet-card:hover {
  background-color: var(--color-secondary);
  border-color: var(--color-accent);
  box-shadow: var(--shadow-hover);
  color: var(--color-accent);
  transform: translateY(-5px) scale(1.02);
}


/* --- Image du projet --- */
.projet-image {
  width: 100%;
  height: 250px;
  overflow: hidden;
  border-bottom: 2px solid var(--color-border);
}

.projet-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.projet-image img {
  transform: scale(1.1);
}

/* --- Contenu de la carte --- */
.projet-content {
  padding: 24px;
}

.projet-nom {
  margin: 0 0 10px 0;
  font-size: 1.8rem;
  color: var(--color-accent);
}

.projet-description {
  margin: 0 0 16px 0;
  color: var(--color-text-light);
}

/* --- Détails du projet (grille 2x2) --- */
.projet-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem 1rem;
  margin: 1rem 0;
}

/* --- Détails du projet --- */
.detail-item {
  font-size: 0.95rem;
  color: var(--color-text-light);
}

.detail-item-full {
  grid-column: 1 / -1;
}

.detail-label {
  font-weight: 600;
  color: var(--color-text);
}

.detail-value {
  color: var(--color-text);
  font-size: 0.95rem;
  margin-top: 0.25rem;
}

/* ========================== */
/* RESPONSIVE STYLES          */
/* ========================== */

/* Tablettes */
@media screen and (max-width: 1024px) {
  .projet-image {
    height: 220px;
  }

  .projet-content {
    padding: 20px;
  }

  .projet-nom {
    font-size: 1.6rem;
  }

  .projet-description {
    font-size: 0.95rem;
  }

  .detail-item {
    font-size: 0.9rem;
  }
}

/* Petites tablettes et grands mobiles */
@media screen and (max-width: 768px) {
  .projet-card {
    border-radius: 12px;
  }

  .projet-image {
    height: 200px;
  }

  .projet-content {
    padding: 18px;
  }

  .projet-nom {
    font-size: 1.5rem;
    margin-bottom: 8px;
  }

  .projet-description {
    font-size: 0.9rem;
    margin-bottom: 14px;
  }

  .projet-details {
    gap: 0.6rem 0.8rem;
    margin: 0.8rem 0;
  }

  .detail-item {
    font-size: 0.85rem;
  }

  .github-link {
    padding: 0.7rem 2rem;
    font-size: 0.9rem;
  }
}

/* Mobiles */
@media screen and (max-width: 480px) {
  .projet-card {
    border-radius: 10px;
  }

  .projet-image {
    height: 180px;
  }

  .projet-content {
    padding: 16px;
  }

  .projet-nom {
    font-size: 1.3rem;
    margin-bottom: 8px;
  }

  .projet-description {
    font-size: 0.85rem;
    margin-bottom: 12px;
    line-height: 1.5;
  }

  /* Passage en une colonne sur mobile */
  .projet-details {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    margin: 0.8rem 0;
  }

  .detail-item-full {
    grid-column: 1;
  }

  .detail-item {
    font-size: 0.8rem;
  }

  .detail-label {
    font-size: 0.8rem;
  }

  .detail-value {
    font-size: 0.8rem;
  }

  .github-link {
    padding: 0.6rem 1.5rem;
    font-size: 0.85rem;
  }

  .github-link svg {
    width: 18px;
    height: 18px;
  }
}

/* Très petits mobiles */
@media screen and (max-width: 360px) {
  .projet-image {
    height: 160px;
  }

  .projet-content {
    padding: 14px;
  }

  .projet-nom {
    font-size: 1.2rem;
  }

  .projet-description {
    font-size: 0.8rem;
  }

  .detail-item {
    font-size: 0.75rem;
  }

  .github-link {
    padding: 0.55rem 1.3rem;
    font-size: 0.8rem;
  }

  .github-link svg {
    width: 16px;
    height: 16px;
  }
}
</style>