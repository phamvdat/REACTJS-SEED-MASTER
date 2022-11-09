import '@emotion/react';

declare module '@emotion/react' {
  interface Model<T> {
    [key: string]: T;
  }
  interface Colors {
    primary: Model<string>;
    secondary: Model<string>;
    gadient: string;
    text: Model<string>;
    yellow: Model<string>;
    red: Model<string>;
    orange: Model<string>;
    blue: Model<string>;
    green: Model<string>;
    neutral: Model<string>;
  }
  export interface Theme {
    container: string;
    colors: Colors;
    background: Model<string>;
    spacing: Model<string>;
    fontFamily: Model<string>;
    fontSize: Model<string>;
    zIndex: Model<number>;
    borderRadius: Model<string>;
    boxShadow: Model<string>;
    height: Model<string>;
  }
}
