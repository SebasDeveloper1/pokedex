import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { HeroHome, ListSection } from 'containers/indexContainers';
import { fecthPokemonsPageList } from 'slices/dataSlice';

export function HomePage() {
  const pokemonsPageList = useSelector(
    (state) => state.data.pokemonsPageList,
    shallowEqual
  );

  const loadingPokemonsPageList = useSelector(
    (state) => state.ui.loadingPokemonsPageList
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fecthPokemonsPageList({ apiUrl: 'https://pokeapi.co/api/v2/pokemon' })
    );
  }, []);

  return (
    <StyledHomePage>
      <HeroHome />
      <ListSection
        loadingPokemonsPageList={loadingPokemonsPageList}
        dataPageList={pokemonsPageList}
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
