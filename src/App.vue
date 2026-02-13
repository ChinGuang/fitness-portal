<script setup lang="ts">
import { useAuthStore } from './stores/auth'

const AuthStore = useAuthStore()
setInterval(() => {
  AuthStore.authenticate()
}, 1000 * 60)
</script>

<template>
  <main>
    <router-view />
  </main>
</template>

<style scoped></style>
