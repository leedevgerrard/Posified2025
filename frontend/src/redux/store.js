import { configureStore } from '@reduxjs/toolkit';
import customerSlice from '../redux/slices/customerSlice';
import cartSlice from '../redux/slices/cartSlice';

const store = configureStore({
  reducer: {
    customer: customerSlice,
    cart: cartSlice
  },

  devTools: import.meta.env.NODE_ENV !== 'production'
})

export default store;