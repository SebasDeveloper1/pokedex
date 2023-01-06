import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { HeroHome, ListSection } from 'containers/indexContainers';
import { fecthPokemonsPageList, fecthFullPokemonsList } from 'slices/dataSlice';
import { usePokemonSearch } from 'hooks/usePokemonSearch';

export function HomePage() {
  const pokemonsPageList = useSelector(
    (state) => state.data.pokemonsPageList,
    shallowEqual
  );

  const fullPokemonsList = useSelector(
    (state) => state.data.fullPokemonList,
    shallowEqual
  );

  const loadingPokemonsPageList = useSelector(
    (state) => state.ui.loadingPokemonsPageList
  );

  const { searchValue, setSearchValue, searchedPokemons } = usePokemonSearch({
    pokemonsList: fullPokemonsList,
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fecthPokemonsPageList({ apiUrl: 'https://pokeapi.co/api/v2/pokemon' })
    );
  }, []);
  useEffect(() => {
    dispatch(fecthFullPokemonsList());
  }, []);

  return (
    <StyledHomePage>
      <HeroHome
        searchInputValue={searchValue}
        setSearchInputValue={setSearchValue}
      />
      <ListSection
        loadingPokemonsPageList={loadingPokemonsPageList}
        dataPageList={pokemonsPageList}
        searchedPokemons={searchedPokemons}
        searchInputValue={searchValue}
      />
    </StyledHomePage>
  );
}

const StyledHomePage = styled.main`
  display: grid;
  justify-items: center;
  inline-size: 100%;
  block-size: auto;
`;
