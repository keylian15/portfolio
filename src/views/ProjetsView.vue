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
      </div>
    </div>

    <div class="projets-grid">
      <ProjetCard v-for="projet in projetsFiltres" :key="projet.id" :projet="projet" />
    </div>
  </div>
</template>

<script>
import '@/style/Projets.css'

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

export default {
  name: 'ProjetsView',
  components: {
    ProjetCard,
    FilterSelect,
  },
  data() {
    return {
      projets: [
        {
          nom: 'Blue Frontline',
          description:
            "Dans un monde moderne bouleversé par la chute d'une météorite, l'environnement s'est transformé en un archipel d'îles quantiques. Deux grandes puissances s'affrontent pour contrôler cette zone et y mener des recherches. Votre objectif: détruire la base adverse. Combattez vous contre un joueur, une IA ou même en temps que spéctateur ? C'est à vous de décider ! ",
          github: 'https://github.com/keylian15/Blue_Frontline',
          nombreMembres: 6,
          duree: '3 mois',
          annee: 3,
          langage: 'Python',
          image: logoBF,
        },
        {
          nom: 'NodeBuster',
          description:
            'Ceci est un projet inspiré du jeu NodeBuster. Il met en œuvre des bonnes pratiques de qualité de code et de tests.',
          github: 'https://github.com/keylian15/nodeBuster',
          nombreMembres: 1,
          duree: '1 mois',
          annee: 2,
          langage: 'Java',
          image: logoNB,
        },
        {
          nom: 'Jeu de la Vie',
          description: 'Ce projet implémente le célèbre Jeu de la Vie de John Conway',
          github: 'https://github.com/keylian15/Jeu_de_la_vie',
          nombreMembres: 1,
          duree: '1 mois',
          annee: 2,
          langage: 'C++',
          image: logoJDLV,
        },
        {
          nom: 'Académia',
          description:
            "Académia est une application web conçue pour gérer efficacement les informations académiques, incluant les étudiants, les cours, les enseignants et les inscriptions. L'application offre une interface intuitive pour la consultation, la modification et le suivi des données, facilitant ainsi l'administration académique et le suivi pédagogique",
          github: 'https://github.com/keylian15/Academia',
          nombreMembres: 1,
          duree: '3 mois',
          annee: 2,
          langage: 'PHP',
          image: logoAC,
        },
        {
          nom: 'API Pokémon',
          description:
            "Notre projet est de créer une Application fullstack permettant de gérer des cartes pokémons. Dans ce module nous allons nous concentrer sur la partie backend de l'application.",
          github: 'https://github.com/keylian15/pokemon-api',
          nombreMembres: 1,
          duree: '1 mois',
          annee: 2,
          langage: 'Node.JS',
          image: logoAPIP,
        },
        {
          nom: 'Front Pokémon TCG',
          description:
            "C'est le front de l'application fullstack permettant de gérer des cartes pokémons.",
          github: 'https://github.com/keylian15/pokemon-tcg',
          nombreMembres: 1,
          duree: '1 mois',
          annee: 2,
          langage: 'Vue.JS',
          image: logoFP,
        },
        {
          nom: 'JEI App',
          description:
            "Ce projet est une application mobile inspirée de Minecraft, permettant d'explorer les objets du jeu, leurs recettes de craft et de sauvegarder ses favoris localement.",
          github: 'https://github.com/keylian15/flutterproject',
          nombreMembres: 3,
          duree: '1 mois',
          annee: 2,
          langage: 'Flutter',
          image: logoJEI,
        },
        {
          nom: 'Tic Tac Toe',
          description:
            'Ce projet est un jeu de morpion en local jouable sur le même ordinateur avec des spectateurs.',
          github: 'https://github.com/keylian15/Tic-Tac-Toe-Network',
          nombreMembres: 3,
          duree: '1 mois',
          annee: 2,
          langage: 'C++',
          image: logoTTT,
        },
        {
          nom: 'ERP',
          description:
            "Le but de ce projet était d'intégrer la logique de l'ERP dans une application mobile",
          github: 'https://github.com/keylian15/Flutter_ERP',
          nombreMembres: 1,
          duree: '1 mois',
          annee: 2,
          langage: 'Flutter',
          image: logoERP,
        },
        {
          nom: 'Magasin',
          description:
            "Le nonovMarket est un logiciel permetant de gérer le rayonnage de produit dans un hypermarché, ainsi que d'offrir au client une possibilité de gain de temps via un algorithme permettant de recuperer de facon optiomal les produits.",
          github: 'https://gitlab.com/nonov1012/nonovmarket',
          nombreMembres: 4,
          duree: '1 mois',
          annee: 1,
          langage: 'Python',
          image: logoNM,
        },
      ],
      search: '',
      filtreActif: 'nom',
      filtreValeur: null,

      filters: [
        { label: 'Nom', value: 'nom' },
        { label: 'Année', value: 'annee' },
        { label: 'Membres', value: 'membres' },
        { label: 'Langage', value: 'langage' },
      ],
      selectedFilter: { label: 'Nom', value: 'nom' },
    }
  },

  computed: {
    projetsFiltres() {
      let result = [...this.projets]

      // Filtre par recherche
      result = result.filter((p) => p.nom.toLowerCase().includes(this.search.toLowerCase()))

      switch (this.filtreActif) {
        case 'nom':
          result.sort((a, b) => a.nom.localeCompare(b.nom))
          break

        case 'annee':
          if (this.filtreValeur !== null) {
            result = result.filter((p) => p.annee == this.filtreValeur)
          }
          result.sort((a, b) => a.annee - b.annee)
          break

        case 'membres':
          if (this.filtreValeur !== null) {
            result = result.filter((p) => p.nombreMembres == this.filtreValeur)
          }
          result.sort((a, b) => a.nombreMembres - b.nombreMembres)
          break

        case 'langage':
          if (this.filtreValeur !== null) {
            result = result.filter((p) => p.langage === this.filtreValeur)
          }
          result.sort((a, b) => a.langage.localeCompare(b.langage))
          break
      }

      return result
    },

    anneeMin() {
      return Math.min(...this.projets.map((p) => p.annee))
    },
    anneeMax() {
      return Math.max(...this.projets.map((p) => p.annee))
    },

    membresMin() {
      return Math.min(...this.projets.map((p) => p.nombreMembres))
    },
    membresMax() {
      return Math.max(...this.projets.map((p) => p.nombreMembres))
    },
    anneesDisponibles() {
      const set = new Set(this.projets.map((p) => p.annee))
      return [...set].sort((a, b) => a - b)
    },

    membresDisponibles() {
      const set = new Set(this.projets.map((p) => p.nombreMembres))
      return [...set].sort((a, b) => a - b)
    },

    langageDisponibles() {
      const set = new Set(this.projets.map((p) => p.langage))
      return [...set].sort((a, b) => a - b)
    },
  },
  watch: {
    selectedFilter(newValue) {
      this.filtreActif = newValue.value
    },

    filtreActif(newValue) {
      if (newValue === 'annee') {
        this.filtreValeur = this.anneeMin
      } else if (newValue === 'membres') {
        this.filtreValeur = this.membresMin
      } else {
        this.filtreValeur = null
      }
    },
  },

  mounted() {
    window.addEventListener('keydown', this.handleShortcut)
  },

  beforeUnmount() {
    window.removeEventListener('keydown', this.handleShortcut)
  },

  methods: {
    handleShortcut(e) {
      if (e.ctrlKey && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        this.$refs.searchInput.focus()
      }
    },
  },
}
</script>
