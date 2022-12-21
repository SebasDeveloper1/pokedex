import React from "react";
import { FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";
import styled from "styled-components";
import { vars } from "styles/Vars";

export function Searcher() {
  return (
    <StyledSearcher>
      <SearchInput type="text" placeholder="Buscar Pokémon..." />
      <SearchButton type="button">
        <IconContext.Provider
          value={{
            color: vars["color-text-light-1"],
            size: "2.4rem",
          }}
        >
          <FaSearch />
        </IconContext.Provider>
      </SearchButton>
    </StyledSearcher>
  );
}

const StyledSearcher = styled.div`
  display: grid;
  grid-template-columns: 1fr 60px;
  inline-size: 90%;
  max-inline-size: 600px;
  block-size: 45px;
  border-radius: 24px;
  background: transparent;
  filter: drop-shadow(0px 0px 1px ${vars["color-shadow-1"]});
`;

const SearchInput = styled.input`
  grid-column: 1 / 2;
  inline-size: 100%;
  block-size: 100%;
  padding: 4px 20px;
  font-weight: ${vars["font-weight-text2"]};
  color: ${(props) => props.theme?.txt4};
  border: none;
  border-start-start-radius: 24px;
  border-end-start-radius: 24px;
  background-color: ${(props) => props.theme?.bg4};

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    color: ${(props) => props.theme?.txt6};
  }
`;

const SearchButton = styled.button`
  display: grid;
  place-items: center;
  grid-column: 100%;
  block-size: 100%;
  border-start-end-radius: 24px;
  border-end-end-radius: 24px;
  background-color: ${(props) => props.theme?.txtAccent2};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme?.txtAccent1};
  }
`;
