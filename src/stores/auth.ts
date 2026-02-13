import { AuthAPI } from "@/apis/auth";
import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', () => {
  async function login(payload: { username: string; password: string }): Promise<{
    success: boolean;
    error?: string;
  }> {
    const { username, password } = payload;
    try {
      return await AuthAPI.login({
        username,
        password
      });
    } catch (error) {
      console.error(error);
      return { success: false, error: "Unexpected error" };
    }
  }

  async function authenticate(): Promise<boolean> {
    try {
      return await AuthAPI.authenticate();
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  async function logout(): Promise<{
    success: boolean;
    error?: string;
  }> {
    try {
      const result = await AuthAPI.logout();
      return { success: result };
    } catch (error) {
      console.error(error);
      return { success: false, error: "Unexpected error" };
    }
  }

  return {
    login,
    authenticate,
    logout
  };
});
