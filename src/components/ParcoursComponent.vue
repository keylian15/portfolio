<script setup>
import { ref, computed } from 'vue'

const parcours = ref([
    {
        date: '2020-2023',
        title: 'Baccalauréat Général',
        description: "Baccalauréat Général avec spécialité Mathématiques, Physique-Chimie et NSI. J'ai également pris l'option Maths expertes en terminale. Obtention du Baccalauréat avec la mention Assez Bien.",
        icon: '🎓'
    },
    {
        date: '2023-2026',
        title: 'BUT Informatique',
        description: "Actuellement étudiant en troisième année de BUT Informatique à l'IUT de Calais, où je développe mes connaissances en programmation, mais surtout en développement web et applicatif.",
        icon: '🏫'
    },
    {
        date: '2025',
        title: 'Stage de deuxième année de BUT',
        description: "J'ai effectué un stage de 8 semaines dans l'entreprise JMD-Ingénieurie. J'ai participé à la création de plusieurs applications web comme Boucovoiturage, La Boucoop et même Ges-War.",
        icon: '💼'
    }
])

const activeIndex = ref(1)

// Calcul du pourcentage de progression
const progressWidth = computed(() => {
    const maxWidth = 90 // 100% - 10% (5% de chaque côté)
    return (activeIndex.value / (parcours.value.length - 1)) * maxWidth
})
</script>

<template>
    <div class="parcours-view">
        <h2 class="centered">Mon <span class="colored">Parcours</span></h2>

        <div class="timeline-horizontal">
            <!-- Container des items et de la ligne -->
            <div class="timeline-track">
                <!-- Ligne de base (grise) -->
                <div class="timeline-line-base"></div>

                <!-- Ligne de progression (colorée) -->
                <div class="timeline-line-progress" :style="{ width: progressWidth + '%' }"></div>

                <!-- Items -->
                <div class="timeline-items">
                    <div v-for="(item, index) in parcours" :key="index" class="timeline-item"
                        :class="{ 'active': activeIndex === index }" @click="activeIndex = index">
                        <!-- Date au-dessus -->
                        <div class="timeline-date">{{ item.date }}</div>

                        <!-- Dot avec icon -->
                        <div class="timeline-dot">
                            <span class="icon">{{ item.icon }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Carte de contenu en-dessous -->
            <div class="timeline-content-card">
                <h3>{{ parcours[activeIndex].title }}</h3>
                <p>{{ parcours[activeIndex].description }}</p>
            </div>
        </div>

    </div>
</template>

<style scoped>
.parcours-view {
    font-family: var(--font-family-main);
    color: var(--color-text);
    line-height: 1.6;
    background-color: var(--color-background-main);
    min-height: 100vh;
    margin: 0 auto;
    padding: 4rem 5%;
    border-top: var(--color-accent) 1px solid;
}


.timeline-horizontal {
    margin: 4rem auto;
    position: relative;
}

/* Container de la timeline */
.timeline-track {
    position: relative;
    margin-bottom: 3rem;
}

/* Ligne de base (grise) */
.timeline-line-base {
    position: absolute;
    top: 70%;
    left: 5%;
    right: 5%;
    height: 4px;
    background: var(--color-border);
    transform: translateY(-50%);
    z-index: 1;
    border-radius: 2px;
}

/* Ligne de progression (colorée avec animation) */
.timeline-line-progress {
    position: absolute;
    top: 70%;
    left: 5%;
    height: 4px;
    background: linear-gradient(90deg, var(--color-accent) 0%, var(--color-accent) 100%);
    transform: translateY(-50%);
    z-index: 2;
    border-radius: 2px;
    box-shadow: 0 0 15px rgba(92, 251, 228, 0.6);
    transition: width 0.5s ease;
}

/* Container des items */
.timeline-items {
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 3;
}

/* Chaque item */
.timeline-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease;
}

/* Date au-dessus du dot */
.timeline-date {
    color: var(--color-text-light);
    font-weight: bold;
    font-size: 0.85rem;
    margin-bottom: 2rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    white-space: nowrap;
}

.timeline-item.active .timeline-date,
.timeline-item:hover .timeline-date {
    color: var(--color-accent);
    text-shadow: var(--shadow-text-hero);
    transform: translateY(-3px);
}

/* Dot circulaire */
.timeline-dot {
    width: 70px;
    height: 70px;
    background: var(--color-background-card);
    border: 3px solid var(--color-border);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease;
    position: relative;
}

.icon {
    font-size: 2rem;
    transition: transform 0.4s ease;
}

.timeline-item:hover .timeline-dot,
.timeline-item.active .timeline-dot {
    border-color: var(--color-accent);
    box-shadow: var(--shadow-hover);
    transform: scale(1.15);
    background: var(--color-secondary);
}

.timeline-item:hover .icon,
.timeline-item.active .icon {
    transform: rotate(360deg) scale(1.1);
}

/* Carte de contenu */
.timeline-content-card {
    background: var(--color-background-card);
    border: 2px solid var(--color-border);
    border-radius: 16px;
    padding: 2.5rem;
    margin: 2rem auto 0;
    transition: all 0.4s ease;
}

.timeline-content-card:hover {
    border-color: var(--color-accent);
    box-shadow: 0 0 25px rgba(92, 251, 228, 0.3);
    transform: translateY(-3px);
}

.timeline-content-card h3 {
    color: var(--color-accent);
    font-size: 1.8rem;
    margin-bottom: 1rem;
    font-weight: 600;
}

.timeline-content-card p {
    color: var(--color-text-light);
    line-height: 1.8;
    font-size: 1.05rem;
}
</style>