<template>
    <nav class="navbar" :class="{ 'light-mode': isLightMode }">
        <div class="nav-container">
            <div class="nav-logo">
                <span class="logo-text">
                    <router-link to="/" class="nav-link">
                        Keylian
                    </router-link></span>
            </div>

            <ul class="nav-links-left">
                <li>
                    <router-link to="/" class="nav-link" exact-active-class="active">
                        Accueil
                    </router-link>
                </li>
                <li>
                    <router-link to="/about" class="nav-link" exact-active-class="active">
                        À propos
                    </router-link>
                </li>
                <li>
                    <router-link to="/projets" class="nav-link" active-class="active">
                        Projets
                    </router-link>
                </li>
                <li>
                    <!-- https://llwdgicuwgwhsiymirjw.supabase.co/storage/v1/object/public/cv/Turbe_Keylian_CV_Anglais.pdf -->
                    <a :href="CV" download class="nav-link">
                        CV
                    </a>
                </li>
                <li>
                    <router-link to="/contact" class="nav-link" active-class="active">
                        Me contacter
                    </router-link>
                </li>
            </ul>
            <ul class="nav-link-right">

                <li>
                    <a href="https://github.com/keylian15" class="nav-link" target="_blank" rel="noopener noreferrer">
                        <AkGithubFill />
                    </a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/keylian-turbe-180634347/" class="nav-link" target="_blank"
                        rel="noopener noreferrer">
                        <AkLinkedinBoxFill />
                    </a>
                </li>


                <button @click="toggleTheme" class="theme-toggle" :title="isLightMode ? 'Mode sombre' : 'Mode clair'">
                    <span class="icon">{{ isLightMode ? '🌙' : '☀️' }}</span>
                </button>
            </ul>

        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { AkGithubFill, AkLinkedinBoxFill } from '@kalimahapps/vue-icons'
import CV from '@/assets/Turbe_Keylian_CV.pdf'

const isLightMode = ref(false)

onMounted(() => {
    // Récupérer la préférence du localStorage
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light') {
        isLightMode.value = true
        applyTheme()
    }
})

function toggleTheme() {
    isLightMode.value = !isLightMode.value
    applyTheme()
    // Sauvegarder la préférence
    localStorage.setItem('theme', isLightMode.value ? 'light' : 'dark')
}

function applyTheme() {
    const root = document.documentElement
    if (isLightMode.value) {
        root.style.setProperty('--color-primary', '#f0f4f8')
        root.style.setProperty('--color-secondary', '#ffffff')
        root.style.setProperty('--color-accent', '#00a896')
        root.style.setProperty('--color-text', '#1a202c')
        root.style.setProperty('--color-text-light', '#4a5568')
        root.style.setProperty('--color-background-main', '#f0f4f8')
        root.style.setProperty('--color-background-card', '#ffffff')
        root.style.setProperty('--color-border', '#cbd5e0')
    } else {
        root.style.setProperty('--color-primary', '#071321')
        root.style.setProperty('--color-secondary', '#0d2035')
        root.style.setProperty('--color-accent', '#5cfbe4')
        root.style.setProperty('--color-text', '#ccd6f6')
        root.style.setProperty('--color-text-light', '#98a4c2')
        root.style.setProperty('--color-background-main', '#071321')
        root.style.setProperty('--color-background-card', '#0d2035')
        root.style.setProperty('--color-border', '#1a3554')
    }
}
</script>

<style scoped>
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: var(--color-secondary);
    border-bottom: 2px solid var(--color-border);
    z-index: 1000;
    box-shadow: 0 4px 12px var(--shadow-hover);
    transition: all 0.3s ease;
}

.nav-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 1rem 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-logo .logo-text {
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--color-accent);
    text-transform: uppercase;
    letter-spacing: 2px;
}

.nav-links-left {
    display: flex;
    list-style: none;
    gap: 3rem;
    margin: 0;
    padding: 0;
}

.nav-link {
    color: var(--color-text);
    text-decoration: none;
    font-weight: 500;
    font-size: 1.1rem;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: all 0.3s ease;
    border: 2px solid transparent;
}

.nav-link:hover {
    color: var(--color-accent);
    background-color: var(--color-secondary);
    border-color: var(--color-accent);
    transform: translateY(-2px);
}

.nav-link.active {
    color: var(--color-accent);
    border-color: var(--color-accent);
    background-color: var(--color-secondary);
}

.nav-link-right {
    display: flex;
    list-style: none;
    gap: 1.7rem;
    margin: 0;
    padding: 0;
    align-items: center;
}

.theme-toggle {
    background-color: var(--color-accent);
    color: var(--color-primary);
    border: 2px solid var(--color-border);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1.5rem;
}

.theme-toggle:hover {
    background-color: var(--color-secondary);
    border-color: var(--color-accent);
    transform: rotate(180deg) scale(1.1);
    box-shadow: 0 0 12px var(--color-accent);
}

.theme-toggle .icon {
    display: block;
}
</style>