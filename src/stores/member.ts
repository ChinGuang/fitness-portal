import { MemberApi } from "@/apis/member";
import type { Member, UpdateMemberDto } from "fitness-model-package";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useMemberStore = defineStore('member', () => {
  const displayMemberList = ref<Member[]>([]);
  const currentPage = ref<number>(1);
  const currentSize = ref<number>(20);
  const displayMember = ref<Member | null>(null);
  async function fetchMembers(): Promise<void> {
    const result = await MemberApi.getMembers({
      limit: currentSize.value,
      page: currentPage.value,
    });
    if (result) {
      setMemberList(result);
    }
  }

  async function fetchMember(id: number): Promise<void> {
    const result = await MemberApi.getMember(id);
    if (result) {
      displayMember.value = result;
    }
  }

  async function updateMember(id: number, payload: UpdateMemberDto): Promise<boolean> {
    const updateSuccess = await MemberApi.editMember(id, payload);
    if (updateSuccess) await fetchMembers();
    return updateSuccess;
  }

  async function deleteMember(id: number): Promise<void> {
    await MemberApi.deleteMember(id);
    await fetchMembers();
  }

  function setMemberList(members: Member[]) {
    displayMemberList.value = members;
  }

  return {
    displayMemberList,
    displayMember,
    fetchMember,
    fetchMembers,
    deleteMember,
    updateMember,
  };
});
