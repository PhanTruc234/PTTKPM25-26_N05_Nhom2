import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: (() => {
    const userStr = localStorage.getItem("user");
    return userStr ? JSON.parse(userStr) : null;
  })(),
  accessToken: localStorage.getItem("accessToken") || null,
};
const authenSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    doLogin: (state, action) => {
      const { user, access_token } = action.payload;
      state.user = user;
      state.accessToken = access_token;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("accessToken", access_token);
    },
    doLogout: (state) => {
      state.user = null;
      state.accessToken = null;
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
    },
  },
});
export const { doLogin, doLogout } = authenSlice.actions;
export default authenSlice.reducer;
