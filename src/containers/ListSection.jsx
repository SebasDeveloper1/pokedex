import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {
  SecondTitle,
  PokemonCard,
  PokemonCardLoading,
} from 'components/indexComponents';
import { GenericList, PaginationSection } from 'containers/indexContainers';
import { vars } from 'styles/Vars';

export function ListSection({ loadingPokemonsPageList, dataPageList }) {
  const { count, next, previous, results } = dataPageList;
  const navigate = useNavigate();

  const onClickHandler = (pokemon) => {
    navigate(`/details/${pokemon}`);
  };

  return (
    <StyledList>
      <ContainerList>
        <SecondTitle
          textContent="Lista de Pokemons"
          stylesModifier={`margin-block-start: 12px; text-align: center;`}
        />
        <PaginationSection
          count={count}
          next={next}
          previous={previous}
          loading={loadingPokemonsPageList}
        />
        <GenericList
          stylesModifier={`border-block-start: 1px solid ${vars['color-secondary']};`}
        >
          {loadingPokemonsPageList ? (
            <>
              <PokemonCardLoading />
              <PokemonCardLoading />
              <PokemonCardLoading />
              <PokemonCardLoading />
              <PokemonCardLoading />
              <PokemonCardLoading />
            </>
          ) : (
            results.map((pokemon) => (
              <PokemonCard
                key={`pokemon__${pokemon?.name}-${pokemon.id}`}
                pokemonData={pokemon}
                onClick={() => {
                  onClickHandler(pokemon?.name);
                }}
              />
            ))
          )}
        </GenericList>
      </ContainerList>
    </StyledList>
  );
}

const StyledList = styled.section`
  position: relative;
  display: grid;
  place-items: center;
  inline-size: 100%;
  max-inline-size: 1366px;
  margin-block-start: 32px;
  padding-block-start: 32px;

  &::after {
    position: absolute;
    top: 0;
    left: calc(50% - 50px);
    inline-size: 100px;
    block-size: 4px;
    content: '';
    background-color: ${vars['color-secondary']};
  }
`;

const ContainerList = styled.div`
  display: grid;
  gap: 32px;
  inline-size: 95%; ;
`;
