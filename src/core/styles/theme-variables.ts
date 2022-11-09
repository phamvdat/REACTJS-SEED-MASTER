import { css, Theme } from '@emotion/react';

export const root = css`
  :root {
    --height-header: 60px;
    --width-sidebar: 300px;
  }
`;

export const themeDark = css`
  body[data-theme='dark'] {
    --background-primary: #171717;
    --background-secondary: #404040;
    --background-third: #262626;

    --text-primary: #ffffff;
    --text-secondary: #f3f3f3;
  }
`;

export const themeLight = css`
  body[data-theme='light'] {
    --background-primary: #ffffff;
    --background-secondary: #a3a3a3;
    --background-third: #f5f5f5;

    --text-primary: #171717;
    --text-secondary: #404040;
  }
`;

export const theme = {
  container: '1280px',
  background: {
    light: '#F1F2F6',
    dark: '#100E0E',
  },
  colors: {
    primary: {
      100: '#FF3838',
      200: '#2C2C2C',
      300: '#100E0E',
      400: '#FFFFFF',
      500: '#F1F2F6',
      600: 'rgba(0, 0, 0, 0.1)',
      700: '#FF4B26',
      800: '#1877F2',
      900: '#55ACEE',
      1000: 'linear-gradient(45deg,#A908C7 100%,#FE8D43 100%)',
    },
    secondary: {
      100: '#20BF6B',
      200: '#0A84FF',
      300: '#FED51B',
      400: 'rgba(255, 56, 56, 0.15)',
      500: '#D1D9E2',
      600: '#636E72',
      650: '#4F4F4F',
      700: '#212121',
      750: '#383838',
      800: 'rgba(0, 0, 0, 0.8)',
      900: '#767676',
    },
    gadient: 'linear-gradient(90deg, #FF3838 0%, #AD100F 100%)',
    text: {
      100: '#212121',
      200: 'rgba(33, 33, 33, 0.8)',
      300: '#747D8C',
      400: 'FFFFFF',
      500: 'rgba(255, 255, 255, 0.8)',
    },
    yellow: {
      50: '#FEFCE8',
      300: '#FDE047',
      400: '#FACC15',
      500: '#705D12',
    },
    red: {
      100: '#FEE2E2',
      300: '#FCA5A5',
      500: '#EF4444',
      600: '#E31B0C',
      800: '#7F1D1D',
      900: 'rgba(83, 41, 41, 0.5)',
    },
    orange: {
      50: '#FFF7ED',
      300: '#FDBA74',
      400: '#FF9800',
      700: '#C77700',
      800: '#AB6703',
      900: 'rgba(78, 55, 27, 0.5)',
    },
    blue: {
      100: '#DBEAFE',
      400: '#64B6F7',
      600: '#2196F3',
      700: '#0B79D0',
      800: '#1B4D75',
      900: 'rgba(22, 37, 56, 0.5)',
    },
    green: {
      100: '#DCFCE7',
      300: '#7BC67E',
      500: '#22C55E',
      700: '#3B873E',
      800: '#226024',
      900: 'rgba(32, 94, 53, 0.5)',
    },
    neutral: {
      50: '#FFFFFF',
      100: '#FAFAFA',
      200: '#E7E7E7',
      300: '#F3F3F3',
      400: '#A3A3A3',
      700: '#404040',
      800: '#262626',
      900: '#171717',
    },
  },
  spacing: {
    1: '2px',
    2: '4px',
    3: '8px',
    4: '12px',
    5: '16px',
    6: '20px',
    7: '24px',
    8: '32px',
    9: '36px',
    10: '48px',
    11: '50px',
    12: '64px',
    13: '80px',
    14: '100px',
    15: '160px',
  },
  fontFamily: {
    primary: 'Quicksand',
    secondary: 'Lexend',
    Tertiary: 'Tahoma',
  },
  fontSize: {
    1: '14px',
    2: '16px',
    3: '20px',
    4: '24px',
    5: '28px',
    6: '40px',
  },

  zIndex: {
    fab: 1050,
    drawer: 1200,
    dialog: 1300,
    tooltip: 1500,
    snackbar: 1400,
    backdrop: 1199,
  },

  borderRadius: {
    sm: '5px',
    md: '10px',
    full: '50%',
  },

  boxShadow: {
    sm: '4px 4px 10px rgba(0, 0, 0, 0.04)',
    md: '0px 0px 8px rgba(0, 0, 0, 0.08)',
  },
  height: {
    header: '55px',
  },
} as Theme;
