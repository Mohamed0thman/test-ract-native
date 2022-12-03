import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '../../types/user';

export type InitialState = {
  loading: boolean;
  user: User | null;
  error: string;
  isUser: boolean;
};

const initialState: InitialState = {
  loading: false,
  user: null,
  isUser: false,
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state: InitialState, action: PayloadAction<User>) => {
      state.isUser = true;
      state.user = action.payload;
      console.log('auth');
    },
    logout: (state: any) => {
      state.isUser = false;
      state.user = null;
      console.log('out');
    },
  },
});
export default userSlice.reducer;
export const {login, logout} = userSlice.actions;
