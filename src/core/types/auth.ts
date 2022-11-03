import { Gender } from 'core/enums/common';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  accessToken: string;
  refreshToken: string;
  avatarUrl?: string;
  email: string;
  phoneNumber?: string;
  gender?: `${Gender}`;
  address?: string;
}
