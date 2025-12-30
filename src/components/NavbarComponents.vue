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
                    <a href="https://llwdgicuwgwhsiymirjw.supabase.co/storage/v1/object/public/cv/Turbe_Keylian_CV.pdf"
                        download class="nav-link">
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

<script>
import '@/style/Navbar.css'

// Les imports pour les boutons 
import { AkGithubFill, AkLinkedinBoxFill } from '@kalimahapps/vue-icons';


export default {
    name: 'NavbarComponents',

    components: {
        AkGithubFill,
        AkLinkedinBoxFill
    },

    data() {
        return {
            isLightMode: false
        }
    },
    mounted() {
        // Récupérer la préférence du localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            this.isLightMode = true;
            this.applyTheme();
        }
    },
    methods: {
        toggleTheme() {
            this.isLightMode = !this.isLightMode;
            this.applyTheme();
            // Sauvegarder la préférence
            localStorage.setItem('theme', this.isLightMode ? 'light' : 'dark');
        },
        applyTheme() {
            const root = document.documentElement;
            if (this.isLightMode) {
                root.style.setProperty('--color-primary', '#f0f4f8');
                root.style.setProperty('--color-secondary', '#ffffff');
                root.style.setProperty('--color-accent', '#00a896');
                root.style.setProperty('--color-text', '#1a202c');
                root.style.setProperty('--color-text-light', '#4a5568');
                root.style.setProperty('--color-background-main', '#f0f4f8');
                root.style.setProperty('--color-background-card', '#ffffff');
                root.style.setProperty('--color-border', '#cbd5e0');
            } else {
                root.style.setProperty('--color-primary', '#071321');
                root.style.setProperty('--color-secondary', '#0d2035');
                root.style.setProperty('--color-accent', '#5cfbe4');
                root.style.setProperty('--color-text', '#ccd6f6');
                root.style.setProperty('--color-text-light', '#98a4c2');
                root.style.setProperty('--color-background-main', '#071321');
                root.style.setProperty('--color-background-card', '#0d2035');
                root.style.setProperty('--color-border', '#1a3554');
            }
        }
    }
}
</script>