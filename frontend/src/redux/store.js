import { configureStore } from '@reduxjs/toolkit';
import customerSlice from '../redux/slices/customerSlice';
import cartSlice from '../redux/slices/cartSlice';
import userSlice from '../redux/slices/userSlice';

const store = configureStore({
  reducer: {
    customer: customerSlice,
    cart: cartSlice,
    user: userSlice
  },

  devTools: import.meta.env.NODE_ENV !== 'production'
})

export default store;