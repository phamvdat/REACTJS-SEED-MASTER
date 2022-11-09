import { jwtHelper } from 'core/helpers/jwt';
import axiosClient from 'core/services/api';
import { User } from 'core/types/auth';
import { IDataResponse } from 'core/types/common';
import { ILoginPayload } from './types';

export const authServive = {
  isAuthenticated(): boolean {
    return Boolean(jwtHelper.getToken());
    // return true;
  },

  logout() {
    jwtHelper.destroyToken();
    jwtHelper.destroyRefreshToken();
  },

  login(payload: ILoginPayload) {
    const result = axiosClient.post<IDataResponse<User>>('/api/login', payload);
    return result;
  },

  getProfile() {
    const result = axiosClient.get<IDataResponse<User>>('/api/me');
    return result;
  },
};
