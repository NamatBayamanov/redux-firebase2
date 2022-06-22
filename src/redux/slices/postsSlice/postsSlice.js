import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const loadPosts = createAsyncThunk(`posts/load`, async (arg, thunkAPI) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
  return response.data;
});

const postsSlice = createSlice( {
  name: "posts",
  initialState: {
    posts: [],
  },
  reducer: {},
  extraReducers: {
    [loadPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      console.log(action.payload)
    }
  },
} );


export default postsSlice.reducer;