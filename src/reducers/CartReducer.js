import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
      localStorage.setItem('product', JSON.stringify(state));
    },
    clear(state, action) {
      localStorage.removeItem('product');
      return [];
    },
    remove(state, action) {
      const updatedCart = state.filter(item => item._id !== action.payload);
      localStorage.setItem('product', updatedCart);
      return updatedCart;
    },
  },
});

export const { add, remove, clear } = cartSlice.actions;
export default cartSlice.reducer;
