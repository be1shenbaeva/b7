import { createSlice } from '@reduxjs/toolkit';
import { getOneProduct, getProducts } from '../actions/productActions';

export interface image {
  id: number;
  image: string;
  product: number;
}

export interface product {
  id: number | string;
  images: image[];
  title: string;
  price: number;
  stock: 'in_stock' | 'out_of_stock' | 'limited_stock';
  category: number;
  categoryId: number;
}

export interface productState {
  products: product[];
  oneProduct: product;
  loading: boolean;
  error: string | null;
}

const initialState: productState = {
  products: [],
  oneProduct: {},
  loading: false,
  error: null,
};

const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Ошибка загрузки продуктов';
      })
      .addCase(getOneProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOneProduct.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload)
        state.oneProduct = action.payload;
      })
      .addCase(getOneProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Ошибка загрузки продуктов';
      });
  },
});

export default ProductSlice.reducer;
