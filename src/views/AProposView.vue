<template>
    <div class="about-view">
        <!-- Présentation Personnelle -->
        <section class="section">
            <h2>À Propos de Moi</h2>
            <p>
                Je suis <span class="colored">Turbé Keylian</span>, j'ai <span class="colored">{{ displayedAge }}
                    ans</span> et je suis en troisième année de <span class="colored">BUT Informatique</span> parcours
                développement Web & Application. Interessé par le développement, mon parcours m'a permis de réaliser
                divers projets techniques allant du développement d'API en <span class="colored">Node.js</span> à la
                création d'applications mobiles avec <span class="colored">Flutter</span>, en passant par la gestion de
                bases de données.
            </p>
            <p>
                Mon approche est de toujours apprendre de nouvelles choses, d'optimiser mes compétences et
                de comprendre les principes fondamentaux de chaque technologie que j'explore.
            </p>
            <p>
                Je suis quelqu'un de patient, généreux, avec un bon esprit d'équipe et une bonne gestion
                de mon emploi du temps.
            </p>
        </section>

        <!-- Compétences Techniques -->
        <section class="section">
            <h2>Compétences Techniques</h2>

            <div class="skills-category">
                <!-- Back-end (colonne 1) -->
                <div class="skills-subcategory">
                    <h4>Back-end</h4>
                    <p>Je maîtrise la création et la gestion de serveurs, d'API et de bases de données,
                        nottament avec du PHP, Node.js, PostgreSQL et Dart.</p>
                    <ul class="tech-list">
                        <li class="icon" title="PHP" @click="$router.push({
                            name: 'projets',
                            query: { filter: 'langage', value: 'PHP' }
                        })">
                            <DePhpOriginal />
                        </li>
                        <li class="icon" title="JavaScript">
                            <DeJavascriptOriginal />
                        </li>
                        <li class="icon" title="PostgreSQL" @click="$router.push({
                            name: 'projets',
                            query: { filter: 'langage', value: 'SQL' }
                        })">
                            <AnOutlinedConsoleSql />
                        </li>
                        <li class="icon" title="Node.js" @click="$router.push({
                            name: 'projets',
                            query: { filter: 'langage', value: 'Node.JS' }
                        })">
                            <DeNodejsPlainWordmark />
                        </li>
                    </ul>
                </div>

                <!-- Front-end (colonne 2) -->
                <div class="skills-subcategory">
                    <h4>Front-end</h4>
                    <p>Compétences en conception d'interfaces web interactives et responsive, en utilisant HTML, CSS et
                        JavaScript.</p>
                    <ul class="tech-list">
                        <li class="icon" title="HTML">
                            <DeHtml5OriginalWordmark />
                        </li>
                        <li class="icon" title="CSS">
                            <DeCss3OriginalWordmark />
                        </li>
                        <li class="icon" title="JavaScript">
                            <DeJavascriptOriginal />
                        </li>
                    </ul>
                </div>

                <!-- Applications (ligne 2, pleine largeur) -->
                <div class="skills-subcategory">
                    <h4>Applications</h4>
                    <p>Développement d'applications et scripts variés avec Java, Python, F#, C et C++.</p>
                    <ul class="tech-list">
                        <li class="icon" title="Java" @click="$router.push({
                            name: 'projets',
                            query: { filter: 'langage', value: 'Java' }
                        })">
                            <DeJavaOriginalWordmark />
                        </li>
                        <li class="icon" title="Python" @click="$router.push({
                            name: 'projets',
                            query: { filter: 'langage', value: 'Python' }
                        })">
                            <DePythonOriginalWordmark />
                        </li>
                        <li class="icon" title="F#">
                            <VsFileTypeFsharp2 />
                        </li>
                        <li class="icon" title="C">
                            <DeCOriginal />
                        </li>
                        <li class="icon" title="C++" @click="$router.push({
                            name: 'projets',
                            query: { filter: 'langage', value: 'C++' }
                        })">
                            <DeCplusplusOriginal />
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Outils et Méthodologies -->
        <section class="section tools">
            <h2>Outils & Méthodologies</h2>

            <div class="skills-category">
                <!-- Méthodes de travail (colonne 1) -->
                <div class="skills-subcategory">
                    <h4>Méthodes de travail</h4>
                    <p>Expérience avec les systèmes de versioning et la collaboration en équipe, ainsi que
                        l'automatisation avec CI/CD.</p>
                    <ul class="tech-list">
                        <li class="icon" title="Git">
                            <DeGitOriginal />
                        </li>
                        <li class="icon" title="GitHub">
                            <AkGithubFill />
                        </li>
                        <li class="icon" title="GitLab">
                            <DeGitlabOriginal />
                        </li>
                        <li class="icon" title="CI/CD">
                            <AnOutlinedDeploymentUnit />
                        </li>
                    </ul>
                </div>

                <!-- Frameworks (colonne 2) -->
                <div class="skills-subcategory">
                    <h4>Frameworks</h4>
                    <p>Utilisation de frameworks et bibliothèques pour accélérer le développement front et back-end.
                        Symfony, JavaFX, Vue.js, Express.js et Flutter.
                    </p>
                    <ul class="tech-list">
                        <li class="icon" title="Symfony">
                            <FaBandsSymfony />
                        </li>
                        <li class="icon" title="JavaFX">
                            <DeJavaOriginalWordmark />
                        </li>
                        <li class="icon" title="Vue.js" @click="$router.push({
                            name: 'projets',
                            query: { filter: 'langage', value: 'PHP' }
                        })">
                            <DeVuejsOriginalWordmark />
                        </li>
                        <li class="icon" title="Express.js">
                            <SiExpress />
                        </li>
                    </ul>
                </div>

                <!-- Environnement de développement (ligne 2, pleine largeur) -->
                <div class="skills-subcategory">
                    <h4>Environnement de développement</h4>
                    <p>Outils professionnels pour coder efficacement, tester et déployer des projets dans différents
                        environnements. Visual Studio Code, IntelliJ IDEA, Docker et GitKraken.</p>
                    <ul class="tech-list">
                        <li class="icon" title="VS Code">
                            <DeVscodeOriginal />
                        </li>
                        <li class="icon" title="IntelliJ IDEA">
                            <DeIntellijOriginal />
                        </li>
                        <li class="icon" title="Docker">
                            <DeDockerPlainWordmark />
                        </li>
                        <li class="icon" title="GitKraken">
                            <CoBrandGitkraken />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'

import {
    DeJavaOriginalWordmark,
    DePhpOriginal,
    DeJavascriptOriginal,
    DePythonOriginalWordmark,
    DeNodejsPlainWordmark,
    DeDockerPlainWordmark,
    DeVuejsOriginalWordmark,
    AnOutlinedConsoleSql,
    AkGithubFill,
    DeGitOriginal,
    DeHtml5OriginalWordmark,
    DeCss3OriginalWordmark,
    VsFileTypeFsharp2,
    DeCOriginal,
    DeCplusplusOriginal,
    FaBandsSymfony,
    SiExpress,
    DeVscodeOriginal,
    DeIntellijOriginal,
    DeGitlabOriginal,
    AnOutlinedDeploymentUnit,
    CoBrandGitkraken
} from '@kalimahapps/vue-icons'

// Date de naissance
const birthDate = new Date('2005-10-15')

// Calcul de l'âge réel
function calculateAge() {
    const now = new Date()
    let years = now.getFullYear() - birthDate.getFullYear()
    const monthDiff = now.getMonth() - birthDate.getMonth()
    const dayDiff = now.getDate() - birthDate.getDate()
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) years--
    return years
}

const ageReal = calculateAge()
const displayedAge = ref(0)

// On anime le compteur
onMounted(() => {
    const duration = 1500 // durée de l'animation en ms
    const steps = 30 // nombre d'étapes
    const increment = ageReal / steps
    let currentStep = 0

    const interval = setInterval(() => {
        currentStep++
        displayedAge.value = Math.round(currentStep * increment)
        if (currentStep >= steps) {
            displayedAge.value = ageReal
            clearInterval(interval)
        }
    }, duration / steps)
})
</script>

<style scoped>
/* Sont présent dans le style global de app.vue : 
  .projets-view
  .section
  .tech-list li
*/

/* ======== */
/* A Propos */
/* ======== */

/* --- Grille pour les catégories de compétences --- */
.skills-category {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
}

.skills-subcategory:last-child {
    grid-column: 1 / -1;
}

/* Pour la section outils : 2 colonnes puis 1 pleine largeur */
.skills-category {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
}

.skills-subcategory:last-child {
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

.tech-list li:hover {
    background-color: var(--color-secondary);
    border-color: var(--color-accent);
    box-shadow: var(--shadow-hover);
    color: var(--color-accent);
    transform: translateY(-5px) scale(1.02);
}

.tech-list .icon {
    font-size: 3rem;
    color: var(--color-accent);
}

/* ========================== */
/* RESPONSIVE STYLES          */
/* ========================== */

/* Tablettes */
@media screen and (max-width: 1024px) {
    .about-view {
        padding: 3rem 4%;
    }

    .section h2 {
        font-size: 2rem;
    }

    .skills-subcategory {
        padding: 1.5rem;
    }

    .skills-subcategory h4 {
        font-size: 1.3rem;
    }

    .tech-list {
        grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
        gap: 0.8rem;
    }

    .tech-list li {
        padding: 1.2rem;
        min-height: 90px;
    }

    .tech-list .icon {
        font-size: 2.5rem;
    }
}

/* Petites tablettes et grands mobiles */
@media screen and (max-width: 768px) {
    .about-view {
        padding: 2.5rem 4%;
    }

    .section h2 {
        font-size: 1.8rem;
        margin-bottom: 1.2rem;
    }

    /* Passage en 1 colonne pour les catégories */
    .skills-category {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .skills-subcategory:last-child {
        grid-column: 1;
    }

    .skills-subcategory {
        padding: 1.5rem;
    }

    .skills-subcategory h4 {
        font-size: 1.2rem;
    }

    .skills-subcategory p {
        font-size: 0.9rem;
    }

    .tech-list {
        grid-template-columns: repeat(auto-fit, minmax(65px, 1fr));
        gap: 0.7rem;
    }

    .tech-list li {
        padding: 1rem;
        min-height: 80px;
    }

    .tech-list .icon {
        font-size: 2.2rem;
    }

    .section {
        margin-bottom: 4rem;
    }
}

/* Mobiles */
@media screen and (max-width: 480px) {
    .about-view {
        padding: 2rem 3%;
    }

    .section h2 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        letter-spacing: 1px;
    }

    .section p {
        font-size: 0.95rem;
        line-height: 1.6;
    }

    .skills-category {
        gap: 1.2rem;
    }

    .skills-subcategory {
        padding: 1.2rem;
        border-radius: 10px;
    }

    .skills-subcategory h4 {
        font-size: 1.1rem;
        margin-bottom: 0.8rem;
    }

    .skills-subcategory p {
        font-size: 0.85rem;
        margin-bottom: 1.2rem;
    }

    /* Grille plus compacte avec moins d'éléments par ligne */
    .tech-list {
        grid-template-columns: repeat(3, 1fr);
        gap: 0.6rem;
    }

    .tech-list li {
        padding: 0.8rem;
        min-height: 70px;
        border-radius: 10px;
    }

    .tech-list .icon {
        font-size: 1.8rem;
    }

    .section {
        margin-bottom: 3rem;
    }
}

/* Très petits mobiles */
@media screen and (max-width: 360px) {
    .about-view {
        padding: 1.5rem 3%;
    }

    .section h2 {
        font-size: 1.3rem;
    }

    .section p {
        font-size: 0.9rem;
    }

    .skills-subcategory {
        padding: 1rem;
    }

    .skills-subcategory h4 {
        font-size: 1rem;
    }

    .skills-subcategory p {
        font-size: 0.8rem;
    }

    .tech-list {
        grid-template-columns: repeat(2, 1fr);
        gap: 0.5rem;
    }

    .tech-list li {
        padding: 0.7rem;
        min-height: 65px;
    }

    .tech-list .icon {
        font-size: 1.6rem;
    }
}
</style>