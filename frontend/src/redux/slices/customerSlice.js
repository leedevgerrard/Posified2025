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
    setCustomerInitialState: (state, action) => {
      const { orderId, customerName, table: tableId } = action.payload;
      state.orderId = orderId;
      state.customerName = customerName;
      state.tableId = tableId;
    },

    setCustomer: (state, action) => {
      const { orderId, name } = action.payload;
      state.orderId = orderId;
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

export const { setCustomerInitialState, setCustomer, removeCustomer, updateTable } = customerSlice.actions;
export default customerSlice.reducer;