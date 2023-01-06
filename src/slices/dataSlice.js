import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getData } from 'api/index';
import {
  setLoadingPokemonsPageList,
  setLoadingFullPokemonsList,
} from 'slices/uiSlice';

const initialState = {
  pokemonsPageList: {},
  fullPokemonList: [],
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

export const fecthFullPokemonsList = createAsyncThunk(
  'data/fecthFullPokemonsList',
  async (_, { dispatch }) => {
    dispatch(setLoadingFullPokemonsList(true));
    const pokemons = await getData({
      apiUrl: 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0',
    });
    const pokemonsRes = await fetchPokemonsWithDetails(pokemons.results);

    dispatch(setFullPokemonList(pokemonsRes));
    dispatch(setLoadingFullPokemonsList(false));
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemonsPageList: (state, action) => {
      state.pokemonsPageList = action.payload;
    },
    setFullPokemonList: (state, action) => {
      state.fullPokemonList = action.payload;
    },
  },
});

export const { setPokemonsPageList, setFullPokemonList } = dataSlice.actions;

export default dataSlice.reducer;
