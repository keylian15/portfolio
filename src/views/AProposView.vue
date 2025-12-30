<template>
    <div class="about-view">
        <!-- Compétences Techniques -->
        <section class="section skills">
            <h2>Compétences Techniques</h2>

            <div class="skills-category">
                <!-- Back-end (colonne 1) -->
                <div class="skills-subcategory">
                    <h4>Back-end</h4>
                    <p>Je maîtrise la création et la gestion de serveurs, d'API et de bases de données, avec un focus
                        sur PHP, Node.js et PostgreSQL.</p>
                    <ul class="tech-list">
                        <li class="icon" title="PHP">
                            <DePhpOriginal />
                        </li>
                        <li class="icon" title="JavaScript">
                            <DeJavascriptOriginal />
                        </li>
                        <li class="icon" title="PostgreSQL">
                            <AnOutlinedConsoleSql />
                        </li>
                        <li class="icon" title="Node.js">
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
                    <p>Développement d'applications et scripts variés avec Java, Python, F#, C et C++ pour des besoins
                        spécifiques.</p>
                    <ul class="tech-list">
                        <li class="icon" title="Java">
                            <DeJavaOriginalWordmark />
                        </li>
                        <li class="icon" title="Python">
                            <DePythonOriginalWordmark />
                        </li>
                        <li class="icon" title="F#">
                            <VsFileTypeFsharp2 />
                        </li>
                        <li class="icon" title="C">
                            <DeCOriginal />
                        </li>
                        <li class="icon" title="C++">
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
                        l'automatisation
                        avec
                        CI/CD.</p>
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
                    <p>Utilisation de frameworks et bibliothèques pour accélérer le développement front et back-end.</p>
                    <ul class="tech-list">
                        <li class="icon" title="Symfony">
                            <DeSymfonyOriginal />
                        </li>
                        <li class="icon" title="JavaFX">
                            <DeJavaOriginalWordmark />
                        </li>
                        <li class="icon" title="Vue.js">
                            <DeVuejsOriginalWordmark />
                        </li>
                        <li class="icon" title="Express.js">
                            <DeExpressOriginal />
                        </li>
                    </ul>
                </div>

                <!-- Environnement de développement (ligne 2, pleine largeur) -->
                <div class="skills-subcategory">
                    <h4>Environnement de développement</h4>
                    <p>Outils professionnels pour coder efficacement, tester et déployer des projets dans différents
                        environnements.</p>
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
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
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
    DeSymfonyOriginal,
    DeExpressOriginal,
    DeVscodeOriginal,
    DeIntellijOriginal,
    DeGitlabOriginal,
    AnOutlinedDeploymentUnit
} from '@kalimahapps/vue-icons'
</script>

<style scoped>
.about-view {
    margin: 0 auto;
    padding: 4rem 5%;

    font-family: var(--font-family-main);
    color: var(--color-text);
    line-height: 1.6;
    background-color: var(--color-background-main);
    min-height: 100vh;
}
</style>
