import React, { useEffect } from "react";
import { getIn } from "immutable";
import styled from "styled-components";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import {
  SecondTitle,
  PokemonCard,
  PokemonCardLoading,
} from "components/indexComponents";
import { GenericList } from "containers/indexContainers";
import { vars } from "styles/Vars";
import { fetchPokemonsWithDetails } from "slices/dataSlice";

export function ListSection() {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, []);

  return (
    <StyledList>
      <ContainerList>
        <SecondTitle
          textContent="Resultados para 'Pikachu'"
          stylesModifier={`margin-block-start: 12px;`}
        />
        <GenericList
          stylesModifier={`border-block-start: 1px solid ${vars["color-secondary"]};`}
        >
          {loading ? (
            <>
              <PokemonCardLoading />
              <PokemonCardLoading />
              <PokemonCardLoading />
              <PokemonCardLoading />
              <PokemonCardLoading />
              <PokemonCardLoading />
            </>
          ) : (
            pokemons.map((pokemon) => (
              <PokemonCard
                key={`pokemon__${pokemon.name}`}
                pokemonData={pokemon}
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
    content: "";
    background-color: ${vars["color-secondary"]};
  }
`;

const ContainerList = styled.div`
  display: grid;
  gap: 32px;
  inline-size: 95%; ;
`;
