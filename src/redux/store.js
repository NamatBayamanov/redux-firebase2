import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/usersSlice";
import postsReducer from "./slices/postsSlice/postsSlice";
const store = configureStore(
  {
    reducer: {
      user: usersReducer,
      post: postsReducer,
    },
  }
);

export default store;