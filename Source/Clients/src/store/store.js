import { configureStore } from "@reduxjs/toolkit";
import authenSlice from "./features/auth/authenSlice"
import cartSlice from "./features/cart/cartSlice"
import orderSlice from "./features/order/orderSlice"
export const store = configureStore({
  reducer: {
    authenSlice: authenSlice,
    cartSlice : cartSlice,
    orderSlice : orderSlice
  },
});