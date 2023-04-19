import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { lightTheme } from '../src/styles/theme';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    background: orange;
  }
`;

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles,
    themes: {
      light: lightTheme,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
  }),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
