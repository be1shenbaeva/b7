import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from './slices/authSlice';
import categorySlices from './slices/categorySlices';
import productSlice from './slices/productSlice';
import subCategorySlice from './slices/subCategorySlice';

const store = configureStore({
  reducer: {
    registration: registrationReducer,
    category: categorySlices,
    products: productSlice,
    subCategory: subCategorySlice,
  },
});

export default store;
