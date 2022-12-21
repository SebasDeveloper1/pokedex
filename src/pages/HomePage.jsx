import React from "react";
import styled from "styled-components";
import { Header } from "components/indexComponents";
import { HeroHome, ListSection } from "containers/indexContainers";

export function HomePage() {
  return (
    <StyledHomePage>
      <Header />
      <HeroHome />
      <ListSection />
    </StyledHomePage>
  );
}

const StyledHomePage = styled.main`
  display: grid;
  justify-items: center;
  inline-size: 100%;
  block-size: auto;
`;
