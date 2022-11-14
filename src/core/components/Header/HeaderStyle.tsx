import { css, Theme } from '@emotion/react';

export const HeaderStyle = {
  header: ({ height, colors }: Theme) =>
    css({
      zIndex: 9999,
      position: 'sticky',
      top: 0,
      height: height?.header,
      backgroundColor: colors?.primary?.[100],
    }),
  wrapper: ({ spacing }: Theme) =>
    css({
      width: '1440px',
      height: '100%',
      margin: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: `0 ${spacing?.[8]}`,
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
      fontSize: fontSize?.[4],
      marginLeft: spacing?.[3],
      color: colors?.primary?.[400],
      fontWeight: '700',
      lineHeight: '24px',
    }),
  signInBtn: css({
    marginRight: '18px',
    border: '1px solid var(--background-primary)',
  }),
  loginBtn: ({ colors }: Theme) =>
    css({
      ':hover': {
        border: '1px solid var(--background-primary)',
      },
    }),
};
