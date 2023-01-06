import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FaSun, FaMoon } from 'react-icons/fa';
import { rgba } from 'polished';
import { toggleTheme } from 'slices/uiSlice';
import logoImg from 'icons/pokeball_icon.svg';
import { vars } from 'styles/Vars';

export function Header() {
  const colorTheme = useSelector((state) => state.ui.colorTheme);
  const dispatch = useDispatch();

  const handlerClick = () => {
    if (colorTheme === 'dark') {
      dispatch(toggleTheme('light'));
    } else {
      dispatch(toggleTheme('dark'));
    }
  };

  return (
    <StyledHeader>
      <ContainerHeader>
        <Link to="/">
          <ContainerLogo>
            <LogoImg src={logoImg} alt="logo pokédex" />
            <LogoTxt>Pokédex</LogoTxt>
          </ContainerLogo>
        </Link>
        <ThemeBtn type="button" onClick={handlerClick}>
          <IconContext.Provider
            value={{
              color: vars['color-text-accent-1'],
              size: '3rem',
            }}
          >
            {colorTheme === 'dark' ? <FaSun /> : <FaMoon />}
          </IconContext.Provider>
        </ThemeBtn>
      </ContainerHeader>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: grid;
  justify-items: center;
  inline-size: 100%;
  block-size: 70px;
  background-color: ${vars['color-dark-2']};
`;

const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  inline-size: 90%;
  max-inline-size: 1366px;
  block-size: 100%;
`;

const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-inline-end: 16px;
  border-radius: 32px;
  background-color: ${(props) => props.theme.bg4};
`;

const LogoImg = styled.img`
  inline-size: 40px;
  block-size: 40px;
  margin-inline-end: 4px;
`;

const LogoTxt = styled.h3`
  line-height: 1;
  color: ${(props) => props.theme.txt1};
`;

const ThemeBtn = styled.button`
  display: grid;
  place-items: center;
  inline-size: 50px;
  block-size: 50px;
  border-radius: 50%;
  background: ${rgba(vars['color-text-light-1'], 0.1)};
  cursor: pointer;
`;
