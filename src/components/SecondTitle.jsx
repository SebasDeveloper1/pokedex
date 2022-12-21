import React from "react";
import styled from "styled-components";
import { vars } from "styles/Vars";
import { device } from "styles/DeviceSize";

export function SecondTitle({ textContent, stylesModifier }) {
  return <Title stylesModifier={stylesModifier}>{textContent}</Title>;
}

const Title = styled.h2`
  inline-size: 100%;
  line-height: 1;
  color: ${(props) => props.theme.txt1};

  ${(props) => props.stylesModifier}
`;
