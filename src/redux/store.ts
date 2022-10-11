import { configureStore } from "@reduxjs/toolkit";
import theme from "./slices/theme";
import countries from "./slices/countries";

export const store = configureStore({
  reducer: { theme, countries },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
