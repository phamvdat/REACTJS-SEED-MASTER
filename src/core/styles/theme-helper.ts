import { ThemeType } from 'core/types/base-ui';

export const themeHelper = {
  isDarkMode(): boolean {
    return Boolean(this.getTheme() === 'dark');
  },

  getTheme(): ThemeType {
    if (window.localStorage['mode'] === undefined) {
      window.localStorage['mode'] = 'light';
    }
    return window.localStorage['mode'];
  },

  setTheme(mode: ThemeType): void {
    window.localStorage['mode'] = mode;
    document.body.setAttribute('data-theme', mode);
  },
};

const breakpoints = {
  sm: 567,
  md: 768,
  lg: 922,
  xl: 1200,
};

export const media = (n: keyof typeof breakpoints) => {
  const bpArray = Object.keys(breakpoints).map(key => [
    key,
    breakpoints[key as keyof typeof breakpoints],
  ]);

  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (n === name) {
      return [...acc, `@media (max-width: ${size}px)`];
    }
    return acc;
  }, []);

  return result;
};
