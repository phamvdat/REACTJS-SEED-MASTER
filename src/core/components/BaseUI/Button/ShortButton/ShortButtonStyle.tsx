import { css, Theme } from '@emotion/react';

export const ShortButtonStyles = {
  self: ({ fontSize, colors, borderRadius }: Theme) =>
    css({
      height: '34px',
      width: '78px',
      border: 'none',
      borderRadius: borderRadius.sm,
      fontSize: fontSize[1],
      lineHeight: '18px',
      fontWeight: '600',
      backgroundColor: colors.primary[100],
      '&:hover': {
        cursor: 'pointer',
      },
      ':disabled': {
        opacity: 0.2,
      },
    }),
  color: {
    white: ({ colors }: Theme) =>
      css({
        color: colors.primary[400],
        border: `1px solid ${colors.primary[400]}`,
        ':hover': {
          backgroundColor: colors.secondary[700],
          color: colors.primary[400],
        },
      }),
    black: ({ colors }: Theme) =>
      css({
        color: colors.secondary[700],
        border: `1px solid ${colors.secondary[700]}`,
        ':hover': {
          backgroundColor: colors.secondary[700],
          color: colors.primary[400],
        },
      }),
  },
};
