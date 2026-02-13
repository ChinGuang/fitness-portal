<script setup lang="ts">
import TopBar from '@/components/TopBar.vue'
import { useMemberStore } from '@/stores/member'
import { Gender, GenderUtils, type Member } from 'fitness-model-package'
import { computed, onBeforeMount, ref, toRaw } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ListTile from '@/components/ListTile.vue'
import TextField from '@/components/form/TextField.vue'
import SelectionBox from '@/components/form/SelectionBox.vue'
import Button from '@/components/form/ButtonComponent.vue'

const route = useRoute()
const router = useRouter()
const MemberStore = useMemberStore()
const member = ref<Member | null>(null)
const isDiff = computed(() => {
  if (!member.value) return false
  return JSON.stringify(member.value) !== JSON.stringify(MemberStore.displayMember)
})
const isLoading = ref(true)
const memberId = ref<number>(Number(route.params.memberId))

onBeforeMount(async () => {
  isLoading.value = true
  await MemberStore.fetchMember(memberId.value)
    .then(() => {
      member.value = MemberStore.displayMember
        ? structuredClone<Member>(toRaw(MemberStore.displayMember))
        : null
    })
    .finally(() => {
      isLoading.value = false
    })
})
const fields = ['ID', 'First Name', 'Last Name', 'Mobile Number', 'Gender']
const genderMap: Map<Gender, string> = new Map(
  GenderUtils.options.map((gender): [Gender, string] => [gender, GenderUtils.toString(gender)]),
)

async function saveChanges() {
  if (!member.value) return
  const isSuccess = await MemberStore.updateMember(memberId.value, member.value)
  if (isSuccess) {
    router.back()
  } else {
    alert('Failed to update member')
  }
}

async function cancel() {
  router.back()
}
</script>

<template>
  <div class="container">
    <TopBar title="Update Member" />
    <div class="content">
      <div class="member-details" v-if="member !== null">
        <ListTile label="ID" variant="disabled">
          <span>{{ member.id }}</span>
        </ListTile>
        <ListTile label="First Name">
          <TextField
            type="text"
            v-model="member.profile.firstName"
            placeholder="First Name"
            textAlignment="right"
          />
        </ListTile>
        <ListTile label="Last Name">
          <TextField
            type="text"
            v-model="member.profile.lastName"
            placeholder="Last Name"
            textAlignment="right"
          />
        </ListTile>
        <ListTile label="Mobile Number">
          <TextField
            type="text"
            v-model="member.phone"
            placeholder="Mobile Number"
            textAlignment="right"
          />
        </ListTile>
        <ListTile label="Gender">
          <SelectionBox :options="genderMap" v-model="member.profile.gender" />
        </ListTile>
      </div>
      <div v-else-if="isLoading">
        <ListTile
          v-for="field in fields"
          :key="field"
          :label="field"
          :variant="field === 'ID' ? 'disabled' : undefined"
        >
          <span v-if="field === 'ID'">{{ route.params.memberId }}</span>
          <span v-else>Loading...</span>
        </ListTile>
      </div>
      <div v-else>
        <ListTile
          v-for="field in fields"
          :key="field"
          :label="field"
          :variant="field === 'ID' ? 'disabled' : undefined"
        >
          <span v-if="field === 'ID'">{{ route.params.memberId }}</span>
          <span v-else>Something wrong...</span>
        </ListTile>
      </div>
      <Button
        @click="saveChanges"
        label="Save Changes"
        :variant="isDiff ? 'default' : 'disabled'"
      />
      <Button @click="cancel" label="Cancel" variant="warning" />
    </div>
  </div>
</template>

<style scoped>
.member-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
}

.content {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0;
}
</style>
