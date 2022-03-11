// .storybook/preview.js
import "../src/styles/globalStyles";
import * as NextImage from "next/image";
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { themes } from '@storybook/theming';


export const decorators = [
  (Story) => (
    <ThemeProvider theme="default">
      <Story />
    </ThemeProvider>
  ),
];
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});
export const parameters = {
    docs: {
    theme: themes.dark,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
     layout: 'centered',
  },
}