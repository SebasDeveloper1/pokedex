import React from "react";
import { useSelector } from "react-redux";
import { Theme } from "styles/Theme";
import { NavigationRoutes } from "routes/Routes";

export function App() {
  const colorTheme = useSelector((state) => state.ui.colorTheme);
  return (
    <Theme theme={colorTheme}>
      <NavigationRoutes />
    </Theme>
  );
}
