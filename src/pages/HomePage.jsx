import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { Header, Footer } from "components/indexComponents";
import { HeroHome, ListSection } from "containers/indexContainers";
import { fecthPokemonsPageList, fecthFullPokemonsList } from "slices/dataSlice";
import { usePokemonSearch } from "hooks/usePokemonSearch";

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
      fecthPokemonsPageList({ apiUrl: "https://pokeapi.co/api/v2/pokemon" })
    );
    dispatch(fecthFullPokemonsList());
  }, []);

  return (
    <StyledHomePage>
      <Header />
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
      <Footer />
    </StyledHomePage>
  );
}

const StyledHomePage = styled.main`
  display: grid;
  justify-items: center;
  inline-size: 100%;
  block-size: auto;
`;
