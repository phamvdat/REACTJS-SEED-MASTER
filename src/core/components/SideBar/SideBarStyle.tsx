import { css, Theme } from '@emotion/react';
import BgMenu from '../../../assets/images/imgs/Bg_menu.png';
export const SidebarStyle = {
  wrapper: ({ borderRadius, boxShadow, spacing }: Theme) =>
    css({
      marginRight: spacing?.[5],
      transition: 'all 0.15s',
      width: '220px',
      height: '640px',
      borderRadius: borderRadius?.sm,
      background: `url(${BgMenu})`,
      backgroundPosition: 'bottom right',
      backgroundRepeat: 'no-repeat',
      backgroundColor: 'var(--background-primary)',
      boxShadow: boxShadow?.primary,
      position: 'sticky',
      top: 80,
    }),
  btn: css({
    height: 60,
    display: 'flex',
    justifyContent: 'flex-end',
    svg: {
      color: 'var(--text-secondary)',
      marginTop: '30px',
      marginRight: '16px',
      cursor: 'pointer',
    },
  }),
  hidenItem: css({
    opacity: 0,
  }),
  minimunSidebar: css({
    width: 48,
  }),

  itemActive: css({
    color: 'var(--text-primary)',
    span: {
      marginLeft: 11,
    },
    ':before': {
      content: '""',
      width: 5,
      height: 30,
      backgroundColor: 'var(--text-primary)',
    },
  }),
  item: ({ fontSize, spacing, fontFamily }: Theme) =>
    css({
      cursor: 'pointer',
      marginBottom: `${spacing?.[4]}`,
      display: 'inline-flex',
      alignItems: 'center',
      height: 30,
      color: 'var(--text-secondary)',
      ':hover': {
        color: 'var(--text-primary)',
      },
      span: {
        marginLeft: 16,
        ':last-child': {
          position: 'absolute',
          right: 20,
          marginTop: '-4px',
        },
      },
      h3: {
        marginLeft: 12,
        fontSize: fontSize?.[1],
        fontFamily: fontFamily?.primary,
        fontWeight: '500',
        lineHeight: '18px',
        transition: 'all 0.2s',
      },
    }),
  dropDownList: ({ colors, fontSize, fontFamily, spacing }: Theme) =>
    css({
      borderLeft: `1px solid ${colors?.primary?.[400]}`,
      marginLeft: 24,
      li: {
        marginBottom: `${spacing?.[3]}`,
      },
      a: {
        color: 'var(--text-secondary)',
      },
      h3: {
        marginLeft: 20,
        fontSize: fontSize[1],
        fontFamily: fontFamily?.primary,
        fontWeight: '500',
        lineHeight: '18px',
      },
    }),
  dropDownItemActive: ({ colors }: Theme) =>
    css({
      borderLeft: `3px solid ${colors?.primary?.[400]}`,
    }),
  downContent: ({ colors }: Theme) =>
    css({
      borderTop: `1px solid ${colors?.secondary?.[500]}`,
      margin: '0 14px',
      paddingTop: '16px',
      span: {
        ':first-of-type': {
          margin: 0,
        },
      },
    }),
  dropDownListLanguage: ({ spacing, fontSize, fontFamily }: Theme) =>
    css({
      marginLeft: 30,
      li: {
        cursor: 'pointer',
        marginBottom: `${spacing?.[5]}`,
        ':last-child': {
          marginBottom: 0,
        },
        ':hover': {
          color: 'var(--text-primary)',
        },
        color: 'var(--text-secondary)',
      },
      h3: {
        marginLeft: 3,
        fontSize: fontSize[1],
        fontFamily: fontFamily?.primary,
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
