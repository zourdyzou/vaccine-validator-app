import { Router } from 'next/router';

import { authApi } from '../api-axios/authApi';

export const isAuthenticated = async (): Promise<boolean> => {
  const token = localStorage.getItem('token');
  if (!token) return false;
  try {
    await authApi.checkToken();
    return true;
  } catch (err) {
    return false;
  }
};

export const logout = async (navigate: Router) => {
  localStorage.removeItem('token');
  await navigate.push('/login');
};
