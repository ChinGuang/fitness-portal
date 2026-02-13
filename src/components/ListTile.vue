<script setup lang="ts">
interface Props {
  readonly label: string
  readonly variant?: Variant
}
type Variant = 'default' | 'disabled'

withDefaults(defineProps<Props>(), {
  variant: 'default',
})
</script>
<template>
  <div class="list-tile" :data-variant="variant">
    <span>{{ label }}</span>
    <slot></slot>
  </div>
</template>
<style scoped>
.list-tile {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  border-bottom: 1px solid var(--black100);
}

.list-tile[data-variant='disabled'] {
  background-color: var(--black100);
  opacity: 0.5;
}

.list-tile[data-variant='default'] {
  background-color: white;
}
</style>
