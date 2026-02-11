<script setup lang="ts">
import TextField from './TextField.vue'
import VisibilityOnIcon from '../../assets/icons/visibility_on.svg'
import VisibilityOffIcon from '../../assets/icons/visibility_off.svg'
import { computed, ref } from 'vue'

interface Props {
  value: string
}

defineProps<Props>()

const showPassword = ref(false)
const fieldType = computed(() => (showPassword.value ? 'text' : 'password'))

const emits = defineEmits<{
  (e: 'update:value', value: string): void
}>()

function togglePassword() {
  showPassword.value = !showPassword.value
}

function updatePassword(value: string) {
  emits('update:value', value)
}
</script>
<template>
  <div class="password-container">
    <TextField
      :value="value"
      :type="fieldType"
      placeholder="Password"
      @update:value="updatePassword"
    />
    <span class="eye-icon" @click="togglePassword">
      <component :is="showPassword ? VisibilityOnIcon : VisibilityOffIcon" />
    </span>
  </div>
</template>

<style scoped>
.password-container {
  width: 100%;
  position: relative;
}

.eye-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: var(--black700);
  width: 1rem;
  height: 1rem;
}
</style>
