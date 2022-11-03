export const jwtHelper = {
  getToken(): string {
    return window.localStorage['jt'];
  },

  saveToken(token: string): void {
    window.localStorage['jt'] = token;
  },

  getRefreshToken(): string {
    return window.localStorage['rft'];
  },

  saveRefreshToken(token: string): void {
    window.localStorage.removeItem('rft');
    window.localStorage['rft'] = token;
  },

  destroyToken(): void {
    window.localStorage.removeItem('jt');
  },

  destroyRefreshToken(): void {
    window.localStorage.removeItem('rft');
  },
};
