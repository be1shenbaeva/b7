'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCategories } from '../actions/categoryActions';

export interface Category {
  id: number;
  name: string;
  image: [];
  parent: number | null;
  title: string;
  price: number;
}

interface InitialState {
  categories: Category[];
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  categories: [],
  loading: false,
  error: null,
};
const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<Category[]>) {
      state.categories = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading(state) {
      state.loading = true;
      state.error = null;
    },
    setError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Ошибка загрузки категорий';
    });
  },
});

export const { setCategories, setLoading, setError } = categorySlice.actions;
export default categorySlice.reducer;
