import { css, Theme } from '@emotion/react';
// import { media } from 'core/styles/theme-helper';

export const registerFormStyle = {
  self: css({}),
  textError: ({ colors }: Theme) =>
    css({
      marginTop: 4,
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: '15px',
      color: colors?.primary?.[100],
    }),
  fieldContainer: ({ spacing }: Theme) =>
    css({
      marginBottom: spacing?.[3],
    }),
  labelInput: ({ colors, spacing }: Theme) =>
    css({
      marginBottom: spacing?.[2],
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '18px',
      color: 'var(--text-primary)',
      span: {
        color: colors?.primary?.[100],
      },
    }),
  containInput: ({ borderRadius, colors, spacing }: Theme) =>
    css({
      padding: `0 ${spacing?.[5]}`,
      marginTop: spacing?.[2],
      position: 'relative',
      minHeight: '44px',
      svg: {
        color: 'var(--text-primary)',
      },
      span: {
        margin: `${spacing?.[4]} 0`,
        marginRight: spacing?.[8],
        ':after': {
          content: '""',
          width: 1,
          height: 20,
          backgroundColor: '#767676',
          position: 'absolute',
          left: '52px',
          top: '10px',
        },
      },
      borderRadius: borderRadius?.sm,
      backgroundColor: 'var(--background-third)',
      display: 'flex',
      alignItems: 'center',
      input: {
        color: 'var(--text-primary)',
        backgroundColor: 'inherit',
        border: 'none',
        outline: 'none',
        padding: `${spacing?.[4]} ${spacing?.[2]}`,
        flexGrow: 1,
      },
    }),
  containInputSuccess: ({ colors }: Theme) =>
    css({
      border: `1px solid ${colors?.secondary?.[100]}`,
    }),
  containInputError: ({ colors }: Theme) =>
    css({
      border: `1px solid ${colors?.primary?.[100]}`,
      input: {
        color: colors?.primary?.[100],
      },
      svg: {
        color: colors?.primary?.[100],
      },
    }),
  passFieldContainer: css({
    width: '450px',
    display: 'flex',
    justifyContent: 'space-between',
  }),
  passField: ({ colors }: Theme) =>
    css({
      width: 217,
      input: {
        width: '100%',
      },
    }),
  contentTerm: ({ colors, spacing }: Theme) =>
    css({
      color: colors?.primary?.[400],
      margin: `${spacing?.[5]} 0 ${spacing?.[8]}`,
      input: {
        border: `1px solid ${colors?.primary?.[100]} !important`,
        backgroundColor: `${colors?.primary?.[100]} !important`,
      },
    }),
  forgotPw: ({ colors, fontSize }: Theme) =>
    css({
      width: '450px',
      display: 'flex',
      justifyContent: 'flex-end',
      marginBottom: '74px',
      a: {
        color: colors?.primary?.[400],
        fontWeight: 500,
        fontSize: fontSize?.[1],
        textDecoration: 'underline',
        lineHeight: '24px',
      },
    }),
  btnRegister: ({ colors }: Theme) =>
    css({
      width: '450px',
      maxWidth: '450px',
      background: colors.gadient,
    }),
};
