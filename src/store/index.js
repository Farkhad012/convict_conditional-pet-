import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice'
import signUpReducer from "../features/signUp/signUpSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    signUp: signUpReducer,
  },
});