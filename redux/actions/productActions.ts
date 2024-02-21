import { createAsyncThunk } from '@reduxjs/toolkit';
import { product } from '../slices/productSlice';
import axios from 'axios';
import { API } from '@/app/helpers/consts';

export const getProducts = createAsyncThunk<product>(
  'product/getProduct',
  async () => {
    try {
      const res = await axios<product>(`${API}/products/`);
      console.log(res.data);
      return res.data.results;
    } catch (error) {
      console.log('Ошибка при стягивании продуктов', error);
      throw error;
    }
  },
);
