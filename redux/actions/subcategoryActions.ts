import { API } from '@/app/ui/dashboard/helpers/consts';
import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

interface SubProduct {
  id: number;
  images: { id: number; image: string; product: number }[];
  title: string;
  price: number;
  stock: 'in_stock' | 'out_of_stock';
  category: number;
  discounted_price: number | null;
}

export interface ProductsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: SubProduct[];
}

export const getSubCategories = createAsyncThunk(
  'subCategories/getSubCategories',
  async (payload: { subCategoryId: number; currentPage: number }) => {
    const { subCategoryId, currentPage } = payload;
    try {
      const { data } = await axios.get(
        `${API}/products/?category=${subCategoryId}&page=${currentPage}`,
      );
      //console.log(data.results, 'response');
      return data.results as ProductsResponse;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
);

// export const getSubCategories = createAsyncThunk(
//   'subCategories/getSubCategories',
//   async (subCategoryId: number, currentPage) => {
//     console.log(currentPage, 'actioncur');

//     try {
//       const { data } = await axios.get(
//         `${API}/products/?category=${subCategoryId}&page=${currentPage}`,
//       );
//       console.log(data.results, 'response');
//       return data.results as ProductsResponse;
//     } catch (error) {
//       throw error;
//     }
//   },
// );

import { createAction } from '@reduxjs/toolkit';

// Определение экшна для обновления текущей страницы

export const updateSelectedCategory = createAction<number>(
  'subCategory/updateSelectedCategory',
);

// export const getSubCategories = createAsyncThunk(
//   'subCategories/getSubCategories',
//   async (subCategoryId: number, { getState, requestId, rejectWithValue }) => {
//     const currentPage = getState().subCategories.currentPage;
//     try {
//       const { data } = await axios.get(
//         `${API}/products/?category=${subCategoryId}&page=${currentPage}`,
//       );
//       console.log(data.results, 'response');
//       return data.results as ProductsResponse;
//     } catch (error) {
//       console.log(error);
//       return rejectWithValue(error.message);
//     }
//   },
// );
