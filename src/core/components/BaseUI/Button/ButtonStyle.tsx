import { css, keyframes, Theme } from '@emotion/react';

export const loadingAnimate = keyframes(
  css`
    from {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -o-transform: rotate(360deg);
    }
  `,
);

export const buttonStyle = {
  self: ({ spacing }: Theme) =>
    css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: spacing?.[2],
      gap: spacing?.[3],
      fontWeight: 600,
      color: 'var(--text-primary)',
      '&:hover': {
        cursor: 'pointer',
      },
      ':disabled': {
        opacity: 0.5,
        cursor: 'default',
      },
    }),
  size: {
    sm: ({ spacing }: Theme) =>
      css({
        lineHeight: '16px',
        padding: `${spacing?.[3]} ${spacing?.[5]}`, //8px 16px
      }),
    md: ({ spacing }: Theme) =>
      css({
        lineHeight: '24px',
        padding: `${spacing?.[3]} ${spacing?.[6]}`, //8px 16px
      }),
    lg: ({ spacing }: Theme) =>
      css({
        lineHeight: '26px',
        padding: `${spacing?.[4]} ${spacing?.[7]}`, //12px 24px
      }),
  },

  fill: ({ colors }: Theme) =>
    css({
      border: 'none',
      color: colors?.neutral['900'],
      backgroundColor: colors?.yellow['300'],
      '&:hover': {
        backgroundColor: colors?.yellow['400'],
      },
      ':disabled': {
        backgroundColor: 'var(--background-third)',
        color: colors?.neutral['400'],
      },
    }),
  outlined: ({ colors }: Theme) =>
    css({
      border: '1px solid var(--text-primary)',
      backgroundColor: 'var(--background-primary)',
      '&:hover': {
        color: colors?.yellow['400'],
        border: '1px solid',
      },
      ':disabled': {
        color: 'var(--text-primary)',
      },
    }),
  text: ({ colors }: Theme) =>
    css({
      border: 'none',
      backgroundColor: 'transparent',
      '&:hover': {
        color: colors?.yellow['400'],
      },
      ':disabled': {
        color: 'var(--text-primary)',
      },
    }),

  loading: css({
    opacity: '0.5',
    cursor: 'default',
    pointerEvents: 'none',
  }),
};

export const loadingIcon = css({
  animation: `${loadingAnimate} 1s linear 0s infinite`,
});
