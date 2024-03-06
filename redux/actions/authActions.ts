import { API } from '@/app/ui/dashboard/helpers/consts';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface User {
  email: string;
  password: string;
  password_confirm: string;
}

export interface LogUser {
  email: string;
  password: string;
}

export const registerUser = createAsyncThunk(
  'account/registerUser',
  async (formData: User) => {
    try {
      const res = await axios.post(`${API}/account/register/`, formData);
      return res.data;
    } catch (error) {
      console.error('Ошибка при регистрации:', error);
      throw error;
    }
  },
);

export const LoginUser = createAsyncThunk(
  'account/login',
  async (formData: LogUser) => {
    try {
      const res = await axios.post(`${API}/account/login/`, formData);
      const access = res.data.access;
      localStorage.setItem('accessToken', JSON.stringify(access));
    } catch (error) {
      console.error('Ошибка при входе в аккаунт:', error);
      throw error;
    }
  },
);
