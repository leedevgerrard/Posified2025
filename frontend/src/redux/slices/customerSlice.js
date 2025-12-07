import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderId: '',
  customerName: '',
  tableId: '',
  tableNum: ''
}

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    setCustomer: (state, action) => {
      const { name } = action.payload;
      state.orderId = `${Date.now()}`;
      state.customerName = name;
    },

    removeCustomer: (state) => {
      state.customerName = '',
      state.tableNum = ''
    },

    updateTable: (state, action) => {
      state.tableId = action.payload.tableId;
      state.tableNum = action.payload.tableNum;
    }
  }
})

export const { setCustomer, removeCustomer, updateTable } = customerSlice.actions;
export default customerSlice.reducer;