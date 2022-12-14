import { css, Global } from '@emotion/react';
import QuicksandMedium from 'assets/fonts/Quicksand/Quicksand-Medium.ttf';
import QuicksandRegular from 'assets/fonts/Quicksand/Quicksand-Regular.ttf';
import QuicksandBold from 'assets/fonts/Quicksand/Quicksand-SemiBold.ttf';
import { root, themeDark, themeLight } from './theme-variables';

const fontFace = css`
  @font-face {
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 400;
    src: url(${QuicksandRegular}) format('truetype');
  }
  @font-face {
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 500;
    src: url(${QuicksandMedium}) format('truetype');
  }
  @font-face {
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 600;
    src: url(${QuicksandBold}) format('truetype');
  }
`;

const reset = css`
  * {
    font-family: 'Quicksand', sans-serif;
    box-sizing: inherit;
  }

  *:not(.raw-content *) {
    margin: 0;
    padding: 0;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    line-height: 1.3;
    font-weight: 400;
    box-sizing: border-box;
    background-color: var(--background-primary);
    color: var(--text-primary);
    touch-action: manipulation;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const resetTag = css`
  a {
    display: inline-block;
    text-decoration: none;
  }

  span,
  strong,
  small {
    display: inline-block;
  }

  ul,
  ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  img {
    max-width: 100%;
  }
`;

const common = css`
  body[data-scrolling='false'] {
    overflow: hidden;
  }
`;

const keyframes = css`
  @keyframes ripple {
    0% {
      box-shadow: 0px 0px 0px 1px rgba(250, 204, 21, 0.3);
    }
    50% {
      box-shadow: 0px 0px 0px 10px rgba(255, 204, 21, 0.3);
    }
    100% {
      box-shadow: 0px 0px 0px 15px rgba(0, 0, 0, 0);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

const GlobalStyles = () => {
  return (
    <>
      <Global
        styles={[root, fontFace, reset, resetTag, common, keyframes, themeDark, themeLight]}
      />
    </>
  );
};

export default GlobalStyles;
