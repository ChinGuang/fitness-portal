import { AxiosError } from 'axios';
import { API } from '.';
import { type LoginDto } from 'fitness-model-package';

async function login(payload: LoginDto): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    await API.post('/auth/login', payload);
    return { success: true };
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 401) {
        return { success: false, error: 'Invalid credentials' };
      }
    }
    console.error(error);
    return { success: false, error: 'Network error' };
  }
}

async function authenticate(): Promise<boolean> {
  try {
    const response = await API.post('/auth/authenticate');
    return response.status === 200;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 401) {
        return false;
      }
    }
    console.error(error);
    return false;
  }
}

async function logout(): Promise<boolean> {
  const response = await API.post('/auth/logout');
  if (response.status === 200) {
    return true;
  }
  return false;
}

export const AuthAPI = {
  login,
  authenticate,
  logout,
};
