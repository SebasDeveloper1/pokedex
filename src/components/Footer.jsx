import React from 'react';
import styled from 'styled-components';
import logoBasic from 'images/sebas-developer.logo.png';
import { vars } from 'styles/Vars';

export function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Logo src={logoBasic} alt="@SebasDeveloper Logo" />
        <Title>Sebastian Pedroza ◉ @SebasDeveloper ◉ 2022</Title>
        <Subtitle>Hecho con el 💙 por Sebastian Pedroza</Subtitle>
      </Container>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: grid;
  place-items: center;
  inline-size: 100%;
  block-size: 240px;
  background-color: ${vars['color-dark-2']};
`;

const Container = styled.div`
  inline-size: 90%;
  max-inline-size: 1366px;
  text-align: center;
`;

const Logo = styled.img`
  inline-size: 150px;
`;

const Title = styled.p`
  margin-block: 12px;
  color: ${vars['color-primary']};
`;

const Subtitle = styled.p`
  color: ${vars['color-text-light-6']};
`;
