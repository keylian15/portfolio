<script setup>
import { computed } from 'vue'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
import { ChevronDownIcon, CheckIcon } from '@heroicons/vue/20/solid'

// Props pour recevoir les options et la valeur sélectionnée
const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: Object,
    required: true,
  },
})

// Emit pour synchroniser avec le parent
const emit = defineEmits(['update:modelValue'])

// Computed pour gérer le v-model
const selected = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})
</script>

<template>
  <div class="custom-select-wrapper">
    <Listbox v-model="selected">
      <div class="listbox-container">
        <ListboxButton class="listbox-button">
          <span>{{ selected.label }}</span>
          <ChevronDownIcon class="listbox-icon" aria-hidden="true" />
        </ListboxButton>

        <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100"
          leave-to-class="opacity-0">
          <ListboxOptions class="listbox-options">
            <ListboxOption v-for="option in options" :key="option.value" :value="option" as="template"
              v-slot="{ active, selected: isSelected }">
              <li :class="['listbox-option', active ? 'listbox-option-active' : '']">
                {{ option.label }}
                <span v-if="isSelected" class="check-icon-wrapper">
                  <CheckIcon class="check-icon" aria-hidden="true" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>

<style scoped>
/* ========================================= */
/* SELECT.CSS - Composant Select personnalisé */
/* ========================================= */

/* --- Select HTML standard --- */
select {
  padding: 0.6rem 1rem;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  background-color: var(--color-background-card);
  color: var(--color-text);
  cursor: pointer;
  transition: all 0.3s ease;
}

select:focus {
  outline: none;
  border-color: var(--color-accent);
  box-shadow: 0 0 0 2px var(--color-accent);
  background-color: var(--color-background-card);
}

/* --- Custom Select (Listbox) --- */
.custom-select-wrapper {
  min-width: 150px;
}

.listbox-container {
  position: relative;
}

.listbox-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  background-color: var(--color-background-card);
  color: var(--color-text);
  border: 2px solid var(--color-border);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
}

.listbox-button:hover,
.listbox-button:focus {
  background-color: var(--color-background-card);
  border-color: var(--color-accent);
  box-shadow: var(--shadow-hover);
  outline: none;
}

.listbox-icon {
  height: 20px;
  width: 20px;
  color: var(--color-text-light);
  margin-left: 0.5rem;
}

/* --- Options du Listbox --- */
.listbox-options {
  position: absolute;
  z-index: 10;
  margin-top: 0.5rem;
  width: 100%;
  max-height: 200px;
  overflow: auto;
  border-radius: 8px;
  padding: 0.25rem 0;
  background-color: var(--color-background-card);
  border: 2px solid var(--color-accent);
  box-shadow: 0 4px 12px var(--color-primary);
  list-style: none;
}

.listbox-option {
  padding: 0.5rem 1rem;
  position: relative;
  cursor: pointer;
  user-select: none;
  color: var(--color-text);
  transition: background-color 0.2s;
}

.listbox-option-active {
  background-color: var(--color-accent);
  color: var(--color-primary);
}

/* --- Icône de sélection --- */
.check-icon-wrapper {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
}

.check-icon {
  height: 18px;
  width: 18px;
  color: var(--color-primary);
}

.listbox-option:not(.listbox-option-active) .check-icon {
  color: var(--color-accent);
}
</style>