import { useMemo, ReactNode } from "react";
import { ThemeProvider } from "@emotion/react";
import { addDecorator } from "@storybook/react";
import { withThemes } from "@react-theming/storybook-addon";
import { createTheme } from "@mui/material/styles";
import shape from "../src/theme/shape";
import palette from "../src/theme/palette";
import typography from "../src/theme/typography";
import breakpoints from "../src/theme/breakpoints";
import componentsOverride from "../src/theme/overrides";
import shadows, { customShadows } from "../src/theme/shadows";

const theme = {
  palette: { ...palette.light, mode: "light" },
  shape,
  typography,
  breakpoints,
  shadows: shadows.light,
  customShadows: customShadows.light,
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const providerFn = ({ theme, children }) => {
  const muTheme = createTheme(theme);
  theme.components = componentsOverride(theme);
  return <ThemeProvider theme={muTheme}>{children}</ThemeProvider>;
};

addDecorator(withThemes(null, [theme], { providerFn }));
