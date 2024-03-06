import { createSlice } from '@reduxjs/toolkit';
import {
  getSubCategories,
  updateCurrentPage,
  updateSelectedCategory,
} from '../actions/subcategoryActions';

const subCategorySlice = createSlice({
  name: 'subCategory',
  initialState: {
    subCategories: [],
    SubAllCategories: [],
    currentPage: 1,
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
      .addCase(updateCurrentPage, (state, action) => {
        state.currentPage = action.payload;
      })
      .addCase(updateSelectedCategory, (state, action) => {
        state.selectedCategory = action.payload;
      });
  },
});

export default subCategorySlice.reducer;
