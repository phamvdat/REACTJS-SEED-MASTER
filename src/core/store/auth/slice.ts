import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'core/store';
import { User } from 'core/types/auth';

interface AuthState {
  user: User | null;
}

const initialState = {
  user: null,
} as AuthState;

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state: AuthState, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const selectUser = (state: RootState) => state.auth.user;
export const { login } = auth.actions;

export default auth.reducer;
