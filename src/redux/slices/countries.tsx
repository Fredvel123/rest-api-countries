import { createSlice } from "@reduxjs/toolkit";

interface CountriesApp {
  value: [];
}

export const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    value: [],
  } as CountriesApp,
  reducers: {
    setCountriesValue: (state, actions) => {
      state.value = actions.payload;
    },
  },
});

export const { setCountriesValue } = countriesSlice.actions;
export default countriesSlice.reducer;
