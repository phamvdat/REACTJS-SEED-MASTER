import { css, Theme } from '@emotion/react';

export const TradingButtonStyle = {
  self: ({ fontSize, colors, borderRadius }: Theme) =>
    css({
      transition: 'all 0.4s',
      height: '30px',
      width: '100px',
      fontWeight: '600',
      fontSize: fontSize?.[1],
      lineHeight: '18px',
      border: 'none',
      borderRadius: borderRadius?.sm,
      ':disabled': {
        opacity: 0.2,
      },
    }),
  color: {
    white: ({ colors }: Theme) =>
      css({
        color: colors?.primary?.[400],
        backgroundColor: colors?.secondary?.[700],
      }),
    black: ({ colors }: Theme) =>
      css({
        color: colors?.primary?.[100],
      }),
    red: ({ colors }: Theme) =>
      css({
        backgroundColor: colors?.primary?.[100],
        '&:hover': {
          cursor: 'pointer',
          backgroundColor: colors?.primary?.[400],
          color: colors?.primary?.[100],
          boxShadow: '0px 0px 10px rgba(255, 56, 56, 0.2)',
          border: `1px solid ${colors?.primary?.[100]}`,
        },
      }),
    blue: ({ colors }: Theme) =>
      css({
        backgroundColor: colors?.secondary?.[100],
        '&:hover': {
          cursor: 'pointer',
          backgroundColor: colors?.primary?.[400],
          color: colors?.secondary?.[100],
          boxShadow: '0px 0px 10px rgba(255, 56, 56, 0.2)',
          border: `1px solid ${colors?.secondary?.[100]}`,
        },
      }),
    yellow: ({ colors }: Theme) =>
      css({
        backgroundColor: colors?.secondary?.[300],
        '&:hover': {
          cursor: 'pointer',
          backgroundColor: colors?.primary?.[400],
          color: colors?.secondary?.[300],
          boxShadow: '0px 0px 10px rgba(255, 56, 56, 0.2)',
          border: `1px solid ${colors?.secondary?.[300]}`,
        },
      }),
    green: ({ colors }: Theme) =>
      css({
        backgroundColor: colors?.primary?.[200],
        '&:hover': {
          cursor: 'pointer',
          backgroundColor: colors?.primary?.[400],
          color: colors?.primary?.[200],
          boxShadow: '0px 0px 10px rgba(255, 56, 56, 0.2)',
          border: `1px solid ${colors?.primary?.[200]}`,
        },
      }),
  },
};
