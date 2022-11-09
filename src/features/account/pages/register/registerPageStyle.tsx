import { css, Theme } from '@emotion/react';
import BgLogin from '../../../../assets/images/imgs/ic_bg.png';
export const registerPageStyle = {
  container: ({ colors, spacing, fontFamily, borderRadius }: Theme) =>
    css({
      background: `url(${BgLogin})`,
      backgroundColor: colors?.secondary[700],
      boxShadow: `0px 0px 10px ${colors?.primary[600]}`,
      borderRadius: borderRadius?.sm,
      backgroundPosition: 'bottom right',
      backgroundRepeat: 'no-repeat',
      minHeight: '100%',
      flexGrow: 1,
      paddingTop: spacing[11],
      fontFamily: fontFamily[1],
      h2: {
        width: '431px',
        fontSize: '32px',
        margin: 'auto',
        fontWeight: 600,
        lineHeight: '38px',
        color: colors?.primary[400],
      },
      h5: {
        width: '320px',
        fontSize: '14px',
        margin: 'auto',
        fontWeight: 500,
        lineHeight: '18px',
        color: colors?.text[500],
        textAlign: 'center',
      },
    }),
  content: ({ spacing }: Theme) =>
    css({
      display: 'flex',
      justifyContent: 'center',
      padding: `${spacing[2]} ${spacing[14]} 0`,
    }),
  subContent: css({
    width: 450,
    height: 430,
    marginRight: 30,
    ':last-child': {
      marginRight: 0,
    },
  }),
};
