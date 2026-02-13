import type { Member, ReadMembersDto, UpdateMemberDto } from "fitness-model-package";
import { API } from ".";

async function getMember(id: number): Promise<Member | null> {
  try {
    const response = await API.get<Member>(`/members/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function getMembers(payload: ReadMembersDto): Promise<Member[] | null> {
  try {
    const response = await API.get<Member[]>('/members', {
      params: payload
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function editMember(id: number, payload: UpdateMemberDto): Promise<boolean> {
  try {
    const response = await API.put(`/members/${id}`, payload);
    if (response.status === 200)
      return true;
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function deleteMember(id: number) {
  try {
    await API.delete(`/members/${id}`);
  } catch (error) {
    console.error(error);
  }
}

export const MemberApi = {
  getMember,
  getMembers,
  deleteMember,
  editMember,
};
