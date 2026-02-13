<script setup lang="ts">
import TextField from './TextField.vue'
import VisibilityOnIcon from '../../assets/icons/visibility_on.svg'
import VisibilityOffIcon from '../../assets/icons/visibility_off.svg'
import { computed, ref } from 'vue'

const model = defineModel<string>()

const showPassword = ref(false)
const fieldType = computed(() => (showPassword.value ? 'text' : 'password'))

function togglePassword() {
  showPassword.value = !showPassword.value
}
</script>
<template>
  <div class="password-container">
    <TextField class="password-input" v-model="model" :type="fieldType" placeholder="Password" />
    <span class="eye-icon" @click="togglePassword">
      <component :is="showPassword ? VisibilityOnIcon : VisibilityOffIcon" />
    </span>
  </div>
</template>

<style scoped>
.password-container {
  position: relative;
  display: flex;
  align-self: stretch;
}

.password-input {
  flex: 1;
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
