import { API } from '@/app/helpers/consts';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getSubCategories = createAsyncThunk(
  'subCategories/getSubCategories',
  async (subCategoryId, { rejectWithValue }) => {
    try {
      const { data } = await axios(
        `${API}/products/?category=${subCategoryId}`,
      );
      console.log(data.results, 'response');
      return data.results;
    } catch (error) {
      return rejectWithValue(
        error.message || 'Что-то пошло не так при загрузке подкатегорий',
      );
    }
  },
);

// export const getSubAllCategories = createAsyncThunk(
//   'subCategories/getSubAllCategories',
//   async () => {
//     try {
//       const { data } = await axios(`${API}/products/?category/`);
//       console.log(data.results, 'all');

//       return data.results;
//     } catch (error) {
//       console.log(error);
//     }
//   },
// );
// getSubAllCategories();
