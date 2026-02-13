<script setup lang="ts">
import Button from '@/components/form/ButtonComponent.vue'
import { useMemberStore } from '@/stores/member'
import { onBeforeMount } from 'vue'
import { GenderUtils } from 'fitness-model-package'
import TopBar from '@/components/TopBar.vue'
import Router, { RouteName } from '@/router'

const memberStore = useMemberStore()

onBeforeMount(async () => {
  await memberStore.fetchMembers()
})

function handleExport() {
  // Implement export functionality here
}
async function handleDelete(id: number) {
  await memberStore.deleteMember(id)
}
function handleEdit(id: number) {
  Router.push({ name: RouteName.UpdateMember, params: { memberId: id } })
}
</script>
<template>
  <div class="container">
    <TopBar title="View Members" />
    <div class="content">
      <div class="title-group">
        <span class="title">View All Members</span>
        <span class="subtitle">Manage and view all registered members</span>
      </div>
      <div class="showing-group">
        <span class="showing-text">Showing {{ memberStore.displayMemberList.length }} members</span>
        <div class="table-container">
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
                  <Button @click="() => handleEdit(member.id)" label="Edit" />
                  <Button @click="() => handleDelete(member.id)" label="Delete" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
  font-size: 1.25rem;
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
  min-width: 100%;
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

.table-container {
  overflow-x: auto;
  width: 100%;
}
</style>
