import { API } from '@/app/ui/dashboard/helpers/consts';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface SubProduct {
  id: number;
  images: { id: number; image: string; product: number }[];
  title: string;
  price: number;
  stock: 'in_stock' | 'out_of_stock'; // Предполагаем, что это ограниченное множество значений
  category: number;
  discounted_price: number | null; // Может быть числом или null
}

export interface ProductsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: SubProduct[];
}

export const getSubCategories = createAsyncThunk(
  'subCategories/getSubCategories',
  async (subCategoryId: number) => {
    try {
      const { data } = await axios(
        `${API}/products/?category=${subCategoryId}`,
      );
      console.log(data.results, 'response');
      return data.results as ProductsResponse;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
);
