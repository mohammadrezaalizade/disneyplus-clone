import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {} from "react-redux";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export const getMoviesList = createAsyncThunk(
  "movies/getMoviesList",
  async () => {
    const response = await getDocs(collection(db, "movie"));
    const data = await response.docs;
    const items = await data.map((item) => ({id:item.id,...item.data()})); // return => {tilte:"movie name"}
    /* I want => {id:item.id, title:"movie name"} */

    return items ;
  }
);

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    moviesList: [],
  },
  reducers: {},
  extraReducers: {
    [getMoviesList.fulfilled]: (state, action) => {
      state.moviesList = action.payload;
    },
  },
});

export default moviesSlice.reducer;
