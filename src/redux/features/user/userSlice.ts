import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../api/types';

interface IUserState {
  user: IUser | null;
}

const initialState: IUserState = {
  user: {} as IUser,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
