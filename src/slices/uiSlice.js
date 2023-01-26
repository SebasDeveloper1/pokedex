import { createSlice } from '@reduxjs/toolkit';

let browserTheme;
window.matchMedia('(prefers-color-scheme: dark)').matches
  ? (browserTheme = 'dark')
  : 'light';

/* Checking if there is a theme in localStorage, if not, it will use the browser theme, if not, it will
use the default theme. */
const localStorageTheme =
  localStorage.getItem('SD_POKEDEX_THEME') || browserTheme || 'light';

const initialState = {
  colorTheme: localStorageTheme,
  loadingPokemonsPageList: true,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      state.colorTheme = action.payload;
      localStorage.setItem('SD_POKEDEX_THEME', action.payload);
    },
    setLoadingPokemonsPageList: (state, action) => {
      state.loadingPokemonsPageList = action.payload;
    },
  },
});

export const { toggleTheme, setLoadingPokemonsPageList } = uiSlice.actions;

export default uiSlice.reducer;
