    <template>
        <div class="competences-page">

            <!-- Hero -->
            <header class="hero-competences">
                <p class="hero-label">BUT Informatique — 3ème année</p>
                <h1>Mes <span class="accent">Compétences</span></h1>
                <p class="hero-sub">Trois compétences clés développées tout au long de ma formation.</p>
            </header>

            <!-- C1 : Réaliser -->
            <section class="competence-block">
                <div class="competence-header">
                    <div class="competence-tag">C1</div>
                    <div class="competence-meta">
                        <span class="ue-label">UE6.1A</span>
                        <h2 class="competence-title">Réaliser</h2>
                        <p class="competence-desc">
                            Concevoir, développer et déployer des applications répondant à des besoins réels.
                            Cette compétence couvre la maîtrise des langages, des architectures logicielles et
                            des bonnes pratiques de développement, du prototype jusqu'à la mise en production.
                        </p>
                    </div>
                </div>

                <div class="projets-grid">
                    <ProjetCard :projet="getProjets('Blue Frontline')" />
                    <ProjetCard :projet="getProjets('Basket Predictor (API)')" />
                </div>
            </section>

            <div class="separator"></div>

            <!-- C2 : Optimiser -->
            <section class="competence-block">
                <div class="competence-header">
                    <div class="competence-tag">C2</div>
                    <div class="competence-meta">
                        <span class="ue-label">UE6.2</span>
                        <h2 class="competence-title">Optimiser</h2>
                        <p class="competence-desc">
                            Analyser et améliorer les performances, la qualité du code et l'efficacité des
                            algorithmes. Cette compétence englobe les tests, la refactorisation, la gestion
                            de la complexité et l'application de patterns reconnus.
                        </p>
                    </div>
                </div>

                <div class="projets-grid">
                    <ProjetCard :projet="getProjets('BouCovoiturage')" />
                    <ProjetCard :projet="getProjets('Silent Office VR')" />
                </div>
            </section>

            <div class="separator"></div>

            <!-- C6 : Collaborer -->
            <section class="competence-block">
                <div class="competence-header">
                    <div class="competence-tag">C6</div>
                    <div class="competence-meta">
                        <span class="ue-label">UE6.6A</span>
                        <h2 class="competence-title">Collaborer</h2>
                        <p class="competence-desc">
                            Travailler en équipe en suivant des méthodologies agiles, en utilisant des outils
                            de versioning et en communiquant efficacement. Cette compétence reflète ma capacité
                            à contribuer dans des projets multi-membres avec des livrables partagés.
                        </p>
                    </div>
                </div>

                <div class="projets-grid">
                    <ProjetCard :projet="getProjets('Silent Office VR')" />
                    <ProjetCard :projet="getProjets('Basket Predictor')" />
                </div>
            </section>

        </div>
    </template>

<script setup>
import ProjetCard from '@/components/ProjetCard.vue'

import logoBF from '@/assets/logo_BF.png'
import logoWB from '@/assets/logo_WB.png'
import logoBC from '@/assets/logo_BC.png'
import logoAPIB from '@/assets/logo_APIB.png'
import logoSilentOffice from '@/assets/logo_SilentOffice.png'
import logoSurvivalGame from '@/assets/logo_SurvivalGame.png'

const projets = [
    {
        nom: 'BouCovoiturage',
        description:
            "Ce projet etait lors de mon stage.",
        lien: 'GitHub',
        url: 'https://github.com/JMD-Ingenierie-SAS/BouCovoiturage',
        nombreMembres: 2,
        duree: '2 mois',
        annee: 2,
        langages: ['Php', 'SQL'],
        image: logoBC,
        scolaire: true,
    },
    {
        nom: 'Blue Frontline',
        description:
            "Ce projet est un jeu Pygame intégrant de l'IA décisionnelle.",
        lien: 'GitHub',
        url: 'https://github.com/keylian15/Blue_Frontline',
        nombreMembres: 6,
        duree: '3 mois',
        annee: 3,
        langages: ['Python'],
        image: logoBF,
        scolaire: true,
    },
    {
        nom: 'Basket Predictor',
        description:
            "Le but de cette application web est de prédire le score d'un match de basket. (Le Front du projet)",
        lien: 'GitHub',
        url: 'https://github.com/keylian15/WEB_Basket',
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
        lien: 'GitHub',
        url: 'https://github.com/keylian15/API_Basket',
        nombreMembres: 1,
        duree: '1 mois',
        annee: 2,
        langages: ['Node.JS'],
        image: logoAPIB,
        scolaire: true,
    },
    {
        nom: 'Silent Office VR',
        description:
            "Création d'un puzzle game en réalité virtuelle.",
        lien: "Drive",
        url: "https://drive.google.com/drive/folders/10piFEKgMaJ6_9sfNiIUJem1UuLHMi6_c?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        nombreMembres: 6,
        duree: '1 semaine',
        annee: 3,
        langages: ['UE 5'],
        image: logoSilentOffice,
        scolaire: true,
    },
    {
        nom: 'Survival Game',
        description:
            "Création d'un jeu de survie multijoueur.",
        lien: "Tiktok",
        url: "",
        nombreMembres: 1,
        duree: 'En cours',
        langages: ['UE 5'],
        image: logoSurvivalGame,
        scolaire: false,
    },
]

function getProjets(nom) {
    return projets.find((p) => p.nom === nom)
}
</script>

<style scoped>
.competences-page {
    width: 100%;
    background-color: var(--color-primary);
    min-height: 100vh;
}

/* --- Hero --- */
.hero-competences {
    width: 100%;
    padding: 8rem 10% 5rem;
    background-color: var(--color-primary);
    border-bottom: 1px solid var(--color-accent);
    box-sizing: border-box;
}

.hero-label {
    font-size: 0.85rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--color-accent);
    margin-bottom: 1rem;
    opacity: 0.8;
}

.hero-competences h1 {
    font-size: 4.5rem;
    font-weight: 800;
    color: var(--color-text);
    margin: 0 0 1rem 0;
    line-height: 1.1;
}

.accent {
    color: var(--color-accent);
}

.hero-sub {
    font-size: 1.1rem;
    color: var(--color-text-light);
    max-width: 560px;
    line-height: 1.6;
    margin: 0;
}

/* --- Bloc compétence --- */
.competence-block {
    width: 100%;
    padding: 5rem 10%;
    box-sizing: border-box;
    background-color: var(--color-primary);
}

.competence-header {
    display: flex;
    align-items: flex-start;
    gap: 2.5rem;
    margin-bottom: 3rem;
}

.competence-tag {
    flex-shrink: 0;
    width: 4rem;
    height: 4rem;
    border: 2px solid var(--color-accent);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    font-weight: 800;
    color: var(--color-accent);
    letter-spacing: 0.05em;
    margin-top: 0.25rem;
}

.competence-meta {
    flex: 1;
}

.ue-label {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--color-accent);
    background-color: color-mix(in srgb, var(--color-accent) 10%, transparent);
    padding: 0.2rem 0.7rem;
    border-radius: 4px;
    margin-bottom: 0.6rem;
}

.competence-title {
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--color-text);
    margin: 0 0 0.75rem 0;
}

.competence-desc {
    font-size: 1rem;
    color: var(--color-text-light);
    line-height: 1.7;
    max-width: 680px;
    margin: 0;
}

/* --- Grille de projets --- */
.projets-grid {
    justify-content: center;
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
}

.projets-grid>* {
    flex: 1;
    min-width: 280px;
    max-width: 500px;
}

/* --- Séparateur --- */
.separator {
    width: 90%;
    margin: 0 auto;
    height: 1px;
    background: linear-gradient(to right,
            transparent,
            var(--color-accent),
            transparent);
    opacity: 0.4;
}

/* ========================== */
/* RESPONSIVE                 */
/* ========================== */

@media screen and (max-width: 1024px) {
    .hero-competences {
        padding: 6rem 8% 4rem;
    }

    .hero-competences h1 {
        font-size: 3.8rem;
    }

    .competence-block {
        padding: 4rem 8%;
    }
}

@media screen and (max-width: 768px) {
    .hero-competences {
        padding: 5rem 6% 3rem;
    }

    .hero-competences h1 {
        font-size: 3rem;
    }

    .hero-sub {
        font-size: 1rem;
    }

    .competence-block {
        padding: 3rem 6%;
    }

    .competence-header {
        flex-direction: column;
        gap: 1.2rem;
    }

    .competence-tag {
        width: 3.2rem;
        height: 3.2rem;
        font-size: 1rem;
    }

    .competence-title {
        font-size: 1.8rem;
    }

    .projets-grid {
        flex-direction: column;
        gap: 1.5rem;
    }

    .projets-grid>* {
        max-width: 100%;
    }
}

@media screen and (max-width: 480px) {
    .hero-competences {
        padding: 4rem 4% 2.5rem;
    }

    .hero-competences h1 {
        font-size: 2.4rem;
    }

    .hero-label {
        font-size: 0.75rem;
    }

    .competence-block {
        padding: 2.5rem 4%;
    }

    .competence-title {
        font-size: 1.6rem;
    }

    .competence-desc {
        font-size: 0.9rem;
    }
}
</style>