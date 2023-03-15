import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { authApi } from './features/api/authApi';
import { matchesApi } from './features/api/matchesApi';
import { userApi } from './features/api/userApi';
import { usersApi } from './features/api/usersApi';
import userReducer from './features/user/userSlice';
import usersReducer from './features/user/usersSlice';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [matchesApi.reducerPath]: matchesApi.reducer,
    userState: userReducer,
    usersState: usersReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      authApi.middleware,
      userApi.middleware,
      usersApi.middleware,
      matchesApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
