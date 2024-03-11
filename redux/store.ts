import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from './slices/authSlice';
import categorySlices from './slices/categorySlices';
import productSlice, { product } from './slices/productSlice';
import subCategorySlice from './slices/subCategorySlice';
import cartSlice from './slices/cartSlice';

interface ProductState {
  products: product[];
}

export interface AppState {
  products: ProductState;
}

const store = configureStore({
  reducer: {
    registration: registrationReducer,
    category: categorySlices,
    products: productSlice,
    subCategory: subCategorySlice,
    cart: cartSlice,
  },
});

export default store;
// export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
