import { createAsyncThunk } from '@reduxjs/toolkit';
import { Category } from '../slices/categorySlices';
import axios from 'axios';
import { API } from '@/app/ui/dashboard/helpers/consts';

export const getCategories = createAsyncThunk<Category[]>(
  'category/getCategories',
  async () => {
    try {
      const res = await axios<Category[]>(`${API}/categories/list/`);
      //console.log(res.data);
      return res.data;
    } catch (error) {
      console.error('Ошибка загрузки категорий:', error);
      throw error;
    }
  },
);
