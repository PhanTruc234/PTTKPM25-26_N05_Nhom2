import { createSlice } from "@reduxjs/toolkit";
const initialState = {};
const orderSlice = createSlice({
  name: "order",
  initialState: {
    items: {},
    itemsNew: [],
  },
  reducers: {
    setOrder(state, action) {
      state.items = { ...action.payload };
    },
    setOrderNew(state, action) {
      state.itemsNew = action.payload;
    },
  },
});
export const { setOrder, setOrderNew } = orderSlice.actions;
export default orderSlice.reducer;
