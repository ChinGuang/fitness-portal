<script setup lang="ts">
interface Props {
  label: string
  variant?: Variant
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
})

type Variant = 'default' | 'warning' | 'disabled'

const emit = defineEmits(['click'])
const onClick = () => {
  if (props.variant === 'disabled') return
  emit('click')
}
</script>
<template>
  <button @click="onClick" :data-variant="variant">{{ label }}</button>
</template>
<style scoped>
button {
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-medium);
  border: none;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.01875em;
}

button[data-variant='default'] {
  background-color: var(--system-blue);
}

button[data-variant='disabled'] {
  background-color: var(--black100);
}

button[data-variant='warning'] {
  background-color: var(--system-warning);
}

button:hover[data-variant='default'] {
  background-color: var(--system-blue-hover);
}

button:hover[data-variant='warning'] {
  background-color: var(--system-warning-hover);
}
</style>
