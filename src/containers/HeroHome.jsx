import React from "react";
import styled from "styled-components";
import { FirstTitle, Searcher } from "components/indexComponents";
import { vars } from "styles/Vars";

export function HeroHome({ searchInputValue, setSearchInputValue }) {
  return (
    <StyledHeroHome>
      <FirstTitle textContent="¡Descubre todo lo que el mundo Pokémon tiene para ti!" />
      <Searcher value={searchInputValue} onChange={setSearchInputValue} />
    </StyledHeroHome>
  );
}

const StyledHeroHome = styled.div`
  position: relative;
  display: grid;
  justify-items: center;
  align-content: end;
  inline-size: 100%;
  max-inline-size: 1366px;
  block-size: 40vh;
  min-block-size: 500px;
  padding-block: 32px;
  background-image: ${vars["color-linear-gradient-1"]},
    url("https://image.tmdb.org/t/p/w1280//6ufHj6uqyje1ogAlCvRB54hcGgn.jpg");
  background-size: cover;
  background-position: center;
`;
