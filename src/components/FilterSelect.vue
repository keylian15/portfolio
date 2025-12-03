<script setup>
import '@/style/Select.css'
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

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions class="listbox-options">
            <ListboxOption
              v-for="option in options"
              :key="option.value"
              :value="option"
              as="template"
              v-slot="{ active, selected: isSelected }"
            >
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
