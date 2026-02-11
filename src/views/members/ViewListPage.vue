<script setup lang="ts">
import Button from '@/components/form/ButtonComponent.vue'
import { useAuthStore } from '@/stores/auth'
import Router from '@/router'
import { useMemberStore } from '@/stores/member'
import { onBeforeMount } from 'vue'
import { GenderUtils } from 'fitness-model-package'

const authStore = useAuthStore()
const memberStore = useMemberStore()

onBeforeMount(async () => {
  await memberStore.fetchMembers()
})

async function handleLogout() {
  const logoutResult = await authStore.logout()
  if (logoutResult.success) {
    Router.push('/')
  } else {
    alert('Logout failed')
  }
}
function handleExport() {
  // Implement export functionality here
}
async function handleDelete(id: number) {
  await memberStore.deleteMember(id)
}
function handleEdit() {
  // Implement edit functionality here
}
</script>
<template>
  <div class="container">
    <header>
      <Button @click="handleLogout" label="Log Out" />
    </header>
    <div class="content">
      <div class="title-group">
        <span class="title">View All Members</span>
        <span class="subtitle">Manage and view all registered members</span>
      </div>
      <div class="showing-group">
        <span class="showing-text">Showing 3 of 3 members</span>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="member in memberStore.displayMemberList" :key="member.id">
              <td>{{ member.id }}</td>
              <td>{{ member.profile.lastName }} {{ member.profile.firstName }}</td>
              <td>{{ member.phone }}</td>
              <td>{{ GenderUtils.toString(member.profile.gender) }}</td>
              <td class="action-buttons">
                <Button @click="handleEdit" label="Edit" />
                <Button @click="() => handleDelete(member.id)" label="Delete" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<style scoped>
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  margin: 1rem 0;
  gap: 1rem;
}

.title-group {
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 24px;
  font-weight: bold;
  line-height: calc(2 / 1.5);
  font-family:
    Segoe UI,
    Tahoma,
    Geneva,
    Verdana,
    sans-serif;
  color: var(--gray900);
}

.subtitle {
  color: var(--gray600);
  font-weight: normal;
  font-size: 14px;
  font-family:
    Segoe UI,
    Tahoma,
    Geneva,
    Verdana,
    sans-serif;
}

.showing-text {
  color: var(--gray600);
  font-weight: normal;
  font-size: 14px;
  font-family:
    Segoe UI,
    Tahoma,
    Geneva,
    Verdana,
    sans-serif;
}

header {
  padding: 1rem;
  border-bottom: 0.5px solid var(--black100);
}

.showing-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.showing-text {
  color: var(--gray600);
  font-weight: normal;
  font-size: 14px;
  font-family:
    Segoe UI,
    Tahoma,
    Geneva,
    Verdana,
    sans-serif;
}

.action-buttons {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

table {
  width: 100%;
  border: 1px solid var(--black100);
  border-radius: var(--radius-medium);
  border-collapse: collapse;
}

tr {
  border: 1px solid var(--black100);
}

td {
  text-align: center;
  padding: 0.5rem;
}
</style>
