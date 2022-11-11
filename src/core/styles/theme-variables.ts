import { css, Theme } from '@emotion/react';

export const root = css`
  :root {
    --height-header: 60px;
    --width-sidebar: 300px;
  }
`;

export const themeDark = css`
  body[data-theme='dark'] {
    --background-primary: #212121;
    --background-secondary: #100e0e;
    --background-third: #2c2c2c;

    --text-primary: #ffffff;
    --text-secondary: rgba(255, 255, 255, 0.8);
  }
`;

export const themeLight = css`
  body[data-theme='light'] {
    --background-primary: #ffffff;
    --background-secondary: #f1f2f6;
    --background-third: #f1f2f6;

    --text-primary: #212121;
    --text-secondary: rgba(33, 33, 33, 0.8);
  }
`;

export const theme = {
  container: '1440px',
  background: {
    light: 'rgba(255, 255, 255, 0.1',
    dark: '#212121',
  },
  colors: {
    primary: {
      100: '#FF3838',
      200: '#2C2C2C',
      300: '#100E0E',
      400: '#FFFFFF',
      500: '#F1F2F6',
    },
    secondary: {
      100: '#20BF6B',
      200: '#0A84FF',
      300: '#FED51B',
      400: 'rgba(255, 56, 56, 0.15)',
      500: '#D1D9E2',
      600: '#636E72',
      700: '#4F4F4F',
      800: '#383838',
      900: 'rgba(0, 0, 0, 0.8)',
    },
    gadient: 'linear-gradient(90deg, #FF3838 0%, #AD100F 100%)',
    text: {
      100: '#212121',
      200: 'rgba(33, 33, 33, 0.8)',
      300: '#747D8C',
      400: 'FFFFFF',
      500: 'rgba(255, 255, 255, 0.8)',
    },
  },
  spacing: {
    1: '2px',
    2: '4px',
    3: '6px',
    4: '8px',
    5: '12px',
    6: '16px',
    7: '24px',
    8: '32px',
    9: '40px',
    10: '48px',
  },
  fontFamily: {
    primary: 'Quicksand',
    secondary: 'Lexend',
    Tertiary: 'Tahoma',
  },
  fontSize: {
    0: '12px',
    1: '14px',
    2: '16px',
    3: '20px',
    4: '24px',
    5: '28px',
    6: '40px',
  },

  borderRadius: {
    sm: '5px',
    md: '10px',
    full: '50%',
  },

  boxShadow: {
    primary: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    sm: '0px 0px 10px rgba(33, 33, 33, 0.1)',
    red: '0px 0px 10px rgba(255, 56, 56, 0.1)',
    yellow: '0px 0px 10px rgba(254, 213, 27, 0.1)',
    green: '0px 0px 10px rgba(46, 213, 115, 0.1) ',
    blue: '0px 0px 10px rgba(255, 56, 56, 0.1)',
  },
  height: {
    header: '55px',
  },
} as Theme;
