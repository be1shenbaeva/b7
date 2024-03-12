import { createAsyncThunk } from '@reduxjs/toolkit';
import { product } from '../slices/productSlice';
import axios, { AxiosRequestConfig } from 'axios';
import { API } from '@/app/ui/dashboard/helpers/consts';

type ProductResult = product[];

export const getProducts = createAsyncThunk<ProductResult>(
  'product/getProduct',
  async () => {
    try {
      const { data } = await axios<{ results: ProductResult }>(
        `${API}/products/list/`,
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
    console.log(id);
    try {
      const res = await axios<product>(`${API}/products/detail/${id}`);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log('Ошибка при стягивании продуктов', error);
      throw error;
    }
  },
);

const getAuthConfig = () => {
  const tokens = JSON.parse(localStorage.getItem('accessToken') || '{}');
  if (!tokens) return false;
  const Authorization = `Bearer ${tokens}`;
  const config = {
    headers: {
      Authorization,
    },
  };
  return config;
};

console.log(getAuthConfig());
const config = getAuthConfig();

export const createOrder = createAsyncThunk(
  'product/createOrder',
  async (formData: any) => {
    console.log(formData);
    try {
      const res = await axios.post(`${API}/orders/create/`, formData, config as any);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  },
);
