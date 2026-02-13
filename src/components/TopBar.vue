<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import Router from '@/router'
import Button from './form/ButtonComponent.vue'

interface Props {
  title: string
}

defineProps<Props>()

const authStore = useAuthStore()

async function handleLogout() {
  const logoutResult = await authStore.logout()
  if (logoutResult.success) {
    Router.push('/')
  } else {
    alert('Logout failed')
  }
}
</script>

<template>
  <header>
    <h1>{{ title }}</h1>
    <Button @click="handleLogout" label="Log Out" />
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 0.5px solid var(--black100);
}

h1 {
  font-size: 1.5rem;
}
</style>
