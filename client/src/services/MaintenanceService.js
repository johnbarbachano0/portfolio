import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const headers = {
  "Content-Type": "application/json",
};

export const maintenanceApi = createApi({
  reducerPath: "maintenanceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SERVER,
  }),
  tagTypes: ["Maintenance"],
  endpoints: (builder) => ({
    getMaintenance: builder.query({
      query: ({ query }) => ({
        url: `/maintenance?q=${query || ""}`,
        method: "get",
        headers,
      }),
      providesTag: ["Maintenance"],
    }),
    postTestimonial: builder.mutation({
      query: ({ query, data }) => ({
        url: `/testimonials?q=${query || ""}`,
        method: "post",
        headers,
        body: data,
      }),
      invalidatesTags: ["Maintenance"],
    }),
  }),
});

export const { useGetMaintenanceQuery, usePostTestimonialMutation } =
  maintenanceApi;
