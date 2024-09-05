import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: '',
  password: '',
  status: '',
}

const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    resetSignUp(state) {
      state.email = '';
      state.password = '';
      state.status = '';
    },
  },
})

export const { setEmail, setPassword, setStatus, resetSignUp } = signUpSlice.actions
export default signUpSlice.reducer;