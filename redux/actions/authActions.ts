import { API } from '@/app/helpers/consts';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface User {
  email: string;
  password: string;
  password_confirm: string;
}

interface LogUser {
  email: string;
  password: string;
}

export const registerUser = createAsyncThunk<User>(
  'account/registerUser',
  async (formData) => {
    try {
      const res = await axios.post(`${API}/account/register/`, formData);
      return res.data;
    } catch (error) {
      console.error('Ошибка при регистрации:', error);
      throw error;
    }
  },
);

export const LoginUser = createAsyncThunk<LogUser[], FormData>(
  'account/login',
  async (formData) => {
    try {
      const res = await axios.post(`${API}/account/login/`, formData);
      const access = res.data.access;
      localStorage.setItem('accessToken', access);
    } catch (error) {
      console.error('Ошибка при входе в аккаунт:', error);
      throw error;
    }
  },
);
