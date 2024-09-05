import { createSlice  } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authUSer: null,
  },
  reducers: {
    setAuthUser(state, action) {
      state.authUSer = action.payload;
    },
    clearAuthUser(state) {
      state.authUSer = null;
    },
  },
});

export const {setAuthUser, clearAuthUser} = authSlice.actions;
export default authSlice.reducer;

