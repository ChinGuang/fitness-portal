<script setup lang="ts">
import Button from '@/components/form/ButtonComponent.vue'
import { useAuthStore } from '@/stores/auth'
import Router from '@/router'

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
  <div>View List Page</div>
  <Button @click="handleLogout" label="Log Out" />
</template>
<style scoped></style>
