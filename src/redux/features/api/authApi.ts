import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://localhost:8080/api';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/users` }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query(data) {
        return {
          url: '/login',
          method: 'POST',
          body: data,
        };
      },
      async onQueryStarted(data, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          localStorage.setItem('token', (await queryFulfilled).data?.token);
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
