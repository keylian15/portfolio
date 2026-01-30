<template>
    <div class="contact-container">
        <div class="contact-card">
            <h2 class="contact-title">Contactez-moi</h2>
            <p class="contact-subtitle">Remplissez le formulaire ci-dessous pour m'envoyer un message</p>

            <form @submit.prevent="handleSubmit" class="contact-form">
                <!-- Nom et Prénom sur la même ligne -->
                <div class="form-row">
                    <div class="form-group">
                        <label for="nom">Nom *</label>
                        <input type="text" id="nom" v-model="formData.nom" :class="{ 'error': errors.nom }"
                            placeholder="Votre nom" />
                        <span v-if="errors.nom" class="error-message">{{ errors.nom }}</span>
                    </div>

                    <div class="form-group">
                        <label for="prenom">Prénom *</label>
                        <input type="text" id="prenom" v-model="formData.prenom" :class="{ 'error': errors.prenom }"
                            placeholder="Votre prénom" />
                        <span v-if="errors.prenom" class="error-message">{{ errors.prenom }}</span>
                    </div>
                </div>

                <!-- Email -->
                <div class="form-group">
                    <label for="email">Email *</label>
                    <input type="email" id="email" v-model="formData.email" :class="{ 'error': errors.email }"
                        placeholder="votre.email@exemple.com" />
                    <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
                </div>

                <!-- Sujet -->
                <div class="form-group">
                    <label for="sujet">Sujet *</label>
                    <input type="text" id="sujet" v-model="formData.sujet" :class="{ 'error': errors.sujet }"
                        placeholder="L'objet de votre message" />
                    <span v-if="errors.sujet" class="error-message">{{ errors.sujet }}</span>
                </div>

                <!-- Message -->
                <div class="form-group">
                    <label for="message">Message *</label>
                    <textarea id="message" v-model="formData.message" :class="{ 'error': errors.message }"
                        placeholder="Votre message..." rows="6"></textarea>
                    <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
                </div>

                <!-- Boutons -->
                <div class="form-actions">
                    <button type="button" @click="resetForm" class="btn-secondary">
                        Réinitialiser
                    </button>
                    <button type="submit" class="btn-primary" :disabled="isSubmitting">
                        {{ isSubmitting ? 'Envoi...' : 'Envoyer' }}
                    </button>
                </div>

                <!-- Message de succès -->
                <div v-if="submitSuccess" class="success-message">
                    ✓ Votre message a été envoyé avec succès !
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
    nom: '',
    prenom: '',
    email: '',
    sujet: '',
    message: ''
})

const errors = ref({})
const isSubmitting = ref(false)
const submitSuccess = ref(false)

function validateForm() {
    errors.value = {}

    if (!formData.value.nom.trim()) {
        errors.value.nom = 'Le nom est requis'
    }

    if (!formData.value.prenom.trim()) {
        errors.value.prenom = 'Le prénom est requis'
    }

    if (!formData.value.email.trim()) {
        errors.value.email = "L'email est requis"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
        errors.value.email = "L'email n'est pas valide"
    }

    if (!formData.value.sujet.trim()) {
        errors.value.sujet = 'Le sujet est requis'
    }

    if (!formData.value.message.trim()) {
        errors.value.message = 'Le message est requis'
    } else if (formData.value.message.trim().length < 10) {
        errors.value.message = 'Le message doit contenir au moins 10 caractères'
    }

    return Object.keys(errors.value).length === 0
}

import emailjs from 'emailjs-com'

async function handleSubmit() {
    submitSuccess.value = false

    if (!validateForm()) {
        return
    }

    isSubmitting.value = true

    try {
        await emailjs.send(
            'portfolio',
            'template_3baaz34',
            {
                nom: formData.value.nom,
                prenom: formData.value.prenom,
                email: formData.value.email,
                sujet: formData.value.sujet,
                message: formData.value.message
            },
            'N-Gf1fj646CGnEbb8'
        )

        submitSuccess.value = true
        resetForm()

        setTimeout(() => submitSuccess.value = false, 5000)
    } catch (error) {
        console.error('Erreur lors de l\'envoi:', error)
        errors.value.message = "Une erreur s'est produite lors de l'envoi. Veuillez réessayer."
    } finally {
        isSubmitting.value = false
    }
}
function resetForm() {
    formData.value = {
        nom: '',
        prenom: '',
        email: '',
        sujet: '',
        message: ''
    }
    errors.value = {}
    submitSuccess.value = false
}
</script>

<style scoped>
.contact-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4rem;
    background: var(--color-background-main);
}

.contact-card {
    background: var(--color-background-card);
    border-radius: 16px;
    padding: 3rem;
    max-width: 700px;
    width: 100%;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    border: 2px solid var(--color-border);
}

.contact-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--color-accent);
    margin-bottom: 0.5rem;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.contact-subtitle {
    color: var(--color-text-light);
    text-align: center;
    margin-bottom: 2rem;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

label {
    font-weight: 600;
    color: var(--color-text);
    font-size: 0.95rem;
}

input,
textarea {
    padding: 0.75rem 1rem;
    border: 2px solid var(--color-border);
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;
    font-family: var(--font-family-main);
    background: var(--color-primary);
    color: var(--color-text);
}

input::placeholder,
textarea::placeholder {
    color: var(--color-text-light);
    opacity: 0.6;
}

input:focus,
textarea:focus {
    outline: none;
    border-color: var(--color-accent);
    box-shadow: 0 0 12px rgba(92, 251, 228, 0.5);
}

input.error,
textarea.error {
    border-color: #f56565;
}

.error-message {
    color: #f56565;
    font-size: 0.875rem;
    margin-top: -0.25rem;
}

textarea {
    resize: vertical;
    min-height: 120px;
}

.form-actions {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}

.btn-primary,
.btn-secondary {
    flex: 1;
    padding: 0.8rem 2.5rem;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: var(--font-family-main);
}

.btn-primary {
    background: var(--color-accent);
    color: var(--color-primary);
    border: 2px solid var(--color-border);
}

.btn-primary:hover:not(:disabled) {
    background-color: var(--color-secondary);
    border-color: var(--color-accent);
    box-shadow: var(--shadow-hover);
    color: var(--color-accent);
    transform: translateY(-5px) scale(1.02);
}

.btn-primary:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
}

.btn-secondary {
    background: var(--color-secondary);
    color: var(--color-text);
    border: 2px solid var(--color-border);
}

.btn-secondary:hover {
    border-color: var(--color-accent);
    color: var(--color-accent);
    transform: translateY(-2px);
}

.success-message {
    background: rgba(92, 251, 228, 0.1);
    color: var(--color-accent);
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    font-weight: 600;
    border: 2px solid var(--color-accent);
    animation: slideIn 0.3s ease;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* ========================== */
/* RESPONSIVE STYLES          */
/* ========================== */

/* Tablettes */
@media screen and (max-width: 768px) {
    .contact-container {
        padding: 2rem;
    }

    .contact-card {
        padding: 2.5rem;
        border-radius: 14px;
    }

    .contact-title {
        font-size: 2rem;
        letter-spacing: 1.5px;
    }

    .contact-subtitle {
        font-size: 0.95rem;
        margin-bottom: 1.8rem;
    }

    .contact-form {
        gap: 1.3rem;
    }

    input,
    textarea {
        font-size: 0.95rem;
        padding: 0.7rem 0.9rem;
    }

    label {
        font-size: 0.9rem;
    }

    .btn-primary,
    .btn-secondary {
        font-size: 0.95rem;
        padding: 0.75rem 2rem;
    }
}

/* Mobiles */
@media screen and (max-width: 640px) {
    .contact-container {
        padding: 1rem;
        align-items: flex-start;
        padding-top: 2.5rem;
    }

    .contact-card {
        padding: 2rem;
        border-radius: 12px;
    }

    .contact-title {
        font-size: 1.8rem;
        letter-spacing: 1px;
    }

    .contact-subtitle {
        font-size: 0.9rem;
        margin-bottom: 1.5rem;
    }

    /* Passage en 1 colonne pour nom/prénom */
    .form-row {
        grid-template-columns: 1fr;
        gap: 1.3rem;
    }

    .contact-form {
        gap: 1.2rem;
    }

    input,
    textarea {
        font-size: 0.9rem;
        padding: 0.65rem 0.85rem;
    }

    label {
        font-size: 0.85rem;
    }

    textarea {
        min-height: 100px;
    }

    /* Boutons en colonne */
    .form-actions {
        flex-direction: column;
        gap: 0.8rem;
        margin-top: 0.5rem;
    }

    .btn-primary,
    .btn-secondary {
        width: 100%;
        font-size: 0.9rem;
        padding: 0.7rem 1.5rem;
    }

    .error-message {
        font-size: 0.8rem;
    }

    .success-message {
        padding: 0.9rem;
        font-size: 0.9rem;
    }
}

/* Petits mobiles */
@media screen and (max-width: 480px) {
    .contact-container {
        padding: 0.8rem;
        padding-top: 1.5rem;
    }

    .contact-card {
        padding: 1.5rem;
        border-radius: 10px;
    }

    .contact-title {
        font-size: 1.5rem;
        margin-bottom: 0.4rem;
    }

    .contact-subtitle {
        font-size: 0.85rem;
        margin-bottom: 1.3rem;
    }

    .form-row {
        gap: 1rem;
    }

    .contact-form {
        gap: 1rem;
    }

    input,
    textarea {
        font-size: 0.85rem;
        padding: 0.6rem 0.8rem;
        border-radius: 6px;
    }

    label {
        font-size: 0.8rem;
    }

    textarea {
        min-height: 90px;
    }

    .btn-primary,
    .btn-secondary {
        font-size: 0.85rem;
        padding: 0.65rem 1.3rem;
        border-radius: 40px;
    }

    .error-message {
        font-size: 0.75rem;
    }

    .success-message {
        padding: 0.8rem;
        font-size: 0.85rem;
        border-radius: 6px;
    }
}

/* Très petits mobiles */
@media screen and (max-width: 360px) {
    .contact-container {
        padding: 0.5rem;
        padding-top: 1rem;
    }

    .contact-card {
        padding: 1.2rem;
    }

    .contact-title {
        font-size: 1.3rem;
    }

    .contact-subtitle {
        font-size: 0.8rem;
        margin-bottom: 1.2rem;
    }

    input,
    textarea {
        font-size: 0.8rem;
        padding: 0.55rem 0.75rem;
    }

    label {
        font-size: 0.75rem;
    }

    .btn-primary,
    .btn-secondary {
        font-size: 0.8rem;
        padding: 0.6rem 1.2rem;
    }

    .error-message {
        font-size: 0.7rem;
    }
}
</style>