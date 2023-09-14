import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = generalSlice.actions;
export const generalReducer = generalSlice.reducer;
