import { createSlice } from '@reduxjs/toolkit';

// Извлекаем данные из локального хранилища, если они там есть
const loadCartFromLocalStorage = () => {
  const cartData = localStorage.getItem('cart');
  return cartData ? JSON.parse(cartData) : { items: [], total: 0 };
};

// Сохраняем данные корзины в локальном хранилище
const saveCartToLocalStorage = (cartState) => {
  localStorage.setItem('cart', JSON.stringify(cartState));
};

const initialState = loadCartFromLocalStorage();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id, title, price, image } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.subtotal = existingItem.quantity * price; // Пересчитываем сумму одного продукта
      } else {
        state.items.push({ id, title, price, image, quantity: 1, subtotal: price }); // Добавляем новое поле subtotal
      }

      state.total = state.items.reduce(
        (total, item) => total + item.subtotal,
        0,
      ); // Пересчитываем общую сумму корзины

      // Сохраняем состояние корзины в локальном хранилище
      saveCartToLocalStorage(state);
    },
    removeOneCount(state, action) {
      const { id, price } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          existingItem.quantity--;
          existingItem.subtotal = existingItem.quantity * price; // Пересчитываем сумму одного продукта
        }
        state.total = state.items.reduce(
          (total, item) => total + item.subtotal,
          0,
        ); // Пересчитываем общую сумму корзины
      }

      // Сохраняем состояние корзины в локальном хранилище
      saveCartToLocalStorage(state);
    },
    removeFromCart(state, action) {
      const { id } = action.payload;
  
      state.items = state.items.filter((item) => item.id !== id);
  
      state.total = state.items.reduce((total, item) => total + item.subtotal, 0);
      saveCartToLocalStorage(state);
    },
    clearCart(state) {
      state.items = [];
      state.total = 0;

      // Сохраняем состояние корзины в локальном хранилище
      saveCartToLocalStorage(state);
    },
  },
});

export const { addToCart, removeFromCart, clearCart, removeOneCount } = cartSlice.actions;

export default cartSlice.reducer;
