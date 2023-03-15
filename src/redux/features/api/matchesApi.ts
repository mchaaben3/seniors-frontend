import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://localhost:8080/api';

export const matchesApi = createApi({
  reducerPath: 'matchesApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/like` }),
  endpoints: (builder) => ({
    CreateLike: builder.mutation({
      query(data) {
        return {
          url: '/',
          method: 'POST',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          body: data,
        };
      },
      async onQueryStarted(data, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const { useCreateLikeMutation } = matchesApi;
