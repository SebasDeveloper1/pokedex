import React from "react";
import { IconContext } from "react-icons";
import styled from "styled-components";
import { vars } from "styles/Vars";

export function PrimaryButton({ link, onClick, children }) {
  if (link) {
    return (
      <StyleButton type="button" onClick={onClick}>
        <IconContext.Provider
          value={{
            color: "inherit",
            size: "40%",
          }}
        >
          {children}
        </IconContext.Provider>
      </StyleButton>
    );
  } else {
    return null;
  }
}

const StyleButton = styled.button`
  display: grid;
  place-items: center;
  inline-size: 55px;
  block-size: 55px;
  border-radius: 50%;
  color: ${vars["color-text-light-1"]};
  background-color: ${vars["color-secondary"]};
  cursor: pointer;

  :hover {
    background-color: ${vars["color-secondary-opacity"]};
  }
`;
