import { css, Theme } from '@emotion/react';

export const buttonStyle = {
  self: ({ borderRadius, fontSize }: Theme) =>
    css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: borderRadius?.sm,
      fontWeight: 600,
      fontSize: fontSize?.[2],
      minWidth: '78px',
      boxShadow: '0px 0px 10px rgba(255, 56, 56, 0.2)',
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
        lineHeight: '18px',
        padding: `${spacing?.[4]} ${spacing?.[5]}`,
      }),
    md: ({ spacing }: Theme) =>
      css({
        lineHeight: '28px',
        padding: `${spacing?.[4]} ${spacing?.[6]}`,
      }),
  },
  variant: {
    fill: ({ colors }: Theme) =>
      css({
        border: 'none',
        backgroundColor: colors?.primary?.[100],
        color: 'var(--background-primary)',
        ':hover': {
          background: 'var(--background-primary)',
          border: `1px solid ${colors?.primary?.[100]}`,
          color: colors.primary?.[100],
        },
      }),
    outlined: ({ colors }: Theme) =>
      css({
        color: colors?.primary?.[100],
        backgroundColor: 'var(--background-primary)',
        border: `1px solid ${colors?.primary?.[100]}`,
        ':hover': {
          background: colors?.primary?.[100],
          color: 'var(--background-primary)',
        },
      }),
  },
};
