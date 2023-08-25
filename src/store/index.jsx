import { configureStore } from '@reduxjs/toolkit';
import Productslice from '../Slices/Productslice';
import Cartslice from '../Slices/Cartslice';

const store = configureStore({
  reducer: {
    products: Productslice,
    cartitems:Cartslice,
    // other reducers...
  },
});

export default store;