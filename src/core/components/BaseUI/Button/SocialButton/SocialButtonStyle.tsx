import { css, Theme } from '@emotion/react';

export const SocialButtonStyle = {
  self: ({ colors, borderRadius, fontSize, spacing }: Theme) =>
    css({
      cursor: 'pointer',
      width: 450,
      height: 44,
      textAlign: 'left',
      lineHeight: '20px',
      background: colors.primary[200],
      borderRadius: borderRadius.sm,
      svg: {
        float: 'left',
        margin: `0 ${spacing[5]}`,
      },
      color: colors.primary[400],
      fontSize: fontSize[1],
      fontWeight: 500,
    }),
  social: {
    google: ({ colors }: Theme) =>
      css({
        border: `1px solid ${colors.primary[700]}`,
      }),
    facebook: ({ colors }: Theme) =>
      css({
        border: `1px solid ${colors.primary[800]}`,
      }),
    instagram: ({ colors, borderRadius }: Theme) =>
      css({
        position: 'relative',
        border: 'none',
        ':before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          borderRadius: borderRadius.sm,
          padding: '1px',
          background: 'linear-gradient(45deg,#A908C7 0%,#FE8D43 100%)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        },
      }),
    twitter: ({ colors }: Theme) =>
      css({
        border: `1px solid ${colors.primary[900]}`,
      }),
  },
};
