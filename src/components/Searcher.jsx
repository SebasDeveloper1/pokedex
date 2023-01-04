import React from 'react';
import { useSelector } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import styled from 'styled-components';
import { vars } from 'styles/Vars';

export function Searcher({ value, onChange }) {
  const loading = useSelector((state) => state.ui.loadingFullPokemonsList);

  const onSearchValueChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <>
      <StyledSearcher>
        <SearchInput
          type="text"
          placeholder="Buscar Pokémon..."
          value={value}
          onChange={onSearchValueChange}
          disabled={loading}
        />
        <SearchIcon>
          <IconContext.Provider
            value={{
              color: vars['color-text-accent-1'],
              size: '2.4rem',
            }}
          >
            <FaSearch />
          </IconContext.Provider>
        </SearchIcon>
      </StyledSearcher>
      <SearchLoadingMessage>
        {loading
          ? 'Cargando lista completa de pokemons, espera por favor...'
          : null}
      </SearchLoadingMessage>
    </>
  );
}

const StyledSearcher = styled.div`
  display: grid;
  grid-template-columns: 1fr 60px;
  inline-size: 90%;
  max-inline-size: 600px;
  block-size: 45px;
  margin-block-end: 24px;
  border-radius: 24px;
  background-color: ${(props) => props.theme?.bg4};
  filter: drop-shadow(0px 0px 1px ${vars['color-shadow-1']});
`;

const SearchInput = styled.input`
  grid-column: 1 / 2;
  inline-size: 100%;
  block-size: 100%;
  padding: 4px 20px;
  font-weight: ${vars['font-weight-text2']};
  color: ${(props) => props.theme?.txt4};
  border: none;
  background: transparent;

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    color: ${(props) => props.theme?.txtAccent2};
  }
`;

const SearchIcon = styled.span`
  display: grid;
  place-items: center;
  grid-column: 100%;
  block-size: 100%;
`;

const SearchLoadingMessage = styled.p`
  inline-size: 90%;
  max-inline-size: 600px;
  color: ${(props) => props.theme?.txtAccent1};
  text-align: center;
`;
