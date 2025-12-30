<template>
    <footer class="footer">
        <p>© 2025 - {{ currentYear }} <span class="colored">Keylian.</span> Tous droits réservés.</p>
    </footer>
</template>

<script setup>

// Récupère dynamiquement l'année actuelle
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
    text-align: center;
    padding: 2rem 1rem;
    background-color: var(--color-secondary);
    color: var(--color-text-light);
    border-top: 1px solid var(--color-border);
    font-size: 0.9rem;
}
</style>