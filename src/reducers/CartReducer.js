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
    filter(state, action) {
      localStorage.setItem('product',action.payload);
      return action.payload;
    },
  },
});

export const { add, filter, clear } = cartSlice.actions;
export default cartSlice.reducer;
