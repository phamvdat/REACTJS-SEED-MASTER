import { css, Theme } from '@emotion/react';

export const HomeStyle = {
  self: ({ boxShadow, borderRadius }: Theme) =>
    css({
      backgroundColor: 'var(--background-primary)',
      minWidth: 806,
      borderRadius: borderRadius?.sm,
      boxShadow: boxShadow?.primary,
    }),
  navItemActive: ({ colors, borderRadius }: Theme) =>
    css({
      position: 'relative',
      color: `${colors?.primary?.[100]} !important`,
      fontWeight: '700 !important',
      ':before': {
        content: '""',
        left: 0,
        right: 0,
        height: '5px',
        borderRadius: borderRadius.sm,
        background: colors?.primary?.[100],
        position: 'absolute',
        bottom: -2,
      },
    }),
  navBar: ({ colors, fontSize, spacing }: Theme) =>
    css({
      height: 59,
      borderBottom: '2px solid var(--divider-color)',
      display: 'flex',
      ul: {
        height: '100%',
        flexGrow: 1,
        display: 'inline-flex',
      },
      li: {
        height: '100%',
        flex: '1 1 0px',
        margin: '0 10px',
      },
      a: {
        height: '100%',
        width: '100%',
        textAlign: 'center',
        paddingTop: spacing?.[7],
        color: 'var(--text-third)',
        fontSize: fontSize?.[1],
        fontWeight: 500,
        ':hover': {
          color: colors?.primary?.[100],
        },
      },
    }),

  wrapperFilter: ({ colors }: Theme) =>
    css({
      height: '100%',
      float: 'right',
      width: '160px',
      display: 'inline-flex',
      justifyContent: 'space-around',
      alignItems: 'end',
      svg: {
        cursor: 'pointer',
        color: 'var(--text-primary)',
        marginBottom: '16px',
        ':hover': {
          color: colors?.primary?.[100],
        },
        ':nth-child(2)': {
          marginRight: '20px',
          ':after': {
            content: '""',
            width: 1,
            height: 20,
            background: colors?.secondary?.[650],
            position: 'absolute',
          },
        },
      },
    }),

  wrapperListItem: css({}),
  contentItem: ({ colors, fontSize, spacing }: Theme) =>
    css({
      margin: `${spacing?.[4]} ${spacing?.[6]} 0`,
      display: 'flex',
      flexWrap: 'nowrap',
      borderBottom: '1px solid var(--divider-color)',
      div: {
        ':first-child': {
          marginRight: spacing?.[5],
          minHeight: 100,
          textAlign: 'center',
          button: {
            margin: `${spacing?.[2]} 0 ${spacing?.[3]}`,
          },
          h6: {
            fontSize: fontSize?.[0],
            fontWeight: 500,
            color: colors?.primary?.[450],
          },
        },
        ':last-child': {
          flexGrow: 1,
          h2: {
            maxWidth: 'fit-content',
            display: 'inline-block',
            color: colors?.primary?.[400],
            fontSize: fontSize?.[2],
            fontWeight: 700,
            marginBottom: spacing?.[2],
          },
          p: {
            maxWidth: 'fit-content',
            display: 'inline-block',
            color: colors?.primary?.[450],
            fontSize: fontSize?.[1],
            fontWeight: 500,
            lineHeight: '18px',
          },
        },
      },
    }),
  wrapperInteract: ({ colors, fontSize, spacing }: Theme) =>
    css({
      display: 'flex',
      justifyContent: 'flex-end',
      marginBottom: spacing?.[2],
      span: {
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        color: 'var(--text-secondary)',
        fontSize: fontSize?.[0],
        fontWeight: 500,
        ':first-child': {
          marginRight: spacing?.[4],
        },
      },
      svg: {
        marginRight: spacing?.[2],
        marginBottom: spacing?.[2],
      },
    }),
};
