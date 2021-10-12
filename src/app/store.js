import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import moviesReducer from "../features/moviesSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    moviesList: moviesReducer,
  },
});
