import React from 'react';
import styled from 'styled-components';
import { vars } from 'styles/Vars';
import { device } from 'styles/DeviceSize';

export function PokemonCard({ pokemonData, onClick }) {
  const image =
    pokemonData?.sprites?.other?.dream_world?.front_default ||
    pokemonData['sprites']?.other['official-artwork']?.front_default ||
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png';

  const types = pokemonData.types;
  const pokemonTypes = [];
  types.forEach((element) => pokemonTypes.push(element.type.name));

  return (
    <StyledCard>
      <CardContent onClick={onClick}>
        <CardContainer>
          <FigureCard>
            <ImgCard src={image} alt={pokemonData?.name} />
          </FigureCard>
          <CardInfo>
            <TitleCard>{pokemonData?.name}</TitleCard>
            <CardType>{pokemonTypes.join(' / ')}</CardType>
          </CardInfo>
        </CardContainer>
      </CardContent>
    </StyledCard>
  );
}

const StyledCard = styled.li`
  overflow: hidden;
  inline-size: 100%;
  block-size: auto;
  padding: 12px;
  border-radius: 8px;
  background-color: ${(props) => props.theme?.bg2};
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);

  @media ${device.tablet} {
    &:hover {
      transform: scale(1.03) translateY(-5px);
    }
  }
`;

const CardContent = styled.button`
  inline-size: 100%;
  background-color: transparent;
  cursor: pointer;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  place-items: center;
  gap: 8px;
  inline-size: 100%;
`;

const FigureCard = styled.figure`
  grid-column: 1 / 2;
  inline-size: 150px;
  block-size: 150px;
  border: 3px solid rgb(180, 104, 183);
  border-radius: 50%;
  background-color: rgba(180, 104, 183, 0.5);
`;

const ImgCard = styled.img`
  inline-size: 100%;
  block-size: 100%;
  object-fit: contain;
`;

const CardInfo = styled.section`
  inline-size: 100%;
`;

const TitleCard = styled.h3`
  inline-size: 100%;
  margin-block-end: 12px;
  color: ${(props) => props.theme?.txt2};
  text-transform: capitalize;
`;

const CardType = styled.p`
  display: inline-block;
  max-inline-size: 100%;
  padding: 4px 12px;
  background-color: ${vars['color-secondary']};
  border-radius: 24px;
  font-size: ${vars['p1-sm']};
  font-weight: ${vars['font-weight-text2']};
  color: ${vars['color-text-light-1']};
  text-transform: capitalize;
  @media ${device.tablet} {
    font-size: ${vars['p1-lg']};
  }
`;
