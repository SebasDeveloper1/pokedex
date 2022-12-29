import React from "react";
import styled from "styled-components";
import { device } from "styles/DeviceSize";

export function GenericList({ children, stylesModifier }) {
  return (
    <StyledGenericList stylesModifier={stylesModifier}>
      {children}
    </StyledGenericList>
  );
}

const StyledGenericList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 100%));
  gap: 24px;
  justify-content: center;
  justify-items: center;
  inline-size: 100%;
  block-size: auto;
  padding-block: 62px;
  list-style: none;

  @media ${device.mobileL} {
    grid-template-columns: repeat(auto-fit, minmax(350px, 41.5%));
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(350px, 31.5%));
  }
  ${(props) => props.stylesModifier}
`;
