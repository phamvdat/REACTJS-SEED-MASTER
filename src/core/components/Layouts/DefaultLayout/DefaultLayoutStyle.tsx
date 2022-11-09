import { css, Theme } from '@emotion/react';

export const defaultLayoutStyle = {
  container: ({ background }: Theme) =>
    css({
      backgroundColor: background.dark,
      ':after': {
        content: '""',
        clear: 'both',
      },

      position: 'relative',
      // overflow: 'hidden',
    }),
  header: ({ height, colors }: Theme) =>
    css({
      zIndex: 9999,
      position: 'sticky',
      top: 0,
      height: height.header,
      backgroundColor: colors.primary[100],
    }),
  content: css({
    height: '100%',
  }),
  wrapper: ({ spacing }: Theme) =>
    css({
      height: '100%',
      margin: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: `0 ${spacing[8]}`,
    }),
  logowrapper: css({
    display: 'flex',
    alignItems: 'center',
  }),
  logo: css({
    width: '36px',
    height: '36px',
  }),
  heading: ({ spacing, colors, fontSize }: Theme) =>
    css({
      fontSize: fontSize[4],
      marginLeft: spacing[3],
      color: colors.primary[400],
      fontWeight: '700',
      lineHeight: '24px',
    }),
  signInBtn: css({
    marginRight: '18px',
  }),
  banner: css({
    width: '100%',
    verticalAlign: 'middle',
    display: 'inline-block',
  }),

  outletComponent: ({ colors, borderRadius }: Theme) =>
    css({
      display: 'flex',
      justifyContent: 'center',
      width: 1380,
      minHeight: 641,
      position: 'relative',
      top: '-60px',
      left: 0,
      right: 0,
      bottom: 0,
      margin: 'auto',
    }),
};
