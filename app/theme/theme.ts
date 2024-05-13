'use client';

// external
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      primary: '#5d87ff',
      light: '#5d87ff1a',
      border: '#e2e8f0',
      danger: '#ff3030',
    },
  },
  config: {
    cssVarPrefix: {
      fonts: [`var(--font-roboto)`],
    },
  },
  breakpoints: {
    base: '0em',
    sm: '40em',
    md: '63em',
    lg: '82em',
    xl: '106em',
    '2xl': '127em',
  },
  sizes: {
    container: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1792px',
    },
  },
});

export default theme;
