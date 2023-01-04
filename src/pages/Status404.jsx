import React from "react";
import styled from "styled-components";
import status404 from "images/404_status.svg";
import { SecondTitle } from "components/indexComponents";
import { vars } from "styles/Vars";
import { device } from "styles/DeviceSize";
export function Status404() {
  return (
    <StyledStatus>
      <Container>
        <Image src={status404} alt="Status 404" />
        <SecondTitle
          textContent="😥 Hmmm! 😥"
          stylesModifier={`margin-block: 8px;`}
        />
        <Paragraph>No encontramos lo que estabas buscando.</Paragraph>
      </Container>
    </StyledStatus>
  );
}

const StyledStatus = styled.main`
  display: grid;
  grid-template-columns: auto;
  place-items: center;
  inline-size: 100%;
  max-inline-size: 1366px;
  block-size: 100vh;
`;

const Container = styled.div`
  inline-size: 90%;
  text-align: center;
  padding-block-start: 65px;
`;

const Image = styled.img`
  inline-size: 50%;
  max-inline-size: 500px;
`;

const Paragraph = styled.p`
  font-size: ${vars["p2-sm"]};
  font-weight: ${vars["font-weight-text2"]};
  color: ${vars["color-primary"]};
  text-transform: capitalize;
  @media ${device.tablet} {
    font-size: ${vars["p2-lg"]};
  }
`;
