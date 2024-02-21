// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { product } from './productSlice';
// import { getSubCategories } from '../actions/subcategoryActions';

// // Определение начального состояния
// interface SubCategoriesState {
//   subCategories: product[];
//   loading: boolean;
//   error: string | null;
// }

// const initialState: SubCategoriesState = {
//   subCategories: [],
//   loading: false,
//   error: null,
// };

// const subCategoriesSlice = createSlice({
//   name: 'subCategories',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {},
// });

// export default subCategoriesSlice.reducer;
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getSubAllCategories,
  getSubCategories,
} from '../actions/subcategoryActions';

// Создание слайса для подкатегорий
const subCategorySlice = createSlice({
  name: 'subCategory',
  initialState: {
    subCategories: [],
    SubAllCategories: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSubCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSubCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.subCategories = action.payload;
      })
      .addCase(getSubCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    //   .addCase(getSubAllCategories.fulfilled, (state, action) => {
    //     state.subAllCategories = action.payload;
    //   });
  },
});

export default subCategorySlice.reducer;
