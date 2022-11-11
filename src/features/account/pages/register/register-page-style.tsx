import { css, Theme } from '@emotion/react';
import BgLogin from 'assets/images/imgs/ic_bg.png';
export const registerPageStyle = {
  container: ({ colors, spacing, fontFamily, borderRadius }: Theme) =>
    css({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      background: `url(${BgLogin})`,
      backgroundPosition: 'bottom right',
      backgroundRepeat: 'no-repeat',
      backgroundColor: 'var(--background-primary)',
      boxShadow: `0px 0px 10px ${colors?.primary?.[600]}`,
      borderRadius: borderRadius?.sm,
      minHeight: '100%',
      flexGrow: 1,
      paddingTop: spacing?.[11],
      fontFamily: fontFamily?.[1],
      h2: {
        width: '431px',
        fontSize: '32px',
        margin: 'auto',
        fontWeight: 600,
        lineHeight: '38px',
        color: 'var(--text-primary)',
      },
      h5: {
        width: '320px',
        fontSize: '14px',
        margin: 'auto',
        marginBottom: '32px',
        fontWeight: 500,
        lineHeight: '18px',
        color: 'var(--text-secondary)',

        textAlign: 'center',
      },
    }),
  content: ({ spacing }: Theme) =>
    css({
      display: 'flex',
      justifyContent: 'center',
      padding: `${spacing?.[2]} ${spacing?.[14]} 0`,
    }),
  subContent: css({
    width: 450,
    marginRight: 30,
    ':last-child': {
      marginRight: 0,
    },
  }),
  footerForm: ({ colors, fontSize, spacing }: Theme) =>
    css({
      padding: '0 110px 0',
      marginTop: spacing?.[7],
      marginBottom: spacing?.[8],
      display: 'flex',
      justifyContent: 'space-between',

      h6: {
        fontSize: fontSize?.[0],
        color: colors?.text?.[500],
        fontWeight: 500,
        span: {
          fontWeight: 700,
          color: colors?.text[500],
        },
        ':nth-child(2)': {
          fontSize: fontSize?.[1],
          color: colors?.primary?.[400],
        },
      },
      a: {
        color: colors?.primary?.[400],
        fontWeight: 700,
      },
    }),
};
