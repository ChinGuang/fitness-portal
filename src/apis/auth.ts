import { API } from '.';
import { type LoginDto } from 'fitness-model-package';

async function login(payload: LoginDto): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    const response = await API.post('/auth/login', payload);
    if (response.status === 200) {
      return { success: true };
    }
    return { success: false, error: 'Invalid credentials' };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Network error' };
  }
}

async function authenticate(): Promise<boolean> {
  const response = await API.post('/auth/authenticate');
  if (response.status === 200) {
    return true;
  }
  return false;
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
