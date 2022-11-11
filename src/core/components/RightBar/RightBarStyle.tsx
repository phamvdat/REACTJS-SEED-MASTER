import { css, Theme } from '@emotion/react';
export const RightbarStyle = {
  self: ({ borderRadius, colors, spacing, boxShadow }: Theme) =>
    css({
      width: '326px',
      height: '582px',
      borderRadius: borderRadius?.sm,
      backgroundColor: 'var(--background-primary)',
      boxShadow: boxShadow?.primary,
      color: colors?.primary?.[400],
      marginLeft: spacing?.[5],
      position: 'sticky',
      top: 80,
    }),
  header: ({ colors }: Theme) =>
    css({
      width: '59px',
      borderBottom: `1px solid ${colors?.secondary?.[650]}`,
    }),
};
