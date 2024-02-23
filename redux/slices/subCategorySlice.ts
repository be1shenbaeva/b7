import { createSlice } from '@reduxjs/toolkit';
import { getSubCategories } from '../actions/subcategoryActions';

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
      });
  },
});

export default subCategorySlice.reducer;
