import { css, Theme } from '@emotion/react';

export const LongButtonStyle = {
  self: ({ colors, borderRadius, fontSize, spacing }: Theme) =>
    css({
      cursor: 'pointer',
      width: 450,
      height: 46,
      background: colors?.gadient,
      border: `1px solid ${colors?.primary?.[100]}`,
      borderRadius: borderRadius?.sm,
      boxShadow: '0px 0px 10px rgba(255, 56, 56, 0.1)',
      svg: {
        marginRight: spacing?.[5],
      },
      color: colors?.primary?.[400],
      fontSize: fontSize?.[2],
      fontWeight: 700,
      ':disabled': {
        opacity: 0.2,
        cursor: 'not-allowed',
      },
    }),
};
