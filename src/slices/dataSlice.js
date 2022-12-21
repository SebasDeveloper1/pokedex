import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "api/index";
import { setLoading } from "slices/uiSlice";

const initialState = {
  pokemons: [],
};

export const fetchPokemonsWithDetails = createAsyncThunk(
  "data/fetchPokemonsWithDetails",
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    const pokemons = await getData({
      apiUrl: "https://pokeapi.co/api/v2/pokemon?limit=50",
    });
    const pokemonsRes = pokemons.results;
    const getPokemonsDetails = await Promise.all(
      pokemonsRes.map((pokemon) => getData({ apiUrl: pokemon.url }))
    );
    dispatch(setPokemons(getPokemonsDetails));
    dispatch(setLoading(false));
  }
);

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
  },
});
console.log("🚀 ~ file: dataSlice.js:31 ~ dataSlice", dataSlice);

export const { setPokemons } = dataSlice.actions;

export default dataSlice.reducer;
