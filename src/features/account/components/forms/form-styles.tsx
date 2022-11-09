import { css, Theme } from '@emotion/react';
import { colors } from 'react-select/dist/declarations/src/theme';
// import { media } from 'core/styles/theme-helper';

export const formStyle = {
  self: ({ colors }: Theme) =>
    css({
      width: '1150px',
      height: '100%',
    }),
  fieldContainer: ({ spacing, colors }: Theme) =>
    css({
      marginBottom: spacing[3],
      h6: {
        marginTop: 4,
        fontWeight: 500,
        fontSize: '12px',
        lineHeight: '15px',
        color: colors.primary[100],
      },
    }),
  labelInput: ({ colors, spacing }: Theme) =>
    css({
      marginBottom: spacing[2],
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '18px',
      color: colors.primary[400],
      span: {
        color: colors.primary[100],
      },
    }),
  containInput: ({ borderRadius, colors, spacing }: Theme) =>
    css({
      padding: `${spacing[4]} ${spacing[5]}`,
      marginTop: spacing[2],
      svg: {
        color: colors.primary[400],
        marginRight: 6,
      },
      borderRadius: borderRadius.sm,
      width: '450px',
      background: colors.primary[200],
      display: 'flex',
      alignItems: 'center',
      input: {
        color: colors.primary[400],
        background: colors.primary[200],
        border: 'none',
        outline: 'none',
        padding: `0 ${spacing[2]}`,
        width: '100%',
      },
    }),
  containInputSuccess: ({ colors }: Theme) =>
    css({
      border: `1px solid ${colors.secondary[100]}`,
    }),
  containInputError: ({ colors }: Theme) =>
    css({
      border: `1px solid ${colors.primary[100]}`,
      input: {
        color: colors.primary[100],
      },
      svg: {
        color: colors.primary[100],
      },
    }),
  passFieldContainer: ({ spacing }: Theme) =>
    css({
      width: '450px',
      display: 'flex',
      justifyContent: 'space-between',
    }),
  passField: ({ spacing }: Theme) =>
    css({
      width: 217,
    }),
  contentTerm: ({ colors, spacing, fontSize }: Theme) =>
    css({
      display: 'flex',
      alignItems: 'center',
      color: colors.primary[400],
      margin: `${spacing[5]} 0 ${spacing[8]}`,
      label: {
        marginLeft: spacing[3],
        fontSize: fontSize[1],
        fontWeight: 500,
      },
    }),
};
