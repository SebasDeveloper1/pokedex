import React from "react";
import styled from "styled-components";
import { Header, Footer } from "components/indexComponents";

export function Layout({ children }) {
  return (
    <StyledLayout>
      <Header />
      {children}
      <Footer />
    </StyledLayout>
  );
}

const StyledLayout = styled.section`
  display: grid;
  grid-template-rows: auto 1fr auto;
  inline-size: 100%;
  min-block-size: 100vh;

  Footer {
    align-self: end;
  }
`;
