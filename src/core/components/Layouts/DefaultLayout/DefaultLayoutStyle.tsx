import { css, Theme } from '@emotion/react';

export const defaultLayoutStyle = {
  container: css({
    backgroundColor: 'var(--background-secondary)',
    ':after': {
      content: '""',
      clear: 'both',
    },
  }),

  banner: css({
    width: '100%',
    verticalAlign: 'middle',
    display: 'inline-block',
  }),

  wrapperContent: css({
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
  Outlet: css({
    flexGrow: 1,
  }),
};
