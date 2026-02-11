<script setup lang="ts">
import type { InputTypeHTMLAttribute } from 'vue'

interface Props {
  type: InputTypeHTMLAttribute
  placeholder: string
  value: string
}

const emit = defineEmits<{
  (e: 'update:value', value: string): void
}>()

function handleInput(event: Event) {
  emit('update:value', (event.target as HTMLInputElement)?.value)
}

defineProps<Props>()
</script>

<template>
  <input
    class="input-field"
    :value="value"
    :type="type"
    :placeholder="placeholder"
    @input="handleInput"
  />
</template>
<style scoped>
input {
  font-family: roboto, sans-serif;
  font-size: 15px;
  line-height: 20px;
}

input::placeholder {
  font-family: roboto, sans-serif;
  font-size: 15px;
  color: var(--black500);
}

.input-field {
  width: 100%;
  box-sizing: border-box;
  background-color: var(--black50);
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  border-radius: var(--radius-medium);
  border: none;
}
</style>
