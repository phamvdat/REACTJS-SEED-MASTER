import { css, Theme } from '@emotion/react';
import BgMenu from '../../../../../../assets/images/imgs/Bg_menu.png';
export const SidebarStyle = {
  wrapper: ({ borderRadius, colors, spacing }: Theme) =>
    css({
      marginRight: spacing[5],
      transition: 'all 0.15s',
      maxWidth: '220px',
      width: '220px',
      height: '640px',
      borderRadius: borderRadius.sm,
      background: `url(${BgMenu})`,
      backgroundColor: colors.secondary[700],
      position: 'sticky',
      top: 60,
      left: 32,
    }),
  btn: ({ fontSize, colors }: Theme) =>
    css({
      height: 60,
      display: 'flex',
      justifyContent: 'flex-end',
      svg: {
        color: colors.secondary[500],
        marginTop: '30px',
        marginRight: '16px',
        cursor: 'pointer',
      },
    }),
  hidenItem: css({
    opacity: 0,
    // display: 'none',
    // visibility: 'hidden',
    // transform: 'scale(0)',
  }),
  minimunSidebar: css({
    // width: 48,
    width: 'auto',
    display: 'absolute',
  }),

  itemActive: ({ colors }: Theme) =>
    css({
      color: colors.primary[400],
      svg: {
        marginLeft: 11,
      },
      ':before': {
        content: '""',
        width: 5,
        height: 30,
        background: colors.primary[400],
      },
    }),
  item: ({ fontSize, colors, spacing, fontFamily }: Theme) =>
    css({
      cursor: 'pointer',
      marginBottom: `${spacing[4]}`,
      display: 'flex',
      alignItems: 'center',
      height: 30,
      color: colors.secondary[500],
      svg: {
        marginLeft: 16,
        ':last-child': {
          position: 'absolute',
          right: 20,
        },
      },
      h3: {
        marginLeft: 12,
        fontSize: fontSize[1],
        fontFamily: fontFamily.primary,
        fontWeight: '500',
        lineHeight: '18px',
        transition: 'all 0.2s',
      },
      select: {
        marginLeft: 12,
        fontSize: fontSize[1],
        fontFamily: fontFamily.primary,
        fontWeight: '500',
        lineHeight: '18px',
        WebkitAppearance: 'none',
        background: 'none',
        border: 'none',
        color: colors.primary[400],
      },
    }),
  dropDownList: ({ colors, fontSize, fontFamily, spacing }: Theme) =>
    css({
      borderLeft: `1px solid ${colors.primary[400]}`,
      marginLeft: 24,
      li: {
        marginBottom: `${spacing[3]}`,
      },
      a: {
        color: colors.secondary[500],
      },
      h3: {
        marginLeft: 20,
        fontSize: fontSize[1],
        fontFamily: fontFamily.primary,
        fontWeight: '500',
        lineHeight: '18px',
      },
    }),
  dropDownItemActive: ({ colors }: Theme) =>
    css({
      borderLeft: `3px solid ${colors.primary[400]}`,
    }),
  downContent: ({ colors }: Theme) =>
    css({
      borderTop: `1px solid ${colors.secondary[500]}`,
      margin: '0 16px',
      paddingTop: '16px',
      svg: {
        ':first-of-type': {
          margin: 0,
        },
      },
    }),
  dropDownListLanguage: ({ colors, spacing, fontSize, fontFamily }: Theme) =>
    css({
      marginLeft: 24,
      li: {
        marginTop: `${spacing[5]}`,
        marginBottom: `${spacing[6]}`,
      },
      h3: {
        color: colors.secondary[500],
        marginLeft: 3,
        fontSize: fontSize[1],
        fontFamily: fontFamily.primary,
        fontWeight: '500',
        lineHeight: '18px',
      },
    }),
};

[
  {
    label: 'Home',
    path: '/',
    icon: 'home-solid',
    children: [
      {
        label: 'Home',
        path: '/',
      },
    ],
  },
];
