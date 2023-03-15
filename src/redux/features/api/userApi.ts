import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
import { setUser } from '../user/userSlice';
import { IUser } from './types';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/users' }),
  endpoints: (builder) => ({
    getMe: builder.query<IUser, null>({
      query() {
        return {
          url: '/me',
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        };
      },
      transformResponse: (result: { user: IUser }) => result.user,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          if (result.data) {
            dispatch(setUser(result.data));
          }
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});
