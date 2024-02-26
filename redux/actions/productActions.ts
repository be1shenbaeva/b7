import { createAsyncThunk } from '@reduxjs/toolkit';
import { product } from '../slices/productSlice';
import axios from 'axios';
import { API } from '@/app/ui/dashboard/helpers/consts';

type ProductResult = product[];

export const getProducts = createAsyncThunk<ProductResult>(
  'product/getProduct',
  async () => {
    try {
      const { data } = await axios<{ results: ProductResult }>(
        `${API}/products/`,
      );
      return data.results;
    } catch (error) {
      console.log('Ошибка при стягивании продуктов', error);
      throw error;
    }
  },
);


export const getOneProduct = createAsyncThunk<product>(
  'product/getOneProduct',
  async (id: any) => {
    console.log(id)
    try {
      const res = await axios<product>(`${API}/products/${id}`);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log('Ошибка при стягивании продуктов', error);
      throw error;
    }
  },
);