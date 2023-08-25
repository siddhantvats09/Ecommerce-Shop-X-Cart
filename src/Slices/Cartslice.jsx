import { createSlice } from '@reduxjs/toolkit';

const cart = createSlice({
  name: 'cartitems',
  initialState: [],
  reducers: {
    setCartItem: (state, action) => {
      return [...state, action.payload];
    },
    deletecartitems: (state, action) => {
      state.splice(state.findIndex((arrow) => arrow.id === action.payload), 1)
    },
  },
});

export const { setCartItem,deletecartitems } = cart.actions;

export default cart.reducer;