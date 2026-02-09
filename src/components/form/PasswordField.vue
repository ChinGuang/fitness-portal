<script setup lang="ts">
import TextField from './TextField.vue'
import VisibilityOnIcon from '../../assets/icons/visibility_on.svg'
</script>
<template>
  <div class="password-container">
    <TextField type="password" placeholder="Password" />
    <span id="togglePassword" class="eye-icon">
      <VisibilityOnIcon />
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
}

#togglePassword {
  width: 1rem;
  height: 1rem;
}
</style>
