import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const headers = {
  "Content-Type": "application/json",
};

export const emailApi = createApi({
  reducerPath: "emailApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_EMAIL_SERVER,
  }),
  tagTypes: ["Email"],
  endpoints: (builder) => ({
    // postEmail: builder.mutation({
    //   query: ({ data }) => ({
    //     url: `${process.env.REACT_APP_SERVER}/maintenance/emailtest`,
    //     method: "post",
    //     headers,
    //     body: { ...data, path: `${process.env.REACT_APP_EMAIL_SERVER}/send` },
    //   }),
    //   invalidatesTags: ["Maintenance"],
    // }),
    postEmail: builder.mutation({
      query: ({ data }) => ({
        url: `/send`,
        method: "post",
        headers,
        body: JSON.parse(JSON.stringify(data)),
      }),
      invalidatesTags: ["Maintenance"],
    }),
  }),
});

export const { usePostEmailMutation } = emailApi;
