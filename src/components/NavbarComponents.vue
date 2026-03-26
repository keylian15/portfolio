<template>
    <nav class="navbar" :class="{ 'light-mode': isLightMode }">
        <div class="nav-container">
            <div class="nav-logo">
                <span class="logo-text">
                    <router-link to="/" class="nav-link">
                        Keylian
                    </router-link>
                </span>
            </div>

            <!-- Navigation links (desktop) -->
            <ul class="nav-links-left">
                <li>
                    <router-link to="/" class="nav-link" exact-active-class="active" @click="closeMenu">
                        Accueil
                    </router-link>
                </li>
                <li>
                    <router-link to="/about" class="nav-link" exact-active-class="active" @click="closeMenu">
                        À propos
                    </router-link>
                </li>
                <li>
                    <router-link to="/projets" class="nav-link" active-class="active" @click="closeMenu">
                        Projets
                    </router-link>
                </li>
                <li>
                    <a :href="CV" download class="nav-link" @click="closeMenu">
                        CV
                    </a>
                </li>
                <li>
                    <router-link to="/contact" class="nav-link" active-class="active" @click="closeMenu">
                        Me contacter
                    </router-link>
                </li>
            </ul>

            <!-- Right side icons (desktop) -->
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

                <li>
                    <button @click="toggleTheme" class="theme-toggle"
                        :title="isLightMode ? 'Mode sombre' : 'Mode clair'">
                        <span class="icon">{{ isLightMode ? '🌙' : '☀️' }}</span>
                    </button>
                </li>
            </ul>

            <!-- Menu burger button -->
            <button class="burger-menu" @click="toggleMenu" :class="{ active: isMenuOpen }">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <!-- Mobile menu -->
            <div class="mobile-menu" :class="{ open: isMenuOpen }">
                <ul class="mobile-nav-links">
                    <li>
                        <router-link to="/" class="nav-link" exact-active-class="active" @click="closeMenu">
                            Accueil
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/about" class="nav-link" exact-active-class="active" @click="closeMenu">
                            À propos
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/projets" class="nav-link" active-class="active" @click="closeMenu">
                            Projets
                        </router-link>
                    </li>
                    <li>
                        <a :href="CV" download class="nav-link" @click="closeMenu">
                            CV
                        </a>
                    </li>
                    <li>
                        <router-link to="/contact" class="nav-link" active-class="active" @click="closeMenu">
                            Me contacter
                        </router-link>
                    </li>
                </ul>

                <ul class="mobile-nav-icons">
                    <li>
                        <a href="https://github.com/keylian15" class="nav-link" target="_blank"
                            rel="noopener noreferrer">
                            <AkGithubFill />
                        </a>
                    </li>

                    <li>
                        <a href="https://www.linkedin.com/in/keylian-turbe-180634347/" class="nav-link" target="_blank"
                            rel="noopener noreferrer">
                            <AkLinkedinBoxFill />
                        </a>
                    </li>

                    <li>
                        <button @click="toggleTheme" class="theme-toggle"
                            :title="isLightMode ? 'Mode sombre' : 'Mode clair'">
                            <span class="icon">{{ isLightMode ? '🌙' : '☀️' }}</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { AkGithubFill, AkLinkedinBoxFill } from '@kalimahapps/vue-icons'
import CV from '@/assets/Turbe_Keylian_CV.pdf'

const isLightMode = ref(false)
const isMenuOpen = ref(false)

onMounted(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light') {
        isLightMode.value = true
        applyTheme()
    }
})

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
    // Empêcher le scroll quand le menu est ouvert
    if (isMenuOpen.value) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ''
    }
}

function closeMenu() {
    isMenuOpen.value = false
    document.body.style.overflow = ''
}

function toggleTheme() {
    isLightMode.value = !isLightMode.value
    applyTheme()
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

/* Menu burger button */
.burger-menu {
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 25px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1001;
}

.burger-menu span {
    width: 100%;
    height: 3px;
    background-color: var(--color-accent);
    border-radius: 10px;
    transition: all 0.3s ease;
}

.burger-menu.active span:nth-child(1) {
    transform: rotate(45deg) translate(8px, 8px);
}

.burger-menu.active span:nth-child(2) {
    opacity: 0;
}

.burger-menu.active span:nth-child(3) {
    transform: rotate(-45deg) translate(8px, -8px);
}

/* Desktop navigation */
.nav-links-left {
    display: flex;
    list-style: none;
    gap: 3rem;
    margin: 0;
    padding: 0;
}

.nav-link-right {
    display: flex;
    list-style: none;
    gap: 1.7rem;
    margin: 0;
    padding: 0;
    align-items: center;
}

/* Mobile menu (hidden by default) */
.mobile-menu {
    display: none;
}

.mobile-nav-links,
.mobile-nav-icons {
    list-style: none;
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
    display: flex;
    align-items: center;
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

/* ========================== */
/* RESPONSIVE STYLES          */
/* ========================== */

@media screen and (max-width: 1024px) {
    .nav-links-left {
        gap: 2rem;
    }

    .nav-link {
        font-size: 1rem;
        padding: 0.4rem 0.8rem;
    }
}

@media screen and (max-width: 768px) {

    /* Hide desktop navigation */
    .nav-links-left,
    .nav-link-right {
        display: none;
    }

    /* Show burger menu */
    .burger-menu {
        display: flex;
    }

    /* Mobile menu styles */
    .mobile-menu {
        display: block;
        position: fixed;
        top: 0;
        right: -100%;
        width: 70%;
        max-width: 400px;
        height: 100vh;
        background-color: var(--color-secondary);
        padding: 5rem 2rem 2rem;
        transition: right 0.3s ease;
        box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
        overflow-y: auto;
        z-index: 999;
    }

    .mobile-menu.open {
        right: 0;
    }

    .mobile-nav-links {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-bottom: 3rem;
    }

    .mobile-nav-links li {
        width: 100%;
    }

    .mobile-nav-links .nav-link {
        width: 100%;
        padding: 1rem;
        font-size: 1.2rem;
        text-align: center;
        display: block;
    }

    .mobile-nav-icons {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        justify-content: center;
        padding-top: 2rem;
        border-top: 2px solid var(--color-border);
    }

    .theme-toggle {
        width: 45px;
        height: 45px;
    }

    .nav-container {
        padding: 1rem 4%;
    }

    .nav-logo .logo-text {
        font-size: 1.5rem;
    }
}

@media screen and (max-width: 480px) {
    .mobile-menu {
        width: 85%;
    }

    .nav-logo .logo-text {
        font-size: 1.3rem;
    }

    .mobile-nav-links .nav-link {
        font-size: 1.1rem;
        padding: 0.9rem;
    }

    .theme-toggle {
        width: 40px;
        height: 40px;
        font-size: 1.3rem;
    }

    .burger-menu {
        width: 28px;
        height: 22px;
    }

    .mobile-nav-icons {
        gap: 1.5rem;
    }
}
</style>