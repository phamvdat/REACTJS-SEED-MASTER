import { css, Theme } from '@emotion/react';

export const alertCss = {
  self: ({ spacing, borderRadius, fontSize }: Theme) =>
    css({
      padding: `${spacing?.['3']} ${spacing?.['5']}`,
      borderRadius: borderRadius?.['sm'],
      span: {
        fontSize: fontSize?.['md'],
      },
    }),

  success: ({ colors }: Theme) =>
    css({
      backgroundColor: colors?.green?.['100'],
      span: {
        color: colors?.green?.['800'],
      },
    }),

  warning: ({ colors }: Theme) =>
    css({
      backgroundColor: colors?.orange?.['50'],
      span: {
        color: colors?.orange?.['800'],
      },
    }),

  error: ({ colors }: Theme) =>
    css({
      backgroundColor: colors?.red?.['100'],
      span: {
        color: colors?.red?.['800'],
      },
    }),

  infor: ({ colors }: Theme) =>
    css({
      backgroundColor: colors?.blue?.['100'],
      span: {
        color: colors?.blue?.['800'],
      },
    }),
};
