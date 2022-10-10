import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  value: boolean;
}

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: true,
  } as InitialState,
  reducers: {
    setThemeValue: (state, actions) => {
      state.value = actions.payload;
    },
  },
});

export const { setThemeValue } = themeSlice.actions;
export default themeSlice.reducer;
