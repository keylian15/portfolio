<template>
  <div class="projets-view">
    <div class="projets-header">
      <div class="search-bar">
        <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
        <input type="text" placeholder="Rechercher un projet..." class="search-input" v-model="search"
          ref="searchInput" />
      </div>
      <div class="filters-group">
        <FilterSelect v-model="selectedFilter" :options="filters" class="w-48" />

        <!-- Boutons année -->
        <div v-if="filtreActif === 'annee'" class="buttons-wrapper">
          <button v-for="a in anneesDisponibles" :key="a" :class="['filter-btn', { active: filtreValeur === a }]"
            @click="filtreValeur = a">
            BUT {{ a }}
          </button>
        </div>

        <!-- Boutons membres -->
        <div v-if="filtreActif === 'membres'" class="buttons-wrapper">
          <button v-for="m in membresDisponibles" :key="m" :class="['filter-btn', { active: filtreValeur === m }]"
            @click="filtreValeur = m">
            {{ m }}
          </button>
        </div>

        <!-- Boutons Langages -->
        <div v-if="filtreActif === 'langage'" class="buttons-wrapper">
          <button v-for="m in langageDisponibles" :key="m" :class="['filter-btn', { active: filtreValeur === m }]"
            @click="filtreValeur = m">
            {{ m }}
          </button>
        </div>

        <!-- Boutons Non Scolaire -->
        <div v-if="filtreActif === 'nonScolaire'" class="buttons-wrapper">
          <button v-for="m in nonScolaireDisponibles" :key="m" :class="['filter-btn', { active: filtreValeur === m }]"
            @click="filtreValeur = m">
            {{ m }}
          </button>
        </div>

      </div>
    </div>

    <div class="projets-grid">
      <template v-if="projetsFiltres.length > 0">
        <ProjetCard v-for="projet in projetsFiltres" :key="projet.id" :projet="projet" />
      </template>
      <p v-else class="no-projects">Aucun projet trouvé.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import ProjetCard from '@/components/ProjetCard.vue'
import FilterSelect from '@/components/FilterSelect.vue'

import logoBF from '@/assets/logo_BF.png'
import logoNB from '@/assets/logo_NB.png'
import logoNM from '@/assets/logo_NM.png'
import logoJDLV from '@/assets/logo_JDLV.png'
import logoAC from '@/assets/logo_AC.png'
import logoFP from '@/assets/logo_FP.png'
import logoAPIP from '@/assets/logo_APIP.png'
import logoJEI from '@/assets/logo_JEI.png'
import logoTTT from '@/assets/logo_TTT.png'
import logoERP from '@/assets/logo_ERP.png'
import logoPF from '@/assets/logo_PF.png'
import logoWB from '@/assets/logo_WB.png'
import logoAPIB from '@/assets/logo_APIB.png'

const router = useRouter()
const route = useRoute()

const projets = ref([
  {
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
  },
  {
    nom: 'NodeBuster',
    description:
      'Ceci est un projet inspiré du jeu NodeBuster. Il met en œuvre des bonnes pratiques de qualité de code et de tests.',
    github: 'https://github.com/keylian15/nodeBuster',
    nombreMembres: 1,
    duree: '1 mois',
    annee: 2,
    langages: ['Java'],
    image: logoNB,
    scolaire: true,
  },
  {
    nom: 'Jeu de la Vie',
    description: 'Ce projet implémente le célèbre Jeu de la Vie de John Conway',
    github: 'https://github.com/keylian15/Jeu_de_la_vie',
    nombreMembres: 1,
    duree: '1 mois',
    annee: 2,
    langages: ['C++'],
    image: logoJDLV,
    scolaire: true,
  },
  {
    nom: 'Académia',
    description:
      "Académia est une application web conçue pour gérer efficacement les informations académiques, incluant les étudiants, les cours, les enseignants et les inscriptions. L'application offre une interface intuitive pour la consultation, la modification et le suivi des données, facilitant ainsi l'administration académique et le suivi pédagogique",
    github: 'https://github.com/keylian15/Academia',
    nombreMembres: 1,
    duree: '3 mois',
    annee: 2,
    langages: ['PHP', 'SQL'],
    image: logoAC,
    scolaire: true,
  },
  {
    nom: 'API Pokémon',
    description:
      "Notre projet est de créer une Application fullstack permettant de gérer des cartes pokémons. Dans ce module nous allons nous concentrer sur la partie backend de l'application.",
    github: 'https://github.com/keylian15/pokemon-api',
    nombreMembres: 1,
    duree: '1 mois',
    annee: 2,
    langages: ['Node.JS', 'SQL'],
    image: logoAPIP,
    scolaire: true,
  },
  {
    nom: 'Front Pokémon TCG',
    description:
      "C'est le front de l'application fullstack permettant de gérer des cartes pokémons.",
    github: 'https://github.com/keylian15/pokemon-tcg',
    nombreMembres: 1,
    duree: '1 mois',
    annee: 2,
    langages: ['Vue.JS'],
    image: logoFP,
    scolaire: true,
  },
  {
    nom: 'JEI App',
    description:
      "Ce projet est une application mobile inspirée de Minecraft, permettant d'explorer les objets du jeu, leurs recettes de craft et de sauvegarder ses favoris localement.",
    github: 'https://github.com/keylian15/flutterproject',
    nombreMembres: 3,
    duree: '1 mois',
    annee: 2,
    langages: ['Flutter', 'Dart'],
    image: logoJEI,
    scolaire: true,
  },
  {
    nom: 'Tic Tac Toe',
    description:
      'Ce projet est un jeu de morpion en local jouable sur le même ordinateur avec des spectateurs.',
    github: 'https://github.com/keylian15/Tic-Tac-Toe-Network',
    nombreMembres: 3,
    duree: '1 mois',
    annee: 2,
    langages: ['C++'],
    image: logoTTT,
    scolaire: true,
  },
  {
    nom: 'ERP',
    description:
      "Le but de ce projet était d'intégrer la logique de l'ERP dans une application mobile",
    github: 'https://github.com/keylian15/Flutter_ERP',
    nombreMembres: 1,
    duree: '1 mois',
    annee: 2,
    langages: ['Flutter', 'Dart'],
    image: logoERP,
    scolaire: true,
  },
  {
    nom: 'Magasin',
    description:
      "Le nonovMarket est un logiciel permetant de gérer le rayonnage de produit dans un hypermarché, ainsi que d'offrir au client une possibilité de gain de temps via un algorithme permettant de recuperer de facon optiomal les produits.",
    github: 'https://gitlab.com/nonov1012/nonovmarket',
    nombreMembres: 4,
    duree: '1 mois',
    annee: 1,
    langages: ['Python'],
    image: logoNM,
    scolaire: true,
  },
  {
    nom: 'Portfolio',
    description:
      "Le but de ce projet était de créer un portfolio pour présenter mes compétences et mes projets",
    github: 'https://gitlab.com/keylian15/portfolio',
    nombreMembres: 1,
    duree: '1 ans',
    annee: 3,
    langages: ['Vue.JS'],
    image: logoPF,
    scolaire: true,
  },
  {
    nom: 'Basket Predictor',
    description:
      "Le but de cette application web est de prédire le score d'un match de basket. (Le Front du projet)",
    github: 'https://gitlab.com/keylian15/WEB_Basket',
    nombreMembres: 5,
    duree: '1 mois',
    annee: 2,
    langages: ['PHP', 'SQL'],
    image: logoWB,
    scolaire: true,
  },
  {
    nom: 'Basket Predictor (API)',
    description:
      "Le but de cette application web est de prédire le score d'un match de basket. (Le Back du projet)",
    github: 'https://gitlab.com/keylian15/API_Basket',
    nombreMembres: 1,
    duree: '1 mois',
    annee: 2,
    langages: ['Node.JS'],
    image: logoAPIB,
    scolaire: true,
  },
])

const search = ref('')
const filtreActif = ref('nom')
const filtreValeur = ref(null)
const langagesSelectionnes = ref([])
const searchInput = ref(null)

const filters = ref([
  { label: 'Nom', value: 'nom' },
  { label: 'Année', value: 'annee' },
  { label: 'Membres', value: 'membres' },
  { label: 'Langage', value: 'langage' },
  { label: 'Non Scolaire', value: 'nonScolaire' },
])

const selectedFilter = ref({ label: 'Nom', value: 'nom' })

// Computed
const projetsFiltres = computed(() => {
  let result = [...projets.value]

  // Filtre par recherche
  result = result.filter((p) => p.nom.toLowerCase().includes(search.value.toLowerCase()))

  switch (filtreActif.value) {
    case 'nom':
      result.sort((a, b) => a.nom.localeCompare(b.nom))
      break

    case 'annee':
      if (filtreValeur.value !== null) {
        result = result.filter((p) => p.annee == filtreValeur.value)
      }
      result.sort((a, b) => a.annee - b.annee)
      break

    case 'membres':
      if (filtreValeur.value !== null) {
        result = result.filter((p) => p.nombreMembres == filtreValeur.value)
      }
      result.sort((a, b) => a.nombreMembres - b.nombreMembres)
      break

    case 'langage':
      if (filtreValeur.value !== null) {
        result = result.filter(p =>
          p.langages.includes(filtreValeur.value)
        )
      }
      result.sort((a, b) => a.nom.localeCompare(b.nom))
      break

    case 'nonScolaire':
      result = result.filter((p) => p.scolaire === false)
      result.sort((a, b) => a.nom.localeCompare(b.nom))
      break
  }
  return result
})

const annee = computed(() => {
  return Math.min(...projets.value.map((p) => p.annee))
})

const membres = computed(() => {
  return Math.min(...projets.value.map((p) => p.nombreMembres))
})

const anneesDisponibles = computed(() => {
  const set = new Set(projets.value.map((p) => p.annee))
  return [...set].sort((a, b) => a - b)
})

const membresDisponibles = computed(() => {
  const set = new Set(projets.value.map((p) => p.nombreMembres))
  return [...set].sort((a, b) => a - b)
})

const langageDisponibles = computed(() => {
  const set = new Set()
  projets.value.forEach(p => {
    p.langages.forEach(lang => set.add(lang))
  })
  return [...set].sort((a, b) => a.localeCompare(b))
})

// Watchers
watch(selectedFilter, (newValue) => {
  filtreActif.value = newValue.value
})

watch(filtreActif, (newValue) => {
  // Réinitialiser les filtres lors du changement
  if (newValue !== 'langage') {
    langagesSelectionnes.value = []
  }

  if (route.query.value || route.query.langages) {
    return
  }

  if (newValue === 'annee') {
    filtreValeur.value = annee.value
  } else if (newValue === 'membres') {
    filtreValeur.value = membres.value
  } else {
    filtreValeur.value = null
  }
})

// Synchroniser l'URL avec les langages sélectionnés
watch(langagesSelectionnes, (newValue) => {
  if (filtreActif.value === 'langage' && newValue.length > 0) {
    router.replace({
      query: {
        ...route.query,
        filter: 'langage',
        langages: newValue.join(',')
      }
    })
  } else if (filtreActif.value === 'langage' && newValue.length === 0) {
    const query = { ...route.query }
    delete query.langages
    router.replace({ query })
  }
})

// Methods
function handleShortcut(e) {
  if (e.ctrlKey && e.key.toLowerCase() === 'k') {
    e.preventDefault()
    searchInput.value?.focus()
  }
}

// Lifecycle
onMounted(() => {
  const { filter, value, langages } = route.query

  if (filter) {
    const option = filters.value.find(f => f.value === filter)
    if (option) {
      selectedFilter.value = option
      filtreActif.value = filter

      // Gérer le cas des langages multiples
      if (filter === 'langage' && langages) {
        langagesSelectionnes.value = langages.split(',')
      } else {
        filtreValeur.value = value ?? null
      }
    }
  }

  window.addEventListener('keydown', handleShortcut)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleShortcut)
})
</script>

<style scoped>
/* Sont présent dans le style global de app.vue : 
  .projets-view
*/

/* =========================== */
/* Page et section des projets */
/* =========================== */

/* --- Header de la page projets --- */
.projets-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  margin-bottom: 3rem;
}

/* --- Barre de recherche --- */
.search-bar {
  position: relative;
  flex: 1 1 300px;
  max-width: 500px;
  background: none;
  border: none;
}

.search-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-light);
}

.search-input {
  width: 100%;
  padding: 0.75rem 0.75rem 0.75rem 2.5rem;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  background-color: var(--color-background-card);
  transition: all 0.3s ease;
}

.search-input:focus {
  border-color: var(--color-accent);
  box-shadow: 0 0 0 2px var(--color-accent);
  outline: none;
}

.search-input::placeholder {
  color: var(--color-text-light);
}

.search-input:hover,
.filter-btn:hover {
  background-color: var(--color-background-card);
  border-color: var(--color-accent);
  box-shadow: var(--shadow-hover);
}

/* --- Conteneur pour grouper le FilterSelect et les boutons --- */
.filters-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
}

/* --- Boutons de filtre --- */
.buttons-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
}

.filter-btn {
  padding: 0.75rem 1.2rem;
  border-radius: 8px;
  background-color: var(--color-secondary);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  cursor: pointer;
  transition: all 0.3s ease;
}


.filter-btn.active {
  background-color: var(--color-accent);
  color: var(--color-primary);
}

/* --- Grille des Projets --- */
.projets-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}
</style>