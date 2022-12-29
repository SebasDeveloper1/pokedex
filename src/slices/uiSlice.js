import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colorTheme: "dark",
  loadingPokemonsPageList: true,
  loadingFullPokemonsList: true,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      state.colorTheme = action.payload;
    },
    setLoadingPokemonsPageList: (state, action) => {
      state.loadingPokemonsPageList = action.payload;
    },
    setLoadingFullPokemonsList: (state, action) => {
      state.loadingFullPokemonsList = action.payload;
    },
  },
});

export const {
  toggleTheme,
  setLoadingPokemonsPageList,
  setLoadingFullPokemonsList,
} = uiSlice.actions;

export default uiSlice.reducer;
