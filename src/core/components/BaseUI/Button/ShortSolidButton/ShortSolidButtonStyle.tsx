import { css, Theme } from '@emotion/react';
import { hover } from '@testing-library/user-event/dist/hover';

export const ShortSolidButtonStyle = {
  self: ({ fontSize, colors, borderRadius }: Theme) =>
    css({
      height: '34px',
      width: '78px',
      fontWeight: '600',
      fontSize: fontSize[1],
      lineHeight: '18px',
      border: 'none',
      borderRadius: borderRadius.sm,
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: colors.primary[400],
        color: colors.primary[100],
        boxShadow: '0px 0px 10px rgba(255, 56, 56, 0.2)',
        border: `1px solid ${colors.primary[100]}`,
      },
      ':disabled': {
        opacity: 0.2,
      },
    }),
  color: {
    white: ({ colors }: Theme) =>
      css({
        color: colors.primary[400],
        backgroundColor: colors.secondary[700],
      }),
    black: ({ colors }: Theme) =>
      css({
        color: colors.primary[100],
      }),
  },
};
