import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

export function PokemonCardLoading() {
  return <StyledCard></StyledCard>;
}

const loading = keyframes`
   0% {
     background-position: 0% 50%;
   }
   50% {
     background-position: 100% 50%;
   }
   100% {
     background-position: 0% 50%;
  }
`;

const StyledCard = styled.div`
  overflow: hidden;
  inline-size: 100%;
  block-size: 100%;
  min-block-size: 170px;
  border-radius: 8px;
  /* background-color: ${(props) => props.theme?.bg2}; */
  background: linear-gradient(
    90deg,
    rgb(173, 137, 250, 0.1),
    rgb(173, 137, 250, 0.3)
  );
  background-size: 400% 400%;
  animation: ${loading} 3s ease-in-out infinite;
`;
