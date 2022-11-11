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
  }
  export interface Theme {
    container: string;
    colors: Colors;
    background: Model<string>;
    spacing: Model<string>;
    fontFamily: Model<string>;
    fontSize: Model<string>;
    borderRadius: Model<string>;
    boxShadow: Model<string>;
    height: Model<string>;
  }
}
