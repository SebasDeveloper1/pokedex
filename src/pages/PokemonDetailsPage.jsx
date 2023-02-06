import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { PokemonCardLoading } from 'components/indexComponents';
import { getPokemonDetails } from 'utils/getPokemonDetails';
import { vars } from 'styles/Vars';
import { device } from 'styles/DeviceSize';

const typesColors = {
  bug: { color: '#94BC4A' },
  ice: { color: '#70CBD4' },
  dark: { color: '#736C75' },
  fire: { color: '#EA7A3C' },
  rock: { color: '#B2A061' },
  water: { color: '#539AE2' },
  fairy: { color: '#E397D1' },
  ghost: { color: '#846AB6' },
  grass: { color: '#71C558' },
  steel: { color: '#89A1B0' },
  dragon: { color: '#6A7BAF' },
  flying: { color: '#7DA6DE' },
  ground: { color: '#CC9F4F' },
  normal: { color: '#AAB09F' },
  poison: { color: '#B468B7' },
  psychic: { color: '#E5709B' },
  fighting: { color: '#CB5F48' },
  electric: { color: '#E5C531' },
};

const styles = (pokemonTypes, percentage) => {
  let background = '';

  if (pokemonTypes.length > 1) {
    background = `linear-gradient(0deg, ${pokemonTypes
      .map((type) => typesColors[type].color + percentage)
      .join(', ')})`;
  } else background = typesColors[pokemonTypes[0]].color + percentage;

  return {
    background,
    color: typesColors[pokemonTypes[0]].color,
  };
};

export function PokemonDetailsPage() {
  const [pokemonInfo, setPokemonInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const { pokemonName } = useParams();
  useEffect(() => {
    const getPokemonInfo = async () => {
      setLoading(true);
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      const data = await res.json();
      setPokemonInfo(getPokemonDetails(data));
      return setLoading(false);
    };

    getPokemonInfo();
  }, []);

  const {
    idPokemon,
    namePokemon,
    imagePokemon,
    heightPokemon,
    weightPokemon,
    pokemonTypes,
    pokemonAbilities,
    baseExperiencePokemon,
  } = pokemonInfo;

  return (
    <>
      {loading ? (
        <LoadinContainer>
          <PokemonCardLoading />
        </LoadinContainer>
      ) : (
        <StyledDetailsPage style={styles(pokemonTypes, 50)}>
          <ImageContainer>
            <FigureCard>
              <ImgCard src={imagePokemon} alt={namePokemon} />
            </FigureCard>
          </ImageContainer>
          <InfoContainer>
            <IdPokemon>{`N° ${idPokemon}`}</IdPokemon>
            <NamePokemon>{namePokemon}</NamePokemon>
            <FeaturesContainer>
              <Feacture>
                <DescFeature>{`${weightPokemon} Kg`}</DescFeature>
                <TitleFeature>Peso</TitleFeature>
              </Feacture>
              <Feacture>
                <DescFeature>{`${baseExperiencePokemon} Pts`}</DescFeature>
                <TitleFeature>Experiencia básica</TitleFeature>
              </Feacture>
              <Feacture>
                <DescFeature>{`${heightPokemon} m`}</DescFeature>
                <TitleFeature>Altura</TitleFeature>
              </Feacture>
              <Feacture>
                <DescFeature>{pokemonTypes.join(', ')}</DescFeature>
                {pokemonTypes.length > 1 ? (
                  <TitleFeature>Tipos</TitleFeature>
                ) : (
                  <TitleFeature>Tipo</TitleFeature>
                )}
              </Feacture>
              <Feacture>
                <DescFeature>{pokemonAbilities.join(', ')}</DescFeature>
                {pokemonAbilities.length > 1 ? (
                  <TitleFeature>Habilidades</TitleFeature>
                ) : (
                  <TitleFeature>Habilidades</TitleFeature>
                )}
              </Feacture>
            </FeaturesContainer>
          </InfoContainer>
        </StyledDetailsPage>
      )}
    </>
  );
}

const LoadinContainer = styled.div`
  inline-size: 90%;
  max-inline-size: 1366px;
  block-size: 500px;
  margin: 62px auto;
`;

const StyledDetailsPage = styled.main`
  display: grid;
  place-items: center;
  grid-template-rows: repeat(3, 1fr);
  inline-size: 100%;
  padding-block: 32px;

  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
  }
`;

const ImageContainer = styled.section`
  position: relative;
  display: grid;
  place-items: center;
  grid-row: 1 / 2;
  inline-size: 100%;
  block-size: 100%;
  padding: 20px;

  &::before {
    position: absolute;
    top: 50%;
    left: 2.5%;
    right: 2.5%;
    bottom: 0;
    content: '';
    border-start-start-radius: 12px;
    border-start-end-radius: 12px;
    background-color: ${(props) => props.theme.bg3};
  }

  @media ${device.tablet} {
    grid-column: 1 / 2;

    &::before {
      background-color: transparent;
    }
  }
`;

const FigureCard = styled.figure`
  inline-size: 200px;
  block-size: 200px;
  border-radius: 50%;
  border: 3px solid rgb(180, 104, 183);
  background-color: rgba(180, 104, 183, 0.5);
  z-index: 1;

  @media ${device.tablet} {
    inline-size: 350px;
    block-size: 350px;
  }
`;

const ImgCard = styled.img`
  inline-size: 100%;
  block-size: 100%;
  object-fit: contain;
`;

const InfoContainer = styled.section`
  display: grid;
  justify-items: center;
  align-content: start;
  grid-row: 2 / 4;
  inline-size: 95%;
  block-size: 100%;
  padding: 20px;
  border-end-start-radius: 12px;
  border-end-end-radius: 12px;
  background-color: ${(props) => props.theme.bg3};

  @media ${device.tablet} {
    grid-column: 2 / 4;
    grid-row: 1 / 2;
    border-radius: 12px;
  }
`;

const IdPokemon = styled.span`
  padding: 2px 8px;
  border-radius: 24px;
  background-color: ${vars['color-accent-1']};
  font-size: ${vars['p1-sm']};
  color: ${(props) => props.theme.txt1};

  @media ${device.tablet} {
    font-size: ${vars['p1-lg']};
  }
`;

const NamePokemon = styled.h2`
  inline-size: 100%;
  margin-block-end: 20px;
  font-size: ${vars['headline1-sm']};
  font-weight: ${vars['font-weight-title1']};
  color: inherit;
  text-align: center;
  text-transform: capitalize;

  @media ${device.mobileL} {
    font-size: ${vars['headline1-md']};
  }
  @media ${device.tablet} {
    font-size: ${vars['headline1-lg']};
  }
`;

const FeaturesContainer = styled.div`
  display: grid;
  grid-template-areas:
    'feature1 feature2 feature2 feature3'
    'feature4 feature4 feature4 feature4'
    'feature5 feature5 feature5 feature5';
  place-items: center;
  inline-size: 95%;
  padding: 12px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.bg1};
`;

const Feacture = styled.div`
  inline-size: 100%;
  block-size: 100%;
  padding-block: 12px;
  text-align: center;

  &:nth-child(1) {
    grid-area: feature1;
  }

  &:nth-child(2) {
    grid-area: feature2;
    border-inline: 1px solid ${(props) => props.theme.neutral70};
  }
  &:nth-child(3) {
    grid-area: feature3;
  }

  &:nth-child(4) {
    grid-area: feature4;
    border-block-start: 1px solid ${(props) => props.theme.neutral70};
  }
  &:nth-child(5) {
    grid-area: feature5;
    border-block-start: 1px solid ${(props) => props.theme.neutral70};
  }
`;

const TitleFeature = styled.span`
  display: inline-block;
  inline-size: 100%;
  font-size: ${vars['p1-sm']};
  font-weight: ${vars['font-weight-text1']};
  color: ${(props) => props.theme.txt6};
  text-transform: capitalize;

  @media ${device.tablet} {
    font-size: ${vars['p1-lg']};
  }
`;

const DescFeature = styled.span`
  display: inline-block;
  inline-size: 100%;
  font-size: ${vars['headline4-sm']};
  font-weight: ${vars['font-weight-title2']};
  color: ${(props) => props.theme.txt1};
  text-transform: capitalize;

  @media ${device.tablet} {
    font-size: ${vars['headline4-lg']};
  }
`;
