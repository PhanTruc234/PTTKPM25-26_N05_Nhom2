import { createSlice } from "@reduxjs/toolkit";
const initialState = {};
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    itemsNew: [],
    amount : 0,
  },
  reducers: {
    setCart(state, action) {
      state.items = action.payload;
    },
    setCartNew(state, action) {
      state.itemsNew = action.payload;
    },
  },
});
export const { setCart, setCartNew} = cartSlice.actions;
export default cartSlice.reducer;
