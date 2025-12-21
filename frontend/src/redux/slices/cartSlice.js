import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartInitialState: (state, action) => {
      return action.payload;
    },

    addItems: (state, action) => {
      state.push(action.payload);
    },

    removeItem: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },

    updateQty: (state, action) => {
      const { name, newQty } = action.payload;
      const item = state.find(item => item.name === name);
      if (item) {
        item.qty = newQty;
        item.price = item.pricePerQty * newQty
      }
      return state;
    }
  }
})

export const getTotalPrice = state => state.cart.reduce((total, item) => total + item.price, 0);

export const { setCartInitialState, addItems, removeItem, updateQty } = cartSlice.actions;
export default cartSlice.reducer;