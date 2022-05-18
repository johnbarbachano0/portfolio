import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const headers = {
  "Content-Type": "application/json",
};

export const guestApi = createApi({
  reducerPath: "guestApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SERVER,
  }),
  tagTypes: ["Guest"],
  endpoints: (builder) => ({
    postGuest: builder.mutation({
      query: (data) => ({
        url: `/guest`,
        method: "post",
        headers,
        body: data,
      }),
      invalidatesTags: ["Guest"],
    }),
  }),
});

export const { usePostGuestMutation } = guestApi;
