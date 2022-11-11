import { css, Theme } from '@emotion/react';
export const socialFormStyle = {
  self: ({ spacing }: Theme) =>
    css({
      paddingTop: 26,
      li: {
        marginBottom: spacing[8],
        ':last-child': {
          marginBottom: 0,
        },
      },
    }),
};
