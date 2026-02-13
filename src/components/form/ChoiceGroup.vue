<script setup lang="ts">
interface Props {
  options: Map<string | number, string>
}

defineProps<Props>()
const model = defineModel<unknown>()
</script>

<template>
  <select v-model="model">
    <option
      v-for="option in options"
      :key="option[0]"
      :value="option[0]"
      :selected="option[0] === model"
    >
      <span>{{ option[1] }}</span>
    </option>
  </select>
</template>

<style scoped>
select {
  padding: 0.5rem;
  border-radius: 0;
  border: none;
  text-align: right;
  text-align-last: right;
}

option span {
  text-align: right;
}
</style>
