import React from "react";
import { useSelector } from "react-redux";
import { Theme } from "styles/Theme";
import { HomePage } from "pages/HomePage";

export function App() {
  const colorTheme = useSelector((state) => state.ui.colorTheme);
  return (
    <Theme theme={colorTheme}>
      <HomePage />
    </Theme>
  );
}
