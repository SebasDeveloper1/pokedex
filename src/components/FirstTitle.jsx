import React from "react";
import styled from "styled-components";
import { vars } from "styles/Vars";

export function FirstTitle({ textContent }) {
  return <Title>{textContent}</Title>;
}

const Title = styled.h1`
  inline-size: 90%;
  line-height: 1;
  color: ${vars["color-text-light-1"]};
  text-align: center;
`;
