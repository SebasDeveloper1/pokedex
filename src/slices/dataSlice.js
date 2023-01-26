import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getData } from 'api/index';
import { setLoadingPokemonsPageList } from 'slices/uiSlice';

const initialState = {
  pokemonsPageList: {},
};

const fetchPokemonsWithDetails = async (pokemonList) => {
  const getPokemonsDetails = await Promise.all(
    pokemonList.map((pokemon) => getData({ apiUrl: pokemon.url }))
  );

  return getPokemonsDetails;
};

export const fecthPokemonsPageList = createAsyncThunk(
  'data/fecthPokemonsPageList',
  async ({ apiUrl }, { dispatch }) => {
    dispatch(setLoadingPokemonsPageList(true));
    const pokemons = await getData({
      apiUrl: apiUrl,
    });
    const pokemonsRes = await fetchPokemonsWithDetails(pokemons.results);

    dispatch(setPokemonsPageList({ ...pokemons, results: pokemonsRes }));
    dispatch(setLoadingPokemonsPageList(false));
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemonsPageList: (state, action) => {
      state.pokemonsPageList = action.payload;
    },
  },
});

export const { setPokemonsPageList } = dataSlice.actions;

export default dataSlice.reducer;
