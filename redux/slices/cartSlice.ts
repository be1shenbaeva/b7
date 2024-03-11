import { createSlice } from '@reduxjs/toolkit';

export interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
  subtotal: number;
}

interface CartState {
  items: CartItem[];
  total: number;
}

const loadCartFromLocalStorage = () => {
  const cartData = localStorage.getItem('cart');
  return cartData ? JSON.parse(cartData) : { items: [], total: 0 };
};

const saveCartToLocalStorage = (cartState: CartState) => {
  localStorage.setItem('cart', JSON.stringify(cartState));
};

const initialState = loadCartFromLocalStorage();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id, title, price, image } = action.payload;
      const existingItem = state.items.find((item: CartItem) => item.id === id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.subtotal = existingItem.quantity * price;
      } else {
        state.items.push({
          id,
          title,
          price,
          image,
          quantity: 1,
          subtotal: price,
        });
      }

      state.total = state.items.reduce(
        (total: number, item: CartItem) => total + item.subtotal,
        0,
      );

      saveCartToLocalStorage(state);
    },
    removeOneCount(state, action) {
      const { id, price } = action.payload;
      const existingItem = state.items.find((item: CartItem) => item.id === id);

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item: CartItem) => item.id !== id);
        } else {
          existingItem.quantity--;
          existingItem.subtotal = existingItem.quantity * price;
        }
        state.total = state.items.reduce(
          (total: number, item: CartItem) => total + item.subtotal,
          0,
        );
      }

      saveCartToLocalStorage(state);
    },
    removeFromCart(state, action) {
      const { id } = action.payload;

      state.items = state.items.filter((item: CartItem) => item.id !== id);

      state.total = state.items.reduce(
        (total: number, item: CartItem) => total + item.subtotal,
        0,
      );
      saveCartToLocalStorage(state);
    },
    clearCart(state) {
      state.items = [];
      state.total = 0;

      saveCartToLocalStorage(state);
    },
  },
});

export const { addToCart, removeFromCart, clearCart, removeOneCount } =
  cartSlice.actions;

export default cartSlice.reducer;
