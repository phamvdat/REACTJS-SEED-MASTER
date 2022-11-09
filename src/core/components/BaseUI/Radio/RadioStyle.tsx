import { css, Theme } from '@emotion/react';

const sizes = {
  sm: 16,
  md: 20,
};

export const radioMode = ({ colors, background }: Theme) => css`
  body[data-theme='light'] label[role='radio'] {
    --background-color: ${background?.light};
    --border-color: ${colors?.neutral[900]};
    --background-hover-focus: ${colors?.yellow[50]};
  }

  body[data-theme='dark'] label[role='radio'] {
    --background-color: ${colors?.neutral[700]};
    --border-color: ${colors?.neutral[50]};
    --background-hover-focus: ${colors?.yellow[500]};
  }
`;

export const radioStyle = {
  self: ({ fontSize, spacing }: Theme) =>
    css({
      display: 'inline-flex',
      alignItems: 'center',
      userSelect: 'none',
      position: 'relative',
      cursor: 'pointer',
      fontSize: fontSize?.['md'],
      outline: 1,

      '&:not(:last-of-type)': {
        marginRight: spacing?.[11],
      },

      '&[aria-disabled="true"]': {
        opacity: 0.5,
        pointerEvents: 'none',
        cursor: 'default',
      },
    }),

  input: ({ colors }: Theme) =>
    css({
      '&:checked ~ span:nth-of-type(1)': {
        borderColor: colors?.primary[100],
        '::after': {
          opacity: 1,
          transition: 'all 0.15s ease-in',
        },
      },
    }),

  checkmark: ({ colors, spacing }: Theme) =>
    css({
      position: 'relative',
      border: '1px solid var(--border-color)',
      color: colors?.yellow[50],
      borderRadius: '50%',
      marginRight: spacing?.[5],
      backgroundColor: 'var(--background-color)',
      '&::after': {
        content: `''`,
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '0px',
        height: '0px',
        transform: 'translate(-50%, -50%)',
        borderRadius: '50%',
        backgroundColor: colors?.primary[100],
        transition: 'all 0.15s ease-in-out',
        opacity: 0,
      },
      '&:focus': {
        borderColor: colors?.primary[100],
        outline: 'none',
        boxShadow: '0 0 1px 7px rgba(250, 204, 21, 0.3)',
      },
      '&:hover': {
        borderColor: colors?.primary[100],
        backgroundColor: 'var(--background-hover-focus)',
      },
      '&:active': {
        animation: 'ripple 0.3s linear forwards',
      },
    }),

  label: css({
    color: 'var(--text-primary[100])',
  }),

  sm: css({
    height: `${sizes.sm}px`,
    width: `${sizes.sm}px`,
    '&::after': {
      height: `${sizes.sm - 10}px`,
      width: `${sizes.sm - 10}px`,
    },
  }),

  md: css({
    height: `${sizes.md}px`,
    width: `${sizes.md}px`,
    '&::after': {
      height: `${sizes.md - 12}px`,
      width: `${sizes.md - 12}px`,
    },
  }),
};
