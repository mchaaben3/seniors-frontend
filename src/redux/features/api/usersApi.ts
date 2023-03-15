import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://localhost:8080/api';
export const usersApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/users` }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: '/',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }),
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
