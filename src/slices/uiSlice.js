import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colorTheme: "light",
  loading: true,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      state.colorTheme = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { toggleTheme, setLoading } = uiSlice.actions;

export default uiSlice.reducer;
