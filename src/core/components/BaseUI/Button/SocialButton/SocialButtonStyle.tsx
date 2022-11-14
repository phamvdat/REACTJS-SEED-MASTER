import { css, Theme } from '@emotion/react';

export const SocialButtonStyle = {
  self: ({ borderRadius, fontSize, spacing }: Theme) =>
    css({
      cursor: 'pointer',
      width: 450,
      minHeight: 44,
      textAlign: 'left',
      lineHeight: '20px',
      backgroundColor: 'var(--background-third)',
      borderRadius: borderRadius?.sm,
      svg: {
        float: 'left',
        margin: `0 ${spacing[5]}`,
      },
      color: 'var(--text-primary)',
      fontSize: fontSize?.[1],
      fontWeight: 500,
    }),
  social: {
    google: ({ colors }: Theme) =>
      css({
        border: `1px solid ${colors?.primary?.[700]}`,
      }),
    facebook: ({ colors }: Theme) =>
      css({
        border: `1px solid ${colors?.primary?.[800]}`,
      }),
    instagram: ({ borderRadius }: Theme) =>
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
        border: `1px solid ${colors?.primary?.[900]}`,
      }),
  },
};
