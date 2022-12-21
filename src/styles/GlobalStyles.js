import { createGlobalStyle } from "styled-components";
import { vars } from "styles/Vars";
import { device } from "styles/DeviceSize";
export const GlobalStyle = createGlobalStyle`
/* General */
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

*:focus-visible {
  outline: 2px solid ${vars["color-secondary-opacity"]};
}

html {
  font-size: 62.5%;
}

body {
  font-family: ${vars["font-family"]};
  font-size: ${vars["p1-lg"]};
  font-weight: ${vars["font-weight-text1"]};
  color: ${(props) => props.theme.txt1};
  line-height: 1.5;
  background-color: ${(props) => props.theme.bg1};
}

button {
  color: ${vars["color-text-light-1"]};
  border: none;
}

h1{
  font-size: ${vars["headline1-sm"]};
  font-weight: ${vars["font-weight-title1"]};

  @media ${device.mobileL} {
    font-size: ${vars["headline1-md"]};
  }
  @media ${device.tablet} {
    font-size: ${vars["headline1-lg"]};
  }
}

h2{ 
  font-size: ${vars["headline2-sm"]};
  font-weight: ${vars["font-weight-title2"]};

  @media ${device.tablet} {
    font-size: ${vars["headline2-lg"]};
  }
}

h3{ 
  font-size: ${vars["headline3-sm"]};
  font-weight: ${vars["font-weight-title2"]};

  @media ${device.tablet} {
    font-size: ${vars["headline3-lg"]};
  }
}

h4{ 
  font-size: ${vars["headline4-sm"]};
  font-weight: ${vars["font-weight-title2"]};

  @media ${device.tablet} {
    font-size: ${vars["headline4-lg"]};
  }
}

*::-webkit-scrollbar {
  inline-size: 10px;
}
*::-webkit-scrollbar-track {
  background-color: ${vars["color-dark-2"]};
}
*::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: ${vars["color-primary"]};
}
`;
