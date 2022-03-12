// .storybook/preview.js
import "../src/styles/globalStyles";
import * as NextImage from "next/image";
import React, { Children } from 'react';
import { ThemeProvider } from 'styled-components';
import { themes } from '@storybook/theming';
import { Property } from "csstype";
import { ComponentStory } from '@storybook/react';

export const decorators = [
  (Story: ComponentStory<typeof ThemeProvider>) => (
    <ThemeProvider theme={themes}>
      <Story theme={ themes } />{Children}
    </ThemeProvider>
  ),
];
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props: JSX.IntrinsicAttributes & Omit<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "ref" | "style" | "src" | "srcSet" | "width" | "height" | "loading"> & { src?: any; width?: string | number; height?: string | number; layout?: "fixed" | "fill" | "intrinsic" | "responsive"; loader?: NextImage.ImageLoader; quality?: string | number; priority?: boolean; loading?: "lazy" | "eager"; lazyRoot?: React.RefObject<HTMLElement>; lazyBoundary?: string; placeholder?: "blur" | "empty"; blurDataURL?: string; unoptimized?: boolean; objectFit?: Property.ObjectFit; objectPosition?: Property.ObjectPosition<string | number>; onLoadingComplete?: ( result: { naturalWidth: number; naturalHeight: number; } ) => void; }) => <OriginalNextImage {...props} unoptimized />,
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